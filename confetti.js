
// ── CONFETTI EFFECT ───────────────────────────
let confettiInterval = null;
let confettiCanvas = null;

function startConfetti() {
    if (confettiInterval) return; // already running

    // Create canvas overlay
    confettiCanvas = document.createElement('canvas');
    confettiCanvas.style.position = 'fixed';
    confettiCanvas.style.top = '0';
    confettiCanvas.style.left = '0';
    confettiCanvas.style.width = '100%';
    confettiCanvas.style.height = '100%';
    confettiCanvas.style.pointerEvents = 'none';
    confettiCanvas.style.zIndex = '9999';
    document.body.appendChild(confettiCanvas);

    const ctx = confettiCanvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    confettiCanvas.width = width;
    confettiCanvas.height = height;

    const particles = [];
    const colors = ['#f472b6', '#22d3ee', '#a78bfa', '#fbbf24', '#34d399', '#f87171'];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height - height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 150 + 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngle: 0,
            tiltAngleIncr: (Math.random() * 0.07) + 0.05
        });
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p, i) => {
            p.tiltAngle += p.tiltAngleIncr;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) * 0.5;
            p.x += Math.sin(0) * 2;
            p.tilt = Math.sin(p.tiltAngle) * 15;

            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
            ctx.stroke();

            // Reset if out of view
            if (p.y > height) {
                particles[i] = {
                    x: Math.random() * width,
                    y: -10,
                    r: p.r,
                    d: p.d,
                    color: p.color,
                    tilt: p.tilt,
                    tiltAngle: p.tiltAngle,
                    tiltAngleIncr: p.tiltAngleIncr
                };
            }
        });
    }

    confettiInterval = setInterval(draw, 20);

    // Handle resize
    window.addEventListener('resize', () => {
        if (confettiCanvas) {
            width = window.innerWidth;
            height = window.innerHeight;
            confettiCanvas.width = width;
            confettiCanvas.height = height;
        }
    });
}

function stopConfetti() {
    if (confettiInterval) {
        clearInterval(confettiInterval);
        confettiInterval = null;
    }
    if (confettiCanvas) {
        document.body.removeChild(confettiCanvas);
        confettiCanvas = null;
    }
}
