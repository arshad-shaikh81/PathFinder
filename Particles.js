// ==========================================================================
// PATHFINDER — PARTICLE BACKGROUND SYSTEM
// Floating nodes + connecting lines + mouse-reactive glow
// ==========================================================================

(function () {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');

    // ── Config ────────────────────────────────────────────────────────────
    const CONFIG = {
        particleCount: 90,          // number of floating nodes
        maxConnectionDist: 140,     // max px before a line is drawn
        particleMinRadius: 1,       // smallest dot size
        particleMaxRadius: 2.4,     // largest dot size
        speed: 0.28,                // base drift speed
        mouseRadius: 130,           // interaction radius around cursor
        mouseForce: 0.018,          // how strongly nodes repel the cursor
        fadeInDuration: 2000,       // ms for canvas to fade in
        colors: {
            node: 'rgba(157, 78, 223,',     // purple — matches --accent-purple
            nodeAlt: 'rgba(58, 134, 255,',  // blue   — matches --accent-blue
            line: 'rgba(139, 92, 246,',     // connector line color
            glow: 'rgba(162, 82, 250,',     // mouse-proximity glow
        }
    };

    // ── State ─────────────────────────────────────────────────────────────
    let particles = [];
    let mouse = { x: -9999, y: -9999 };
    let globalAlpha = 0;            // fades the whole canvas in on load
    let startTime = null;
    let animFrameId = null;
    let W = 0, H = 0;

    // ── Particle class ────────────────────────────────────────────────────
    class Particle {
        constructor() { this.reset(true); }

        reset(randomY = false) {
            this.x  = Math.random() * W;
            this.y  = randomY ? Math.random() * H : -10;
            this.r  = CONFIG.particleMinRadius + Math.random() * (CONFIG.particleMaxRadius - CONFIG.particleMinRadius);
            this.vx = (Math.random() - 0.5) * CONFIG.speed;
            this.vy = (Math.random() - 0.5) * CONFIG.speed;
            // alternate between purple and blue tones
            this.colorBase = Math.random() > 0.45 ? CONFIG.colors.node : CONFIG.colors.nodeAlt;
            this.baseAlpha = 0.35 + Math.random() * 0.45;
            this.alpha = this.baseAlpha;
            // subtle pulse
            this.pulseSpeed  = 0.008 + Math.random() * 0.012;
            this.pulseOffset = Math.random() * Math.PI * 2;
        }

        update(t) {
            // pulse opacity
            this.alpha = this.baseAlpha + Math.sin(t * this.pulseSpeed + this.pulseOffset) * 0.12;

            // mouse repulsion
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONFIG.mouseRadius) {
                const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius;
                this.x += dx / dist * force * CONFIG.mouseRadius * CONFIG.mouseForce;
                this.y += dy / dist * force * CONFIG.mouseRadius * CONFIG.mouseForce;
            }

            this.x += this.vx;
            this.y += this.vy;

            // wrap horizontally, reset from top when going off bottom/top
            if (this.x < -10)  this.x = W + 10;
            if (this.x > W + 10) this.x = -10;
            if (this.y > H + 10 || this.y < -10) this.reset(false);
        }

        draw() {
            // soft glow halo
            const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 3.5);
            grd.addColorStop(0,   `${this.colorBase}${(this.alpha * globalAlpha).toFixed(3)})`);
            grd.addColorStop(1,   `${this.colorBase}0)`);
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r * 3.5, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();

            // solid core dot
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `${this.colorBase}${(this.alpha * globalAlpha).toFixed(3)})`;
            ctx.fill();
        }
    }

    // ── Draw connecting lines ─────────────────────────────────────────────
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const a = particles[i];
                const b = particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONFIG.maxConnectionDist) {
                    const lineAlpha = (1 - dist / CONFIG.maxConnectionDist) * 0.18 * globalAlpha;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = `${CONFIG.colors.line}${lineAlpha.toFixed(3)})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
    }

    // ── Mouse proximity glow on canvas ───────────────────────────────────
    function drawMouseGlow() {
        if (mouse.x === -9999) return;
        const grd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, CONFIG.mouseRadius);
        grd.addColorStop(0,   `${CONFIG.colors.glow}${(0.07 * globalAlpha).toFixed(3)})`);
        grd.addColorStop(1,   `${CONFIG.colors.glow}0)`);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, CONFIG.mouseRadius, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
    }

    // ── Main render loop ──────────────────────────────────────────────────
    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        // fade-in over first N ms
        globalAlpha = Math.min(elapsed / CONFIG.fadeInDuration, 1);

        ctx.clearRect(0, 0, W, H);

        drawMouseGlow();
        drawConnections();
        particles.forEach(p => { p.update(elapsed); p.draw(); });

        animFrameId = requestAnimationFrame(animate);
    }

    // ── Resize handler ────────────────────────────────────────────────────
    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    // ── Build initial particle pool ───────────────────────────────────────
    function initParticles() {
        particles = [];
        for (let i = 0; i < CONFIG.particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // ── Bootstrap ─────────────────────────────────────────────────────────
    function init() {
        resize();
        initParticles();

        window.addEventListener('resize', () => {
            resize();
            initParticles();     // regenerate so density stays right
        });

        window.addEventListener('mousemove', e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = -9999;
            mouse.y = -9999;
        });

        // Touch support
        window.addEventListener('touchmove', e => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        }, { passive: true });

        window.addEventListener('touchend', () => {
            mouse.x = -9999;
            mouse.y = -9999;
        });

        animFrameId = requestAnimationFrame(animate);
    }

    // Start after DOM is ready (script loads at end of body, so it's fine)
    init();
})();