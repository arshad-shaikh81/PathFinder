/* ==========================================================================
   AUTH (Login / Sign Up) — Firebase Authentication
   ==========================================================================
   SETUP INSTRUCTIONS:
   1. Go to https://console.firebase.google.com and create a project (free).
   2. In the project, go to Build > Authentication > Get Started,
      then enable the "Email/Password" sign-in provider.
   3. Go to Project Settings (gear icon) > General > "Your apps" >
      click the </> (Web) icon to register a web app.
   4. Copy the firebaseConfig object Firebase gives you and paste it
      below, replacing the placeholder values.
   ========================================================================== */

const firebaseConfig = {
    apiKey: "AIzaSyDQ-Wi8JfDLHbS4z66dqoX6bDDd-l1LobA",
    authDomain: "pathfinder-8dcfe.firebaseapp.com",
    projectId: "pathfinder-8dcfe",
    storageBucket: "pathfinder-8dcfe.firebasestorage.app",
    messagingSenderId: "199496782181",
    appId: "1:199496782181:web:ad41b1da50ee54d5c5d18c"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

/* ---------------- Modal open/close + mode switching ---------------- */

function showAuthModal(mode, contextMessage) {
    document.getElementById('auth-modal').classList.remove('hidden');
    setAuthMode(mode || 'login');

    const msgEl = document.getElementById('auth-context-msg');
    if (msgEl) {
        if (contextMessage) {
            msgEl.textContent = contextMessage;
            msgEl.classList.remove('hidden');
        } else {
            msgEl.classList.add('hidden');
        }
    }
}

function closeAuthModal() {
    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('auth-form').reset();
    clearAuthError();
}

function setAuthMode(mode) {
    const isLogin = mode === 'login';
    document.getElementById('auth-modal-title').textContent = isLogin ? 'Log In' : 'Create Account';
    document.getElementById('auth-submit-btn').textContent = isLogin ? 'Log In' : 'Sign Up';
    document.getElementById('auth-name-group').classList.toggle('hidden', isLogin);
    document.getElementById('auth-toggle-text').innerHTML = isLogin
        ? 'Don\'t have an account? <a href="#" onclick="event.preventDefault(); setAuthMode(\'signup\')">Sign up</a>'
        : 'Already have an account? <a href="#" onclick="event.preventDefault(); setAuthMode(\'login\')">Log in</a>';
    document.getElementById('auth-form').dataset.mode = mode;
    clearAuthError();
}

function clearAuthError() {
    const el = document.getElementById('auth-error');
    el.textContent = '';
    el.classList.add('hidden');
}

function showAuthError(msg) {
    const el = document.getElementById('auth-error');
    el.textContent = msg;
    el.classList.remove('hidden');
}

function friendlyAuthError(err) {
    switch (err.code) {
        case 'auth/email-already-in-use':
            return 'An account with this email already exists.';
        case 'auth/invalid-email':
            return 'Please enter a valid email address.';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters.';
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
            return 'Incorrect email or password.';
        default:
            return err.message || 'Something went wrong. Please try again.';
    }
}

/* ---------------- Click outside to close ---------------- */

document.addEventListener('click', (e) => {
    const modal = document.getElementById('auth-modal');
    if (modal && e.target === modal) {
        closeAuthModal();
    }
});

/* ---------------- Form submit (signup / login) ---------------- */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('auth-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const mode = form.dataset.mode || 'login';
        const email = document.getElementById('auth-email').value.trim();
        const password = document.getElementById('auth-password').value;
        const name = document.getElementById('auth-name').value.trim();
        const submitBtn = document.getElementById('auth-submit-btn');

        clearAuthError();
        submitBtn.disabled = true;
        submitBtn.textContent = 'Please wait...';

        const resetBtn = () => {
            submitBtn.disabled = false;
            submitBtn.textContent = mode === 'login' ? 'Log In' : 'Sign Up';
        };

        if (mode === 'signup') {
            auth.createUserWithEmailAndPassword(email, password)
                .then((cred) => name ? cred.user.updateProfile({ displayName: name }) : null)
                .then(() => { closeAuthModal(); })
                .catch((err) => { showAuthError(friendlyAuthError(err)); resetBtn(); });
        } else {
            auth.signInWithEmailAndPassword(email, password)
                .then(() => { closeAuthModal(); })
                .catch((err) => { showAuthError(friendlyAuthError(err)); resetBtn(); });
        }
    });
});

