/* ============================================================
   TRANSLATIONS — Prompt Engineering Training
   EN (English) + TH (Thai)
   ============================================================ */
const TRANSLATIONS = {
    en: {
        /* ─── UI chrome ─── */
        'lang-toggle': 'TH',
        'badge-title': '🚀 Training Program',
        'scroll-hint': 'Press → or click arrow to advance',
        'meta-modules': '10 Modules',
        'meta-paced': 'Self-paced',
        'meta-exercises': 'Practical Exercises',
        'btn-begin': 'Begin Training',
        'btn-restart': '↺ Restart Training',
        'btn-copy': '📋 Copy Prompt',
        'btn-generate': '⚡ Generate My Prompt',

        /* ─── Slide 1 ─── */
        's1-h1': 'Prompt<br><span class="gradient-text">Engineering</span><br>Mastery',
        's1-sub': 'Learn how to communicate with AI like a pro.<br>From basics to advanced techniques — all in one place.',

        /* ─── Slide 2 (Module 01) ─── */
        's2-label': 'Module 01',
        's2-h2': 'What is<br><span class="gradient-text">Prompt<br>Engineering?</span>',
        's2-pill1-title': 'Communication',
        's2-pill1-sub': 'Speak clearly to AI',
        's2-pill2-title': 'Engineering',
        's2-pill2-sub': 'Structure your intent',
        's2-pill3-title': 'Creativity',
        's2-pill3-sub': 'Unlock AI potential',
        's2-def-h3': 'The Language of AI',
        's2-def-p': 'Prompt Engineering is the practice of designing precise instructions for AI models to produce accurate, useful, and consistent outputs. It\'s the bridge between <strong>human intent</strong> and <strong>AI capability</strong>.',
        's2-ba-label': '⚡ See the difference',
        's2-before-tag': 'Before',
        's2-before-text': '"Write something about marketing."',
        's2-before-result': '→ Generic, unfocused content',
        's2-after-tag': 'After',
        's2-after-result': '→ Precise, targeted, ready-to-use',

        /* ─── Slide 3 (Module 02) ─── */
        's3-label': 'Module 02',
        's3-h2': 'Why Does It <span class="gradient-text">Matter?</span>',
        's3-stat1-label': 'Better output quality with well-crafted prompts',
        's3-stat2-label': 'Of AI users use less than 20% of its real power',
        's3-stat3-label': 'Most in-demand AI skill by employers in 2024–2025',
        's3-bad-h3': 'Without good prompting:',
        's3-bad-1': '❌ Vague, generic answers',
        's3-bad-2': '❌ Repeated clarification loops',
        's3-bad-3': '❌ Missed context & wrong tone',
        's3-bad-4': '❌ Wasted time and effort',
        's3-good-h3': 'With good prompting:',
        's3-good-1': '✅ Precise, tailored outputs',
        's3-good-2': '✅ First-try accuracy',
        's3-good-3': '✅ Consistent, reusable results',
        's3-good-4': '✅ Massive productivity gains',

        /* ─── Slide 4 (Module 03) ─── */
        's4-label': 'Module 03',
        's4-h2': 'What makes a <span class="gradient-text">good prompt?</span>',
        's4-task-rule': 'Use action verbs: <em>generate, write, analyze, summarize</em>',
        's4-task-ex': '"Write a 3-paragraph summary of…"',
        's4-ex-rule': 'Provide examples so the AI matches your expected style',
        's4-ex-ex': '"Respond like this example: Q: ... A: ..."',
        's4-fmt-rule': 'Define the end result — structure, length, style',
        's4-fmt-ex': '"Return as a table with 3 columns: Issue, Cause, Action"',
        's4-ctx-rule': 'Limit endless possibilities — give background that matters:',
        's4-ctx-ex': '"I\'m a QA engineer in a medical device company…"',
        's4-pers-rule': 'Who do you want the AI to be? (Think: someone you wish you had for this task)',
        's4-pers-ex': '"Act as a senior ISO 13485 compliance consultant…"',
        's4-tone-rule': 'Provide the feeling you are going for',
        's4-tone-ex': '"Use a formal, professional tone suitable for an audit report"',
        /* tab buttons */
        's4-tab0': '🏭 Production Engineer',
        's4-tab1': '🏢 Facility Engineer',
        's4-tab2': '🔬 Quality Engineer',

        /* ─── Slide 5 (Module 04) ─── */
        's5-label': 'Module 04',
        's5-h2': 'Core <span class="gradient-text">Techniques</span>',
        's5-t1-title': 'Zero-Shot Prompting',
        's5-t1-desc': 'Give the AI a task with no examples. Works best for simple, clear instructions.',
        's5-t2-title': 'Few-Shot Prompting',
        's5-t2-desc': 'Provide 2–5 examples before your actual request to guide the AI\'s style and format.',
        's5-t3-title': 'Chain-of-Thought',
        's5-t3-desc': 'Ask the AI to "think step by step" to improve reasoning on complex tasks.',
        's5-t4-title': 'Role Prompting',
        's5-t4-desc': 'Assign a specific expert role to tune the AI\'s perspective and vocabulary.',
        's5-t5-title': 'Constraint Setting',
        's5-t5-desc': 'Set explicit limitations: word count, format, tone, or what to avoid.',
        's5-t6-title': 'Iterative Refinement',
        's5-t6-desc': 'Treat prompting as a conversation. Refine based on output until you get perfection.',

        /* ─── Slide 6 (Module 05) ─── */
        's6-label': 'Module 05',
        's6-h2': 'Common <span class="gradient-text">Mistakes</span> to Avoid',
        's6-bad': '❌ Bad Prompt',
        's6-good': '✅ Better Prompt',
        's6-tip': '💡 <strong>Golden Rule:</strong> If a human colleague would need clarification, your AI prompt does too.',

        /* ─── Slide 7 (Module 06 CREATE) ─── */
        's7-label': 'Module 06',
        's7-c-name': 'Character',
        's7-c-desc': 'Define the AI\'s role & persona',
        's7-r-name': 'Request',
        's7-r-desc': 'State your exact task or question',
        's7-e1-name': 'Examples',
        's7-e1-desc': 'Provide sample inputs/outputs',
        's7-a-name': 'Adjustments',
        's7-a-desc': 'Set tone, style & constraints',
        's7-t-name': 'Type of Output',
        's7-t-desc': 'Specify format: list, table, code…',
        's7-e2-name': 'Extras',
        's7-e2-desc': 'Any special rules or context',

        /* ─── Slide 8 (Module 07) ─── */
        's8-label': 'Module 07',
        's8-h2': 'Practice <span class="gradient-text">Builder</span>',
        's8-lead': 'Build a prompt using the CREATE framework below:',
        's8-char-label': '🎭 Character (Role)',
        's8-char-ph': 'e.g. Expert copywriter with 10 years experience',
        's8-req-label': '📋 Request (Task)',
        's8-req-ph': 'e.g. Write a product description for...',
        's8-ctx-label': '💡 Context / Examples',
        's8-ctx-ph': 'e.g. The product is a Thai organic skincare brand targeting...',
        's8-tone-label': '🎨 Tone & Style',
        's8-tone-ph': 'e.g. Friendly, professional, no jargon',
        's8-fmt-label': '📄 Output Format',
        's8-fmt-ph': 'e.g. 3 bullet points, max 50 words each',
        's8-built-label': 'Your Crafted Prompt:',

        /* ─── Slide 9 (Module 08) ─── */
        's9-label': 'Module 08',
        's9-h2': 'Real-World <span class="gradient-text">Use Cases</span>',
        's9-lead': 'Prompt engineering applies across every industry and role:',
        's9-tab-biz': '💼 Business',
        's9-tab-tech': '💻 Tech',
        's9-tab-creative': '🎨 Creative',
        's9-tab-edu': '📚 Education',
        's9-tab-qa': '🔬 QA / ISO 13485',
        's9-tab-fac': '🏗️ Facility Eng.',

        /* ─── Slide 10 (Module 09) ─── */
        's10-label': 'Module 09 — Bonus',
        's10-h2': 'The Art of <span class="gradient-text">Lazy Prompting</span> 😴',
        's10-lead': 'Sometimes <em>less</em> is more. A short, minimal prompt can be surprisingly powerful — if you know exactly when to use it.',
        's10-works': '✅ When Lazy Prompting <em>Works</em>',
        's10-fails': '❌ When Lazy Prompting <em>Fails</em>',
        's10-w1': '🧠 The AI already has context (ongoing chat, codebase visible)',
        's10-w2': '🐛 Simple debugging — paste the error + minimal description',
        's10-w3': '🔁 Minor fixes or tweaks to a previous output',
        's10-w4': '⚡ Quick lookups: definitions, conversions, quick facts',
        's10-w5': '📝 Summarizing short texts with no special format needed',
        's10-f1': '🏗️ New feature design or complex architecture',
        's10-f2': '🎨 Creative work needing a specific tone or style',
        's10-f3': '📊 Reports where format and structure matter',
        's10-f4': '🔐 High-stakes outputs: legal, medical, financial',
        's10-f5': '🌐 Tasks requiring deep domain knowledge or constraints',
        's10-lazy-good': '✅ Lazy but effective',
        's10-lazy-bad': '❌ Too lazy — vague result',
        's10-tip': '💡 <strong>Golden Rule:</strong> Start lazy, then add detail only when the output disappoints. Iterate up, not down.',
        's10-cheat': '🚀 Lazy Prompting Cheat Sheet',
        's10-p1': 'Paste the error → ask to fix',
        's10-p2': '"Improve this" + paste text',
        's10-p3': '"Shorter. More formal."',
        's10-p4': '"Explain like I\'m 5"',
        's10-p5': '"Give me 3 options"',
        's10-p6': '"Continue from here…"',

        /* ─── Slide 11 (AI Agents) ─── */
        's11-label': 'Module 10',
        's11-h2': 'What is an <span class="gradient-text">AI Agent?</span>',
        's11-def': 'An <strong>AI Agent</strong> is a system that can take actions on your behalf using AI — based on your instructions, goals, or prompts.',
        's11-metaphor': 'Think of it as a <u>digital co-worker</u> that follows rules, learns patterns, and helps you get work done automatically.',
        's11-cap-title': 'Core Capabilities',
        's11-cap1': '<strong>Autonomy:</strong> Operates without constant input',
        's11-cap2': '<strong>Perception:</strong> Reads data',
        's11-cap3': '<strong>Reasoning:</strong> Decides what to do based on goals',
        's11-cap4': '<strong>Action:</strong> Takes steps',
        's11-ben-title': 'Why AI Agents Matter?',
        's11-ben1': 'Reduces manual work (less time checking logs/emails)',
        's11-ben2': 'Increases responsiveness (catches issues faster)',
        's11-ben3': 'Scales best practices across shifts and locations',

        /* ─── Slide 12 (Summary) ─── */
        's12-label': '🎉 Congratulations',
        's12-h2': 'You\'re Now a <span class="gradient-text">Prompt Engineer!</span>',
        's12-sum1': 'Understand what prompt engineering is and why it matters',
        's12-sum2': 'Know the anatomy of a great prompt: Role, Task, Context, Format',
        's12-sum3': 'Apply 6 core techniques: Zero-shot, Few-shot, CoT, and more',
        's12-sum4': 'Use the CREATE Framework for professional-level prompts',
        's12-sum5': 'Avoid common pitfalls and iterate toward better results',
        's12-sum6': 'Apply prompting to real-world tasks in any industry',
        's12-next': '🚀 Your Next Steps',
        's12-step1': 'Practice daily with ChatGPT / Gemini',
        's12-step2': 'Keep a Prompt Library',
        's12-step3': 'Share & learn from peers',
        's12-step4': 'Iterate, iterate, iterate!',
        's12-quote': 'The quality of your output is a direct reflection of the quality of your input.',
    },

    th: {
        /* ─── UI chrome ─── */
        'lang-toggle': 'EN',
        'badge-title': '🚀 โปรแกรมการฝึกอบรม',
        'scroll-hint': 'กด → หรือคลิกลูกศรเพื่อไปต่อ',
        'meta-modules': '10 โมดูล',
        'meta-paced': 'เรียนในแบบของคุณ',
        'meta-exercises': 'แบบฝึกหัดเชิงปฏิบัติ',
        'btn-begin': 'เริ่มการฝึกอบรม',
        'btn-restart': '↺ เริ่มต้นใหม่',
        'btn-copy': '📋 คัดลอก Prompt',
        'btn-generate': '⚡ สร้าง Prompt ของฉัน',

        /* ─── Slide 1 ─── */
        's1-h1': 'Prompt<br><span class="gradient-text">Engineering</span><br>Mastery',
        's1-sub': 'เรียนรู้วิธีสื่อสารกับ AI อย่างมืออาชีพ<br>จากพื้นฐานถึงเทคนิคขั้นสูง — ครบจบที่เดียว',

        /* ─── Slide 2 (Module 01) ─── */
        's2-label': 'โมดูล 01',
        's2-h2': 'Prompt Engineering<br><span class="gradient-text">คืออะไร?</span>',
        's2-pill1-title': 'การสื่อสาร',
        's2-pill1-sub': 'พูดกับ AI อย่างชัดเจน',
        's2-pill2-title': 'วิศวกรรม',
        's2-pill2-sub': 'จัดโครงสร้างความตั้งใจ',
        's2-pill3-title': 'ความสร้างสรรค์',
        's2-pill3-sub': 'ปลดล็อกศักยภาพ AI',
        's2-def-h3': 'ภาษาของ AI',
        's2-def-p': 'Prompt Engineering คือการออกแบบคำสั่งที่แม่นยำสำหรับ AI เพื่อสร้างผลลัพธ์ที่ถูกต้อง มีประโยชน์ และสม่ำเสมอ เป็นสะพานเชื่อมระหว่าง <strong>ความตั้งใจของมนุษย์</strong> และ <strong>ความสามารถของ AI</strong>',
        's2-ba-label': '⚡ ดูความแตกต่าง',
        's2-before-tag': 'ก่อน',
        's2-before-text': '"เขียนอะไรสักอย่างเกี่ยวกับการตลาด"',
        's2-before-result': '→ เนื้อหากว้างๆ ไม่มีจุดเน้น',
        's2-after-tag': 'หลัง',
        's2-after-result': '→ แม่นยำ ตรงเป้า พร้อมใช้งาน',

        /* ─── Slide 3 (Module 02) ─── */
        's3-label': 'โมดูล 02',
        's3-h2': 'ทำไมมันถึง <span class="gradient-text">สำคัญ?</span>',
        's3-stat1-label': 'คุณภาพผลลัพธ์ที่ดีขึ้นด้วย prompt ที่ดี',
        's3-stat2-label': 'ผู้ใช้ AI ใช้ศักยภาพจริงไม่ถึง 20%',
        's3-stat3-label': 'ทักษะ AI ที่นายจ้างต้องการมากที่สุดในปี 2024–2025',
        's3-bad-h3': 'เมื่อใช้ prompt ที่ไม่ดี:',
        's3-bad-1': '❌ คำตอบคลุมเครือ ไม่ตรงประเด็น',
        's3-bad-2': '❌ ต้องถามซ้ำๆ เพื่อชี้แจง',
        's3-bad-3': '❌ บริบทผิด น้ำเสียงไม่เหมาะสม',
        's3-bad-4': '❌ เสียเวลาและความพยายาม',
        's3-good-h3': 'เมื่อใช้ prompt ที่ดี:',
        's3-good-1': '✅ ผลลัพธ์แม่นยำ ตรงเป้าหมาย',
        's3-good-2': '✅ ถูกต้องตั้งแต่ครั้งแรก',
        's3-good-3': '✅ ผลลัพธ์สม่ำเสมอ นำกลับมาใช้ได้',
        's3-good-4': '✅ เพิ่มประสิทธิภาพการทำงานอย่างมาก',

        /* ─── Slide 4 (Module 03) ─── */
        's4-label': 'โมดูล 03',
        's4-h2': 'อะไรทำให้ prompt <span class="gradient-text">ดี?</span>',
        's4-task-rule': 'ใช้คำกริยาการกระทำ: <em>สร้าง, เขียน, วิเคราะห์, สรุป</em>',
        's4-task-ex': '"เขียนบทสรุป 3 ย่อหน้าเกี่ยวกับ…"',
        's4-ex-rule': 'ให้ตัวอย่างเพื่อให้ AI ตอบในสไตล์ที่คุณต้องการ',
        's4-ex-ex': '"ตอบแบบนี้: ถ: ... ต: ..."',
        's4-fmt-rule': 'กำหนดรูปแบบผลลัพธ์ — โครงสร้าง ความยาว รูปแบบ',
        's4-fmt-ex': '"ส่งคืนเป็นตารางที่มี 3 คอลัมน์: ปัญหา, สาเหตุ, การดำเนินการ"',
        's4-ctx-rule': 'จำกัดความเป็นไปได้ — ให้ข้อมูลพื้นหลังที่สำคัญ:',
        's4-ctx-ex': '"ฉันเป็นวิศวกร QA ในบริษัทผลิตอุปกรณ์การแพทย์…"',
        's4-pers-rule': 'ต้องการให้ AI เป็นใคร? (คิดว่า: ใครที่คุณอยากให้ช่วยทำงานนี้)',
        's4-pers-ex': '"ทำตัวเป็นที่ปรึกษา ISO 13485 อาวุโส…"',
        's4-tone-rule': 'กำหนดความรู้สึกที่ต้องการสื่อ',
        's4-tone-ex': '"ใช้ภาษาเป็นทางการ เหมาะสำหรับรายงานการตรวจสอบ"',
        's4-tab0': '🏭 วิศวกรการผลิต',
        's4-tab1': '🏢 วิศวกรสิ่งอำนวยความสะดวก',
        's4-tab2': '🔬 วิศวกรคุณภาพ',

        /* ─── Slide 5 (Module 04) ─── */
        's5-label': 'โมดูล 04',
        's5-h2': 'เทคนิค <span class="gradient-text">หลัก</span>',
        's5-t1-title': 'Zero-Shot Prompting',
        's5-t1-desc': 'ให้งาน AI โดยไม่มีตัวอย่าง เหมาะสำหรับคำสั่งที่ชัดเจนและง่าย',
        's5-t2-title': 'Few-Shot Prompting',
        's5-t2-desc': 'ให้ตัวอย่าง 2–5 ตัวอย่างก่อนคำขอจริง เพื่อชี้นำรูปแบบของ AI',
        's5-t3-title': 'Chain-of-Thought',
        's5-t3-desc': 'ขอให้ AI "คิดทีละขั้น" เพื่อเพิ่มความแม่นยำในงานซับซ้อน',
        's5-t4-title': 'Role Prompting',
        's5-t4-desc': 'กำหนดบทบาทผู้เชี่ยวชาญเพื่อปรับมุมมองและศัพท์ของ AI',
        's5-t5-title': 'Constraint Setting',
        's5-t5-desc': 'กำหนดข้อจำกัดชัดเจน: จำนวนคำ รูปแบบ น้ำเสียง หรือสิ่งที่ควรหลีกเลี่ยง',
        's5-t6-title': 'Iterative Refinement',
        's5-t6-desc': 'มอง prompt เป็นการสนทนา ปรับปรุงจากผลลัพธ์จนได้ความสมบูรณ์',

        /* ─── Slide 6 (Module 05) ─── */
        's6-label': 'โมดูล 05',
        's6-h2': 'ข้อผิดพลาด <span class="gradient-text">ที่ต้องหลีกเลี่ยง</span>',
        's6-bad': '❌ Prompt ที่ไม่ดี',
        's6-good': '✅ Prompt ที่ดีกว่า',
        's6-tip': '💡 <strong>กฎทอง:</strong> ถ้าเพื่อนร่วมงานต้องการคำอธิบายเพิ่ม AI ก็ต้องการด้วย',

        /* ─── Slide 7 (Module 06 CREATE) ─── */
        's7-label': 'โมดูล 06',
        's7-c-name': 'Character',
        's7-c-desc': 'กำหนดบทบาทและบุคลิกของ AI',
        's7-r-name': 'Request',
        's7-r-desc': 'ระบุงานหรือคำถามที่ต้องการ',
        's7-e1-name': 'Examples',
        's7-e1-desc': 'ให้ตัวอย่าง input/output',
        's7-a-name': 'Adjustments',
        's7-a-desc': 'ปรับน้ำเสียง สไตล์ และข้อจำกัด',
        's7-t-name': 'Type of Output',
        's7-t-desc': 'กำหนดรูปแบบ: รายการ ตาราง โค้ด…',
        's7-e2-name': 'Extras',
        's7-e2-desc': 'กฎพิเศษหรือบริบทเพิ่มเติม',

        /* ─── Slide 8 (Module 07) ─── */
        's8-label': 'โมดูล 07',
        's8-h2': 'เครื่องมือ <span class="gradient-text">ฝึกสร้าง Prompt</span>',
        's8-lead': 'สร้าง prompt โดยใช้กรอบ CREATE ด้านล่าง:',
        's8-char-label': '🎭 Character (บทบาท)',
        's8-char-ph': 'เช่น นักเขียนคอนเทนต์มืออาชีพ 10 ปี',
        's8-req-label': '📋 Request (งาน)',
        's8-req-ph': 'เช่น เขียนคำอธิบายสินค้าสำหรับ...',
        's8-ctx-label': '💡 บริบท / ตัวอย่าง',
        's8-ctx-ph': 'เช่น สินค้าคือแบรนด์สกินแคร์ออร์แกนิกไทย สำหรับ...',
        's8-tone-label': '🎨 น้ำเสียง & สไตล์',
        's8-tone-ph': 'เช่น เป็นกันเอง มืออาชีพ ไม่ใช้ศัพท์เทคนิค',
        's8-fmt-label': '📄 รูปแบบผลลัพธ์',
        's8-fmt-ph': 'เช่น 3 bullet points ไม่เกิน 50 คำต่อข้อ',
        's8-built-label': 'Prompt ที่คุณสร้าง:',

        /* ─── Slide 9 (Module 08) ─── */
        's9-label': 'โมดูล 08',
        's9-h2': 'กรณีใช้งาน <span class="gradient-text">จริง</span>',
        's9-lead': 'Prompt Engineering ใช้ได้ในทุกอุตสาหกรรมและทุกบทบาท:',
        's9-tab-biz': '💼 ธุรกิจ',
        's9-tab-tech': '💻 เทคโนโลยี',
        's9-tab-creative': '🎨 งานสร้างสรรค์',
        's9-tab-edu': '📚 การศึกษา',
        's9-tab-qa': '🔬 QA / ISO 13485',
        's9-tab-fac': '🏗️ วิศวกรสิ่งอำนวยฯ',

        /* ─── Slide 10 (Module 09) ─── */
        's10-label': 'โมดูล 09 — โบนัส',
        's10-h2': 'ศิลปะของ <span class="gradient-text">Lazy Prompting</span> 😴',
        's10-lead': 'บางครั้ง <em>น้อย</em> คือมาก prompt สั้นๆ อาจทรงพลังอย่างน่าทึ่ง — ถ้าคุณรู้ว่าควรใช้เมื่อใด',
        's10-works': '✅ เมื่อ Lazy Prompting <em>ได้ผล</em>',
        's10-fails': '❌ เมื่อ Lazy Prompting <em>ล้มเหลว</em>',
        's10-w1': '🧠 AI มีบริบทอยู่แล้ว (แชทต่อเนื่อง มองเห็น codebase)',
        's10-w2': '🐛 Debug ง่ายๆ — วาง error + คำอธิบายสั้นๆ',
        's10-w3': '🔁 แก้เล็กน้อยหรือปรับจากผลลัพธ์ก่อนหน้า',
        's10-w4': '⚡ ค้นหาด่วน: นิยาม การแปลง ข้อเท็จจริงง่ายๆ',
        's10-w5': '📝 สรุปข้อความสั้นโดยไม่ต้องการรูปแบบพิเศษ',
        's10-f1': '🏗️ ออกแบบฟีเจอร์ใหม่หรือสถาปัตยกรรมซับซ้อน',
        's10-f2': '🎨 งานสร้างสรรค์ที่ต้องการน้ำเสียงหรือสไตล์เฉพาะ',
        's10-f3': '📊 รายงานที่ให้ความสำคัญกับรูปแบบและโครงสร้าง',
        's10-f4': '🔐 ผลลัพธ์ที่มีความเสี่ยงสูง: กฎหมาย การแพทย์ การเงิน',
        's10-f5': '🌐 งานที่ต้องการความรู้เชิงลึกหรือข้อจำกัดเฉพาะ',
        's10-lazy-good': '✅ ขี้เกียจแต่ได้ผล',
        's10-lazy-bad': '❌ ขี้เกียจเกินไป — ผลลัพธ์คลุมเครือ',
        's10-tip': '💡 <strong>กฎทอง:</strong> เริ่มแบบขี้เกียจ แล้วเพิ่มรายละเอียดเมื่อผลลัพธ์ไม่เป็นที่พอใจ เพิ่มขึ้น อย่าลด',
        's10-cheat': '🚀 Lazy Prompting Cheat Sheet',
        's10-p1': 'วาง error → ขอให้แก้ไข',
        's10-p2': '"ปรับปรุงสิ่งนี้" + วางข้อความ',
        's10-p3': '"สั้นลง เป็นทางการมากขึ้น"',
        's10-p4': '"อธิบายให้เหมือนฉันอายุ 5 ขวบ"',
        's10-p5': '"ให้ฉัน 3 ตัวเลือก"',
        's10-p6': '"ต่อจากที่ค้างไว้…"',

        /* ─── Slide 11 (AI Agents) ─── */
        's11-label': 'โมดูล 10',
        's11-h2': 'AI Agent <span class="gradient-text">คืออะไร?</span>',
        's11-def': '<strong>AI Agent</strong> คือระบบที่สามารถดำเนินการแทนคุณโดยใช้ AI — ตามคำสั่ง เป้าหมาย หรือ prompt ของคุณ',
        's11-metaphor': 'คิดซะว่าเป็น <u>เพื่อนร่วมงานดิจิทัล</u> ที่ทำตามกฎ เรียนรู้รูปแบบ และช่วยให้งานของคุณเสร็จโดยอัตโนมัติ',
        's11-cap-title': 'ความสามารถหลัก',
        's11-cap1': '<strong>ความเป็นอิสระ:</strong> ทำงานได้โดยไม่ต้องรอคำสั่งตลอดเวลา',
        's11-cap2': '<strong>การรับรู้:</strong> อ่านข้อมูล',
        's11-cap3': '<strong>การให้เหตุผล:</strong> ตัดสินใจว่าจะทำอะไรตามเป้าหมาย',
        's11-cap4': '<strong>การกระทำ:</strong> ลงมือทำตามขั้นตอน',
        's11-ben-title': 'ทำไม AI Agents ถึงสำคัญ?',
        's11-ben1': 'ลดงานที่ต้องทำเอง (ใช้เวลาน้อยลงในการตรวจสอบ log หรืออีเมล)',
        's11-ben2': 'เพิ่มการตอบสนอง (จับปัญหาได้เร็วขึ้น)',
        's11-ben3': 'ขยายแนวปฏิบัติที่ดีที่สุดไปยังกะและสถานที่ต่างๆ',

        /* ─── Slide 12 (Summary) ─── */
        's12-label': '🎉 ขอแสดงความยินดี',
        's12-h2': 'คุณเป็น <span class="gradient-text">Prompt Engineer แล้ว!</span>',
        's12-sum1': 'เข้าใจว่า prompt engineering คืออะไรและทำไมจึงสำคัญ',
        's12-sum2': 'รู้โครงสร้างของ prompt ที่ดี: บทบาท งาน บริบท รูปแบบ',
        's12-sum3': 'ใช้เทคนิคหลัก 6 ข้อ: Zero-shot, Few-shot, CoT และอื่นๆ',
        's12-sum4': 'ใช้กรอบ CREATE สำหรับ prompt ระดับมืออาชีพ',
        's12-sum5': 'หลีกเลี่ยงข้อผิดพลาดที่พบบ่อยและปรับปรุงสู่ผลลัพธ์ที่ดีขึ้น',
        's12-sum6': 'ประยุกต์ใช้ prompting กับงานจริงในทุกอุตสาหกรรม',
        's12-next': '🚀 ขั้นตอนต่อไปของคุณ',
        's12-step1': 'ฝึกทุกวันกับ ChatGPT / Gemini',
        's12-step2': 'สร้างคลัง Prompt ของตัวเอง',
        's12-step3': 'แบ่งปันและเรียนรู้จากเพื่อนร่วมงาน',
        's12-step4': 'ปรับปรุง ปรับปรุง ปรับปรุง!',
        's12-quote': 'คุณภาพของผลลัพธ์สะท้อนถึงคุณภาพของ input ที่คุณให้',
    }
};

/* ── Language engine ──────────────────────────────── */
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const t = TRANSLATIONS[lang];

    /* Switch html lang attribute & font */
    document.documentElement.lang = lang === 'th' ? 'th' : 'en';

    /* Update all data-i18n elements (textContent) */
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    /* Update all data-i18n-html elements (innerHTML) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    /* Placeholders */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    /* Toggle button text */
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = t['lang-toggle'];
}

function toggleLanguage() {
    applyLanguage(currentLang === 'en' ? 'th' : 'en');
}

document.addEventListener('DOMContentLoaded', () => applyLanguage(currentLang));
