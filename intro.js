/* ==========================================================================
   PREMIUM INTRO ANIMATION (ADDITIVE, SELF-CONTAINED)
   - Does not touch app.js, Particles.js, or any existing function/logic.
   - Only reads existing DOM (never rewrites it) and controls the new
     #intro-overlay element that was appended to index.html.
   - Fails safe: if GSAP doesn't load, or anything throws, the overlay is
     removed immediately so the real site is never blocked.
   ========================================================================== */
(function () {
    "use strict";

    var overlay = document.getElementById("intro-overlay");
    var bg = document.getElementById("intro-bg");
    var introText = document.getElementById("intro-logo-text");

    if (!overlay || !bg || !introText) return;

    var finished = false;
    var html = document.documentElement;
    var body = document.body;

    html.classList.add("intro-lock");
    body.classList.add("intro-lock");

    function unlockScroll() {
        html.classList.remove("intro-lock");
        body.classList.remove("intro-lock");
    }

    function removeOverlay() {
        if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
    }

    var primedTargets = [];
    function clearPrimedStyles() {
        primedTargets.forEach(function (list) {
            list.forEach(function (el) {
                el.style.opacity = "";
                el.style.transform = "";
                el.style.filter = "";
            });
        });
        primedTargets = [];
    }

    function finishIntro() {
        if (finished) return;
        finished = true;
        unlockScroll();
        removeOverlay();
        // Release any elements we primed for the staggered reveal, in case
        // the timeline was interrupted before reaching them.
        clearPrimedStyles();
    }

    // Absolute safety net: never let the intro block the site for more
    // than a few seconds, no matter what goes wrong.
    var safetyTimer = setTimeout(finishIntro, 4500);

    var reduceMotion = false;
    try {
        reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {}

    function startIntro() {
        var navBrand = document.querySelector(".nav-brand");

        if (!navBrand || typeof window.gsap === "undefined") {
            finishIntro();
            return;
        }

        var gsap = window.gsap;

        if (reduceMotion) {
            gsap.set(bg, { opacity: 1 });
            gsap.set(introText, { opacity: 0 });
            gsap.to(bg, {
                opacity: 0,
                duration: 0.4,
                ease: "power1.out",
                onComplete: function () {
                    clearTimeout(safetyTimer);
                    finishIntro();
                }
            });
            return;
        }

        // Mirror the navbar brand's exact text so the intro reads the
        // same word (styled uppercase) that will "become" the logo.
        introText.textContent = navBrand.textContent.trim();

        // Stage the elements that will reveal in a choreographed stagger
        // while the intro clears — purely additive, no CSS files touched.
        var navLinks = document.querySelectorAll("#nav-links-list li");
        var heroBadge = document.querySelectorAll("#home-view .hero-badge");
        var heroHeading = document.querySelectorAll("#home-view .hero-section h1");
        var heroPara = document.querySelectorAll("#home-view .hero-section p");
        var filterBtns = document.querySelectorAll("#home-view .filter-btn");
        var cards = document.querySelectorAll("#home-view .career-card");

        primedTargets.push(
            Array.prototype.slice.call(navLinks),
            Array.prototype.slice.call(heroBadge),
            Array.prototype.slice.call(heroHeading),
            Array.prototype.slice.call(heroPara),
            Array.prototype.slice.call(filterBtns),
            Array.prototype.slice.call(cards)
        );

        gsap.set(navLinks, { opacity: 0, y: 16 });
        gsap.set(heroBadge, { opacity: 0, y: 18 });
        gsap.set(heroHeading, { opacity: 0, y: 24 });
        gsap.set(heroPara, { opacity: 0, y: 18 });
        gsap.set(filterBtns, { opacity: 0, y: 14 });
        gsap.set(cards, { opacity: 0, y: 24 });

        // Size the giant wordmark to ~65% of the viewport width.
        function sizeIntroText() {
            var reference = 100; // px, arbitrary measuring baseline
            introText.style.fontSize = reference + "px";
            var measuredWidth = introText.getBoundingClientRect().width || 1;
            var targetWidth = window.innerWidth * 0.65;
            var fitSize = reference * (targetWidth / measuredWidth);
            // Keep it sane on very large / very small viewports.
            fitSize = Math.max(40, Math.min(fitSize, 280));
            introText.style.fontSize = fitSize + "px";
        }

        sizeIntroText();

        gsap.set(introText, { xPercent: -50, yPercent: -50, x: 0, y: 0, scale: 1, opacity: 1 });
        gsap.set(bg, { opacity: 1 });

        // Measure the exact travel distance/scale to the real navbar logo
        // up front — the navbar's layout is already stable (position: fixed,
        // and every element we hid above used opacity, which never reflows).
        var startRect = introText.getBoundingClientRect();
        var endRect = navBrand.getBoundingClientRect();

        var startCenterX = startRect.left + startRect.width / 2;
        var startCenterY = startRect.top + startRect.height / 2;
        var endCenterX = endRect.left + endRect.width / 2;
        var endCenterY = endRect.top + endRect.height / 2;

        var deltaX = endCenterX - startCenterX;
        var deltaY = endCenterY - startCenterY;

        var currentFontSize = parseFloat(getComputedStyle(introText).fontSize) || 1;
        var targetFontSize = parseFloat(getComputedStyle(navBrand).fontSize) || currentFontSize;
        var scaleRatio = targetFontSize / currentFontSize;

        // Single, flat timeline — nothing nested — so onComplete only fires
        // once every tween below has genuinely finished playing out.
        var tl = gsap.timeline({
            onComplete: function () {
                clearTimeout(safetyTimer);
                introText.style.opacity = "0";
                finishIntro();
            }
        });

        // 1) Hold the giant centered wordmark for ~1s.
        tl.to({}, { duration: 1 });
        tl.addLabel("hold");

        // 2) Move the SAME element to the navbar logo's exact spot — no
        //    fade, no swap, just travel — while the black backdrop clears.
        //    (These two run together — they're one beat: "the logo arrives
        //    as the dark curtain lifts".)
        tl.to(introText, {
            x: deltaX,
            y: deltaY,
            scale: scaleRatio,
            duration: 1.1,
            ease: "expo.out"
        }, "hold");

        tl.to(bg, {
            opacity: 0,
            duration: 0.95,
            ease: "power2.out",
            onStart: function () {
                overlay.style.pointerEvents = "none";
            }
        }, "hold+=0.1");

        // 3) From here on, every group is fully SEQUENTIAL — each one
        //    finishes completely before the next begins. No position
        //    argument is passed, so GSAP simply queues each tween at the
        //    end of the one before it.
        tl.to(navLinks, {
            opacity: 1,
            y: 0,
            duration: 0.42,
            ease: "power3.out",
            stagger: 0.06
        });

        tl.to(heroBadge, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
        tl.to(heroHeading, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
        tl.to(heroPara, { opacity: 1, y: 0, duration: 0.42, ease: "power3.out" });

        tl.to(filterBtns, {
            opacity: 1,
            y: 0,
            duration: 0.38,
            ease: "power3.out",
            stagger: 0.035
        });

        tl.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
            stagger: 0.03
        });
    }

    function boot() {
        try {
            // Wait for the webfont so our width measurement is accurate,
            // then double-rAF to ensure the browser has painted the
            // navbar layout (needed for an accurate target rect).
            var go = function () {
                requestAnimationFrame(function () {
                    requestAnimationFrame(startIntro);
                });
            };
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(go).catch(go);
            } else {
                go();
            }
        } catch (e) {
            finishIntro();
        }
    }

    if (document.readyState === "complete") {
        boot();
    } else {
        window.addEventListener("load", boot);
    }
})();