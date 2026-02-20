$f = 'd:\AI promt project\index.html'
$h = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

# ── HEAD: Add Sarabun Thai font ──────────────────────────────────────────────
$h = $h.Replace(
    'family=JetBrains+Mono:wght@400;700&display=swap"',
    'family=JetBrains+Mono:wght@400;700&family=Sarabun:wght@300;400;500;600;700&display=swap"'
)

# ── BODY: Add lang toggle button after progress bar container ────────────────
$toggle = @'
  <!-- Language Toggle -->
  <button id="langToggle" class="lang-toggle" onclick="toggleLanguage()">TH</button>

'@
$h = $h.Replace('  <!-- Slide Counter -->', $toggle + '  <!-- Slide Counter -->')

# ── BODY: Load translations.js before script.js ─────────────────────────────
$h = $h.Replace('<script src="script.js">', '<script src="translations.js"></script>' + "`r`n" + '  <script src="script.js">')

# ━━ Slide 1 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
$h = $h.Replace('<div class="badge animate-in" style="--delay:0.1s">🚀 Training Program</div>',
    '<div class="badge animate-in" style="--delay:0.1s" data-i18n="badge-title">🚀 Training Program</div>')
$h = $h.Replace('<p class="subtitle animate-in" style="--delay:0.4s">
          Learn how to communicate with AI like a pro.<br />
          From basics to advanced techniques — all in one place.
        </p>',
    '<p class="subtitle animate-in" style="--delay:0.4s" data-i18n-html="s1-sub">Learn how to communicate with AI like a pro.<br>From basics to advanced techniques — all in one place.</p>')
