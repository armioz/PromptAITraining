/* ============================================
   SCRIPT.JS — Prompt Engineering Presentation
   ============================================ */

// ── State ──────────────────────────────────
let currentSlideIndex = 1;
const TOTAL_SLIDES = 15;

// ── Init ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    setupNavDots();
    updateUI();
    initCanvas();
    initKeyboard();
    initTouchSwipe();
});

// ── Slide Navigation ────────────────────────
function changeSlide(direction) {
    const newIndex = currentSlideIndex + direction;
    if (newIndex < 1 || newIndex > TOTAL_SLIDES) return;
    goToSlide(newIndex);
}

function goToSlide(index) {
    if (index === currentSlideIndex) return;

    const currentEl = document.getElementById(`slide-${currentSlideIndex}`);
    const nextEl = document.getElementById(`slide-${index}`);
    if (!currentEl || !nextEl) return;

    const isForward = index > currentSlideIndex;

    // Exit current slide
    currentEl.classList.remove('active');
    currentEl.classList.add(isForward ? 'exit-left' : 'exit-right');
    currentEl.style.pointerEvents = 'none'; // prevent ghost click-through
    setTimeout(() => {
        currentEl.classList.remove('exit-left', 'exit-right');
        currentEl.style.pointerEvents = ''; // restore to CSS default (pointer-events: none from .slide)
    }, 600);

    // Reset animations on next slide
    resetAnimations(nextEl);

    // Enter next slide
    nextEl.style.transform = isForward ? 'translateX(60px)' : 'translateX(-60px)';
    nextEl.style.opacity = '0';

    // Force reflow
    nextEl.offsetHeight;

    nextEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    nextEl.style.opacity = '1';
    nextEl.style.transform = 'translateX(0)';
    nextEl.classList.add('active');

    // Cleanup inline styles after transition — let CSS .active handle pointer-events
    setTimeout(() => {
        nextEl.style.transition = '';
        nextEl.style.transform = '';
        nextEl.style.opacity = '';
        nextEl.style.pointerEvents = ''; // rely on CSS .slide.active { pointer-events: all }
    }, 550);

    currentSlideIndex = index;
    updateUI();

    // Trigger confetti on final slide (11)
    // Trigger confetti on final slide (12)
    if (index === 15) {
        if (typeof startConfetti === 'function') startConfetti();
    } else {
        if (typeof stopConfetti === 'function') stopConfetti();
    }
}

function resetAnimations(slideEl) {
    const animItems = slideEl.querySelectorAll('.animate-in');
    animItems.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    });
    // Trigger re-animation
    setTimeout(() => {
        animItems.forEach(el => {
            el.style.opacity = '';
            el.style.transform = '';
        });
    }, 50);
}

// ── Update UI Elements ────────────────────────
function updateUI() {
    // Progress bar
    const progress = ((currentSlideIndex - 1) / (TOTAL_SLIDES - 1)) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;

    // Counter
    document.getElementById('currentSlide').textContent = currentSlideIndex;
    document.getElementById('totalSlides').textContent = TOTAL_SLIDES;

    // Arrow buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    prevBtn.disabled = currentSlideIndex === 1;
    nextBtn.disabled = currentSlideIndex === TOTAL_SLIDES;

    // Nav dots
    document.querySelectorAll('.nav-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i + 1 === currentSlideIndex);
    });
}