/* ---------------- Logout ---------------- */

function logoutUser() {
    auth.signOut();
}

/* ---------------- Reflect auth state in the navbar ---------------- */

auth.onAuthStateChanged((user) => {
    const loggedOutEl = document.getElementById('auth-actions-logged-out');
    const loggedInEl = document.getElementById('auth-actions-logged-in');
    const userNameEl = document.getElementById('auth-user-name');
    const userAvatarEl = document.getElementById('auth-user-avatar');

    if (user) {
        const displayName = user.displayName || (user.email ? user.email.split('@')[0] : 'User');
        loggedOutEl.classList.add('hidden');
        loggedInEl.classList.remove('hidden');
        userNameEl.textContent = displayName;
        userAvatarEl.textContent = displayName.charAt(0);
        loadUserData(user.uid);
    } else {
        loggedOutEl.classList.remove('hidden');
        loggedInEl.classList.add('hidden');
        clearLocalUserData();
    }
});

/* ---------------- Firestore-backed saved paths & progress ----------------
   Saved career paths and skill-node progress used to live in localStorage
   (per-browser only). They now live in Firestore under users/{uid}, so an
   account's data follows the person across devices and browsers, and is
   gone from the UI the moment they log out. `savedCareers` and
   `progressTracker` are the same in-memory arrays/objects app.js already
   uses everywhere — we just mutate them in place here instead of reading
   from/writing to localStorage. ---------------------------------------- */

function loadUserData(uid) {
    db.collection('users').doc(uid).get().then((doc) => {
        const data = doc.exists ? doc.data() : {};

        if (typeof savedCareers !== 'undefined') {
            savedCareers.length = 0;
            (data.savedCareers || []).forEach((k) => savedCareers.push(k));
        }
        if (typeof progressTracker !== 'undefined') {
            Object.keys(progressTracker).forEach((k) => delete progressTracker[k]);
            Object.assign(progressTracker, data.progress || {});
        }

        refreshDataDependentUI();
    }).catch((err) => {
        console.error('Failed to load saved data:', err);
    });
}

function clearLocalUserData() {
    if (typeof savedCareers !== 'undefined') savedCareers.length = 0;
    if (typeof progressTracker !== 'undefined') {
        Object.keys(progressTracker).forEach((k) => delete progressTracker[k]);
    }
    refreshDataDependentUI();
}

function persistUserData() {
    const user = auth.currentUser;
    if (!user) return;
    db.collection('users').doc(user.uid).set({
        savedCareers: typeof savedCareers !== 'undefined' ? savedCareers : [],
        progress: typeof progressTracker !== 'undefined' ? progressTracker : {}
    }, { merge: true }).catch((err) => {
        console.error('Failed to save data:', err);
    });
}

function refreshDataDependentUI() {
    if (typeof renderCareerCards === 'function') renderCareerCards();
    if (typeof updateGlobalMetricsDashboard === 'function') updateGlobalMetricsDashboard();
    if (typeof renderSavedCareers === 'function') renderSavedCareers();
    if (typeof activeOpenCareer !== 'undefined' && activeOpenCareer) {
        if (typeof renderRoadmapTimeline === 'function') renderRoadmapTimeline(activeOpenCareer);
        if (typeof calculateTrackCompletion === 'function') calculateTrackCompletion(activeOpenCareer);
    }
}

/* ---------------- Gate for actions that require an account ----------------
   Call requireAuth() at the top of any action that should only work for a
   logged-in user (saving a path, checking off progress, etc). Returns true
   if the user may proceed; otherwise opens the login modal with an
   explanatory message and returns false. -------------------------------- */

function requireAuth(message) {
    if (auth.currentUser) return true;
    showAuthModal('login', message || 'Log in to continue.');
    return false;
}