$h = $h.Replace('<span>10 Modules</span>', '<span data-i18n="meta-modules">10 Modules</span>')
$h = $h.Replace('<span>Self-paced</span>', '<span data-i18n="meta-paced">Self-paced</span>')
$h = $h.Replace('<span>Practical Exercises</span>', '<span data-i18n="meta-exercises">Practical Exercises</span>')
$h = $h.Replace('Begin Training
          <span class="btn-arrow">→</span>', 'Begin Training <span class="btn-arrow">→</span>')
$h = $h.Replace('<div class="scroll-hint animate-in" style="--delay:1s">Press → or click arrow to advance</div>',
    '<div class="scroll-hint animate-in" style="--delay:1s" data-i18n="scroll-hint">Press → or click arrow to advance</div>')

# ━━ Slide 2 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
$h = $h.Replace('<div class="section-label animate-in" style="--delay:0.05s">Module 01</div>',
    '<div class="section-label animate-in" style="--delay:0.05s" data-i18n="s2-label">Module 01</div>')

# ━━ Slide 3 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
$h = $h.Replace('<div class="section-label animate-in" style="--delay:0.1s">Module 02</div>',
    '<div class="section-label animate-in" style="--delay:0.1s" data-i18n="s3-label">Module 02</div>')

# ━━ Slide 4 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# tab buttons for module 3 examples
$h = $h.Replace('<button class="gp-ex-tab active" onclick="gpSwitch(0,this)">🏭 Production Engineer</button>',
    '<button class="gp-ex-tab active" onclick="gpSwitch(0,this)" data-i18n="s4-tab0">🏭 Production Engineer</button>')
$h = $h.Replace('<button class="gp-ex-tab" onclick="gpSwitch(1,this)">🏢 Facility Engineer</button>',
    '<button class="gp-ex-tab" onclick="gpSwitch(1,this)" data-i18n="s4-tab1">🏢 Facility Engineer</button>')
$h = $h.Replace('<button class="gp-ex-tab" onclick="gpSwitch(2,this)">🔬 Quality Engineer</button>',
    '<button class="gp-ex-tab" onclick="gpSwitch(2,this)" data-i18n="s4-tab2">🔬 Quality Engineer</button>')

# ━━ Slide 5 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
$h = $h.Replace('<div class="section-label animate-in" style="--delay:0.1s">Module 04</div>',
    '<div class="section-label animate-in" style="--delay:0.1s" data-i18n="s5-label">Module 04</div>')
$h = $h.Replace('<h2 class="animate-in" style="--delay:0.2s">Core <span class="gradient-text">Techniques</span></h2>',
    '<h2 class="animate-in" style="--delay:0.2s" data-i18n-html="s5-h2">Core <span class="gradient-text">Techniques</span></h2>')
$h = $h.Replace('<h3>Zero-Shot Prompting</h3>', '<h3 data-i18n="s5-t1-title">Zero-Shot Prompting</h3>')
$h = $h.Replace('<p>Give the AI a task with no examples. Works best for simple, clear instructions.</p>',
    '<p data-i18n="s5-t1-desc">Give the AI a task with no examples. Works best for simple, clear instructions.</p>')
$h = $h.Replace('<h3>Few-Shot Prompting</h3>', '<h3 data-i18n="s5-t2-title">Few-Shot Prompting</h3>')
$h = $h.Replace('<p>Provide 2–5 examples before your actual request to guide the AI''s style and format.</p>',
    '<p data-i18n="s5-t2-desc">Provide 2–5 examples before your actual request to guide the AI''s style and format.</p>')
$h = $h.Replace('<h3>Chain-of-Thought</h3>', '<h3 data-i18n="s5-t3-title">Chain-of-Thought</h3>')
$h = $h.Replace('<p>Ask the AI to "think step by step" to improve reasoning on complex tasks.</p>',
    '<p data-i18n="s5-t3-desc">Ask the AI to "think step by step" to improve reasoning on complex tasks.</p>')
$h = $h.Replace('<h3>Role Prompting</h3>', '<h3 data-i18n="s5-t4-title">Role Prompting</h3>')
$h = $h.Replace('<p>Assign a specific expert role to tune the AI''s perspective and vocabulary.</p>',
    '<p data-i18n="s5-t4-desc">Assign a specific expert role to tune the AI''s perspective and vocabulary.</p>')
$h = $h.Replace('<h3>Constraint Setting</h3>', '<h3 data-i18n="s5-t5-title">Constraint Setting</h3>')
$h = $h.Replace('<p>Set explicit limitations: word count, format, tone, or what to avoid.</p>',
    '<p data-i18n="s5-t5-desc">Set explicit limitations: word count, format, tone, or what to avoid.</p>')
$h = $h.Replace('<h3>Iterative Refinement</h3>', '<h3 data-i18n="s5-t6-title">Iterative Refinement</h3>')
$h = $h.Replace('<p>Treat prompting as a conversation. Refine based on output until you get perfection.</p>',
    '<p data-i18n="s5-t6-desc">Treat prompting as a conversation. Refine based on output until you get perfection.</p>')

# ━━ Slide 6 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
$h = $h.Replace('<div class="section-label animate-in" style="--delay:0.1s">Module 05</div>',
    '<div class="section-label animate-in" style="--delay:0.1s" data-i18n="s6-label">Module 05</div>')
$h = $h.Replace('<h2 class="animate-in" style="--delay:0.2s">Common <span class="gradient-text">Mistakes</span> to Avoid</h2>',
    '<h2 class="animate-in" style="--delay:0.2s" data-i18n-html="s6-h2">Common <span class="gradient-text">Mistakes</span> to Avoid</h2>')

# ━━ Slide 7 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
$h = $h.Replace('<div class="section-label animate-in" style="--delay:0.05s">Module 06</div>',
    '<div class="section-label animate-in" style="--delay:0.05s" data-i18n="s7-label">Module 06</div>')
$h = $h.Replace('<div class="cc-name">Character</div>', '<div class="cc-name" data-i18n="s7-c-name">Character</div>')
$h = $h.Replace('<div class="cc-desc">Define the AI''s role &amp; persona</div>',
    '<div class="cc-desc" data-i18n="s7-c-desc">Define the AI''s role &amp; persona</div>')
$h = $h.Replace('<div class="cc-name">Request</div>', '<div class="cc-name" data-i18n="s7-r-name">Request</div>')
$h = $h.Replace('<div class="cc-desc">State your exact task or question</div>',
    '<div class="cc-desc" data-i18n="s7-r-desc">State your exact task or question</div>')
$h = $h.Replace('<div class="cc-name">Examples</div>', '<div class="cc-name" data-i18n="s7-e1-name">Examples</div>')
$h = $h.Replace('<div class="cc-desc">Provide sample inputs/outputs</div>',
    '<div class="cc-desc" data-i18n="s7-e1-desc">Provide sample inputs/outputs</div>')
$h = $h.Replace('<div class="cc-name">Adjustments</div>', '<div class="cc-name" data-i18n="s7-a-name">Adjustments</div>')
$h = $h.Replace('<div class="cc-desc">Set tone, style &amp; constraints</div>',
    '<div class="cc-desc" data-i18n="s7-a-desc">Set tone, style &amp; constraints</div>')
$h = $h.Replace('<div class="cc-name">Type of Output</div>', '<div class="cc-name" data-i18n="s7-t-name">Type of Output</div>')
$h = $h.Replace('<div class="cc-desc">Specify format: list, table, code…</div>',
    '<div class="cc-desc" data-i18n="s7-t-desc">Specify format: list, table, code…</div>')
$h = $h.Replace('<div class="cc-name">Extras</div>', '<div class="cc-name" data-i18n="s7-e2-name">Extras</div>')
$h = $h.Replace('<div class="cc-desc">Any special rules or context</div>',
    '<div class="cc-desc" data-i18n="s7-e2-desc">Any special rules or context</div>')

# ━━ Slide 8 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
$h = $h.Replace('<div class="section-label animate-in" style="--delay:0.1s">Module 07</div>',
    '<div class="section-label animate-in" style="--delay:0.1s" data-i18n="s8-label">Module 07</div>')
$h = $h.Replace('<h2 class="animate-in" style="--delay:0.2s">Practice <span class="gradient-text">Builder</span></h2>',
    '<h2 class="animate-in" style="--delay:0.2s" data-i18n-html="s8-h2">Practice <span class="gradient-text">Builder</span></h2>')
$h = $h.Replace('<p class="lead animate-in" style="--delay:0.3s">Build a prompt using the CREATE framework below:</p>',
    '<p class="lead animate-in" style="--delay:0.3s" data-i18n="s8-lead">Build a prompt using the CREATE framework below:</p>')
$h = $h.Replace('<label>🎭 Character (Role)</label>', '<label data-i18n="s8-char-label">🎭 Character (Role)</label>')
$h = $h.Replace('<label>📋 Request (Task)</label>', '<label data-i18n="s8-req-label">📋 Request (Task)</label>')
$h = $h.Replace('<label>💡 Context / Examples</label>', '<label data-i18n="s8-ctx-label">💡 Context / Examples</label>')
$h = $h.Replace('<label>🎨 Tone &amp; Style</label>', '<label data-i18n="s8-tone-label">🎨 Tone &amp; Style</label>')
$h = $h.Replace('<label>📄 Output Format</label>', '<label data-i18n="s8-fmt-label">📄 Output Format</label>')
$h = $h.Replace('id="pb-character" placeholder="e.g. Expert copywriter with 10 years experience"',
    'id="pb-character" data-i18n-ph="s8-char-ph" placeholder="e.g. Expert copywriter with 10 years experience"')
$h = $h.Replace('id="pb-request" placeholder="e.g. Write a product description for..."',
    'id="pb-request" data-i18n-ph="s8-req-ph" placeholder="e.g. Write a product description for..."')
$h = $h.Replace('id="pb-context"
              placeholder="e.g. The product is a Thai organic skincare brand targeting..."',
    'id="pb-context" data-i18n-ph="s8-ctx-ph" placeholder="e.g. The product is a Thai organic skincare brand targeting..."')
$h = $h.Replace('id="pb-tone" placeholder="e.g. Friendly, professional, no jargon"',
    'id="pb-tone" data-i18n-ph="s8-tone-ph" placeholder="e.g. Friendly, professional, no jargon"')
$h = $h.Replace('id="pb-format" placeholder="e.g. 3 bullet points, max 50 words each"',
    'id="pb-format" data-i18n-ph="s8-fmt-ph" placeholder="e.g. 3 bullet points, max 50 words each"')
$h = $h.Replace('<div class="built-label">Your Crafted Prompt:</div>',
    '<div class="built-label" data-i18n="s8-built-label">Your Crafted Prompt:</div>')
$h = $h.Replace('<button class="copy-btn" onclick="copyPrompt()">📋 Copy Prompt</button>',
    '<button class="copy-btn" onclick="copyPrompt()" data-i18n="btn-copy">📋 Copy Prompt</button>')
$h = $h.Replace('<button class="build-btn" onclick="buildPrompt()">⚡ Generate My Prompt</button>',
    '<button class="build-btn" onclick="buildPrompt()" data-i18n="btn-generate">⚡ Generate My Prompt</button>')

# ━━ Slide 9 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
$h = $h.Replace('<div class="section-label animate-in" style="--delay:0.1s">Module 08</div>',
    '<div class="section-label animate-in" style="--delay:0.1s" data-i18n="s9-label">Module 08</div>')
$h = $h.Replace('<h2 class="animate-in" style="--delay:0.2s">Real-World <span class="gradient-text">Use Cases</span></h2>',
    '<h2 class="animate-in" style="--delay:0.2s" data-i18n-html="s9-h2">Real-World <span class="gradient-text">Use Cases</span></h2>')
$h = $h.Replace('<p class="lead animate-in" style="--delay:0.3s">Prompt engineering applies across every industry and role:</p>',
    '<p class="lead animate-in" style="--delay:0.3s" data-i18n="s9-lead">Prompt engineering applies across every industry and role:</p>')
$h = $h.Replace('<button class="tab-btn active" onclick="showTab(''business'', this)">💼 Business</button>',
    '<button class="tab-btn active" onclick="showTab(''business'', this)" data-i18n="s9-tab-biz">💼 Business</button>')
$h = $h.Replace('<button class="tab-btn" onclick="showTab(''tech'', this)">💻 Tech</button>',
    '<button class="tab-btn" onclick="showTab(''tech'', this)" data-i18n="s9-tab-tech">💻 Tech</button>')
$h = $h.Replace('<button class="tab-btn" onclick="showTab(''creative'', this)">🎨 Creative</button>',
    '<button class="tab-btn" onclick="showTab(''creative'', this)" data-i18n="s9-tab-creative">🎨 Creative</button>')
$h = $h.Replace('<button class="tab-btn" onclick="showTab(''education'', this)">📚 Education</button>',
    '<button class="tab-btn" onclick="showTab(''education'', this)" data-i18n="s9-tab-edu">📚 Education</button>')
$h = $h.Replace('<button class="tab-btn" onclick="showTab(''qa'', this)">🔬 QA / ISO 13485</button>',
    '<button class="tab-btn" onclick="showTab(''qa'', this)" data-i18n="s9-tab-qa">🔬 QA / ISO 13485</button>')
$h = $h.Replace('<button class="tab-btn" onclick="showTab(''facility'', this)">🏗️ Facility Eng.</button>',
    '<button class="tab-btn" onclick="showTab(''facility'', this)" data-i18n="s9-tab-fac">🏗️ Facility Eng.</button>')

# ━━ Slide 10 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
$h = $h.Replace('<div class="section-label animate-in" style="--delay:0.1s">Module 09 — Bonus</div>',
    '<div class="section-label animate-in" style="--delay:0.1s" data-i18n="s10-label">Module 09 — Bonus</div>')
$h = $h.Replace('<div class="lazy-tips-title">🚀 Lazy Prompting Cheat Sheet</div>',
    '<div class="lazy-tips-title" data-i18n="s10-cheat">🚀 Lazy Prompting Cheat Sheet</div>')

# ━━ Slide 11 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
$h = $h.Replace('<div class="section-label animate-in" style="--delay:0.1s">🎓 Graduation</div>',
    '<div class="section-label animate-in" style="--delay:0.1s" data-i18n="s11-label">🎓 Graduation</div>')
$h = $h.Replace('<h3>🚀 Your Next Steps</h3>', '<h3 data-i18n="s11-next">🚀 Your Next Steps</h3>')
$h = $h.Replace('<div class="step-pill">Practice daily with ChatGPT / Gemini</div>',
    '<div class="step-pill" data-i18n="s11-step1">Practice daily with ChatGPT / Gemini</div>')
$h = $h.Replace('<div class="step-pill">Keep a Prompt Library</div>',
    '<div class="step-pill" data-i18n="s11-step2">Keep a Prompt Library</div>')
$h = $h.Replace('<div class="step-pill">Share &amp; learn from peers</div>',
    '<div class="step-pill" data-i18n="s11-step3">Share &amp; learn from peers</div>')
$h = $h.Replace('<div class="step-pill">Iterate, iterate, iterate!</div>',
    '<div class="step-pill" data-i18n="s11-step4">Iterate, iterate, iterate!</div>')
$h = $h.Replace('↺ Restart Training', '<span data-i18n="btn-restart">↺ Restart Training</span>')

[System.IO.File]::WriteAllText($f, $h, [System.Text.Encoding]::UTF8)
Write-Host "Done"