// ── Nav Dots Setup ────────────────────────────
function setupNavDots() {
    const container = document.getElementById('navDots');
    for (let i = 1; i <= TOTAL_SLIDES; i++) {
        const dot = document.createElement('button');
        dot.className = 'nav-dot' + (i === 1 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${i}`);
        dot.setAttribute('title', `Slide ${i}`);
        dot.addEventListener('click', () => goToSlide(i));
        container.appendChild(dot);
    }
}

// ── Keyboard Navigation ───────────────────────
function initKeyboard() {
    document.addEventListener('keydown', (e) => {
        // Don't hijack keys when user is typing in an input/textarea
        const tag = document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;

        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
            case 'PageDown':
            case ' ':
                e.preventDefault();
                changeSlide(1);
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                changeSlide(-1);
                break;
            case 'Home':
                e.preventDefault();
                goToSlide(1);
                break;
            case 'End':
                e.preventDefault();
                goToSlide(TOTAL_SLIDES);
                break;
        }
    });
}

// ── Touch Swipe ────────────────────────────────
function initTouchSwipe() {
    let startX = 0;
    let startY = 0;

    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        const dy = e.changedTouches[0].clientY - startY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
            changeSlide(dx < 0 ? 1 : -1);
        }
    }, { passive: true });
}

// ── Prompt Builder ────────────────────────────
function buildPrompt() {
    const char = document.getElementById('pb-character').value.trim();
    const req = document.getElementById('pb-request').value.trim();
    const ctx = document.getElementById('pb-context').value.trim();
    const tone = document.getElementById('pb-tone').value.trim();
    const fmt = document.getElementById('pb-format').value.trim();

    const parts = [];
    if (char) parts.push(`Act as ${char}.`);
    if (req) parts.push(req + '.');
    if (ctx) parts.push(ctx + '.');
    if (tone) parts.push(`Use a ${tone} style.`);
    if (fmt) parts.push(`Output format: ${fmt}.`);

    if (parts.length === 0) {
        alert('Please fill in at least one field to build your prompt!');
        return;
    }

    const prompt = parts.join(' ');
    const container = document.getElementById('builtPrompt');
    const textEl = document.getElementById('builtText');

    textEl.textContent = prompt;
    container.style.display = 'block';
    container.style.opacity = '0';
    container.style.transform = 'translateY(8px)';
    container.style.transition = 'all 0.4s ease';
    // Force reflow then animate in
    container.offsetHeight;
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
}

function copyPrompt() {
    const text = document.getElementById('builtText').textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.textContent = '✅ Copied!';
        setTimeout(() => { btn.textContent = '📋 Copy Prompt'; }, 2000);
    }).catch(() => {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        const btn = document.querySelector('.copy-btn');
        btn.textContent = '✅ Copied!';
        setTimeout(() => { btn.textContent = '📋 Copy Prompt'; }, 2000);
    });
}

// ── Tabs ──────────────────────────────────────
function showTab(name, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${name}`).classList.add('active');
    if (btn) btn.classList.add('active');
}

// ── Module 3 Example Switcher ─────────────────
function gpSwitch(idx, btn) {
    document.querySelectorAll('.gp-ex-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.gp-ex-tab').forEach(b => b.classList.remove('active'));
    document.getElementById(`gpex-${idx}`).classList.add('active');
    btn.classList.add('active');
}

// ── Canvas Particle Background ────────────────
function initCanvas() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');

    let particles = [];
    let w, h;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const PARTICLE_COUNT = 80;
    const colors = ['#0096c7', '#00b4d8', '#48cae4', '#0077b6', '#90e0ef'];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 2 + 0.5,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: Math.random() * 0.5 + 0.1,
        });
    }

    // Grid lines (subtle)
    function drawGrid() {
        ctx.strokeStyle = 'rgba(255,255,255,0.025)';
        ctx.lineWidth = 1;
        const gridSize = 60;
        for (let x = 0; x < w; x += gridSize) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
        }
        for (let y = 0; y < h; y += gridSize) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }
    }

    // Gradient overlay
    function drawGradient() {
        const g = ctx.createRadialGradient(w * 0.15, h * 0.3, 0, w * 0.15, h * 0.3, w * 0.5);
        g.addColorStop(0, 'rgba(0,150,199,0.1)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);

        const g2 = ctx.createRadialGradient(w * 0.85, h * 0.7, 0, w * 0.85, h * 0.7, w * 0.4);
        g2.addColorStop(0, 'rgba(0,180,216,0.07)');
        g2.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, w, h);
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);

        // Background
        ctx.fillStyle = '#050810';
        ctx.fillRect(0, 0, w, h);

        drawGrid();
        drawGradient();

        // Draw connection lines between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.strokeStyle = `rgba(0,150,199,${0.1 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw particles
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, '0');
            ctx.fill();

            // Glow
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;

            // Move
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around
            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// ─── Certificate Generation ───────────────────
function openCertModal() {
    const modal = document.getElementById('cert-modal');
    // Ensure modal exists before accessing style
    if (modal) {
        modal.style.display = 'block';
        const input = document.getElementById('cert-name-input');
        if (input) input.focus();
    }
}

function closeCertModal() {
    const modal = document.getElementById('cert-modal');
    if (modal) modal.style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function (event) {
    const modal = document.getElementById('cert-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

async function generatePDF() {
    const nameInput = document.getElementById('cert-name-input').value.trim();
    if (!nameInput) {
        alert('Please enter your name.');
        return;
    }

    const btn = document.querySelector('.cert-confirm-btn');
    const originalText = btn.innerHTML;
    btn.textContent = 'Generating...';
    btn.disabled = true;

    // Update Portrait Template
    document.getElementById('cert-name-display-portrait').textContent = nameInput;

    const now = new Date();
    // Example date range matching reference "17-18 January 2024"
    const day = now.getDate();
    const month = now.toLocaleString('en-GB', { month: 'long' });
    const year = now.getFullYear();
    document.getElementById('cert-date-range').textContent = `${day} ${month} ${year}`;

    await new Promise(r => setTimeout(r, 100));

    const element = document.getElementById('certificate-template');

    // Save current styles before modifying for capture
    const originalLeft = element.style.left;
    const originalZIndex = element.style.zIndex;
    const originalPosition = element.style.position;
    const originalTop = element.style.top;

    element.style.position = 'fixed';
    element.style.left = '0';
    element.style.top = '0';
    element.style.zIndex = '-9999';

    try {
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: true,
            backgroundColor: '#ffffff',
            width: 794,
            height: 1123
        });

        const imgData = canvas.toDataURL('image/png');

        // A4 portrait: 210mm x 297mm
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Prompt_Engineering_Certificate_${nameInput.replace(/\s+/g, '_')}.pdf`);

        closeCertModal();
    } catch (err) {
        console.error('PDF Gen Error:', err);
        alert('Failed to generate PDF: ' + err.message);
    } finally {
        // Restore original styles
        element.style.position = originalPosition;
        element.style.left = originalLeft;
        element.style.top = originalTop;
        element.style.zIndex = originalZIndex;

        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

// ── Security / Anti-Copy Measures ────────────────────────────
document.addEventListener('contextmenu', function (e) {
    if (e.target.closest('#certificate-template') || e.target.closest('.cert-signature-area')) {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function (e) {
    // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J, Ctrl+U
    if (e.keyCode == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 67 || e.keyCode == 74)) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode == 85) {
        e.preventDefault();
    }
});
