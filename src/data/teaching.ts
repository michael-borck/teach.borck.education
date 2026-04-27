export type TeachCategory = 'university' | 'workshop' | 'exec-ed' | 'research';

export interface Teaching {
  id: string;
  name: string;
  category: TeachCategory;
  audience: string;
  format: string;
  description: string;
  siteUrl: string;
  repoUrl: string;
  tags: string[];
}

export const categories: { value: TeachCategory | 'all'; label: string }[] = [
  { value: 'all',        label: 'All' },
  { value: 'university', label: 'University' },
  { value: 'workshop',   label: 'Workshop' },
  { value: 'exec-ed',    label: 'Executive Education' },
  { value: 'research',   label: 'Research' },
];

export const teaching: Teaching[] = [
  // ── University ──────────────────────────────────────────
  {
    id: 'mgmt1003',
    name: 'MGMT1003',
    category: 'university',
    audience: 'Undergraduate business students',
    format: 'Semester course',
    description: 'Course materials and educational resources for MGMT1003. Covers management principles with AI-assisted learning workflows built on Quarto.',
    siteUrl: 'https://michael-borck.github.io/mgmt1003/',
    repoUrl: 'https://github.com/michael-borck/mgmt1003',
    tags: ['management', 'quarto', 'course'],
  },
  {
    id: 'assessment-2030-showcase',
    name: 'Assessment 2030',
    category: 'university',
    audience: 'Educators and assessment designers',
    format: 'Showcase / interactive demo',
    description: 'Demonstrates an AI-integrated assessment model where students collaborate with AI as client and intern. A vision for where assessment practice is heading.',
    siteUrl: 'https://michael-borck.github.io/assessment-2030-showcase/',
    repoUrl: 'https://github.com/michael-borck/assessment-2030-showcase',
    tags: ['assessment', 'AI in education', 'innovation'],
  },

  // ── Workshop ─────────────────────────────────────────────
  {
    id: 'ai-for-educators',
    name: 'AI for Educators',
    category: 'workshop',
    audience: 'Faculty and teaching staff',
    format: '60-minute faculty development session',
    description: 'Helps educators understand and practically use AI in teaching. Covers tool selection, prompt design, assessment integrity, and privacy considerations.',
    siteUrl: 'https://michael-borck.github.io/ai-for-educators/',
    repoUrl: 'https://github.com/michael-borck/ai-for-educators',
    tags: ['AI literacy', 'faculty development', 'teaching'],
  },
  {
    id: 'ai-foundations',
    name: 'AI Foundations',
    category: 'workshop',
    audience: 'Educators — individual or small group',
    format: '2-hour training session / self-paced',
    description: 'AI literacy training for educators covering how language models work, where they fail, and how to use them responsibly. Suitable for one-on-one sessions or self-paced learning.',
    siteUrl: 'https://michael-borck.github.io/ai-foundations/',
    repoUrl: 'https://github.com/michael-borck/ai-foundations',
    tags: ['AI literacy', 'training', 'foundations'],
  },
  {
    id: 'ai-in-the-curriculum',
    name: 'AI in the Curriculum',
    category: 'workshop',
    audience: 'Curriculum designers and educators',
    format: 'Presentation and workshop',
    description: 'Frameworks and practical materials for integrating AI into existing curricula. Covers alignment with learning outcomes, AI-resilient assessment design, and ethical considerations.',
    siteUrl: 'https://michael-borck.github.io/ai-in-the-curriculum/',
    repoUrl: 'https://github.com/michael-borck/ai-in-the-curriculum',
    tags: ['curriculum', 'AI in education', 'design'],
  },
  {
    id: 'ai-in-pedagogical-design-and-delivery',
    name: 'AI in Pedagogical Design',
    category: 'workshop',
    audience: 'Higher education teaching staff',
    format: 'Workshop',
    description: 'Workshop materials for integrating AI tools into higher education teaching practices. Covers pedagogical design principles, delivery strategies, and student engagement.',
    siteUrl: 'https://michael-borck.github.io/ai-in-pedagogical-design-and-delivery/',
    repoUrl: 'https://github.com/michael-borck/ai-in-pedagogical-design-and-delivery',
    tags: ['pedagogy', 'higher education', 'design'],
  },
  {
    id: 'beyond-generic-ai-chatbot',
    name: 'Beyond the Generic Chatbot',
    category: 'workshop',
    audience: 'Educators',
    format: 'Workshop',
    description: 'Privacy-focused AI tools for educators covering essay feedback, curriculum design, and communication. Moves beyond generic chatbot prompting toward purpose-built educational workflows.',
    siteUrl: 'https://michael-borck.github.io/beyond-generic-ai-chatbot/',
    repoUrl: 'https://github.com/michael-borck/beyond-generic-ai-chatbot',
    tags: ['privacy', 'AI tools', 'educators'],
  },
  {
    id: 'curtin-tso-ai-literacy',
    name: 'AI Literacy for TSOs',
    category: 'workshop',
    audience: 'Teaching Support Officers, Curtin University',
    format: 'Workshop',
    description: 'AI literacy training materials designed for Teaching Support Officers. Practical coverage of AI tools relevant to learning support, accessibility, and student engagement.',
    siteUrl: 'https://michael-borck.github.io/curtin-tso-ai-literacy/',
    repoUrl: 'https://github.com/michael-borck/curtin-tso-ai-literacy',
    tags: ['AI literacy', 'Curtin', 'support staff'],
  },
  {
    id: 'food-science-ai-workshop',
    name: 'AI for Food Science',
    category: 'workshop',
    audience: 'Food science students and researchers',
    format: 'Interactive workshop',
    description: 'Teaches food science students AI-assisted research workflows — literature synthesis, data analysis, and scientific writing with AI as a collaborative tool.',
    siteUrl: 'https://michael-borck.github.io/food-science-ai-workshop/',
    repoUrl: 'https://github.com/michael-borck/food-science-ai-workshop',
    tags: ['food science', 'research workflows', 'interdisciplinary'],
  },
  {
    id: 'agvise-ai-seminar-handouts',
    name: 'AI for AgriConsulting',
    category: 'workshop',
    audience: 'Agricultural consultants',
    format: 'Seminar with handouts',
    description: 'HTML-based seminar materials teaching AI applications for agricultural consulting — automation, client reporting, and decision-support tools relevant to the industry.',
    siteUrl: 'https://michael-borck.github.io/agvise-ai-seminar-handouts/',
    repoUrl: 'https://github.com/michael-borck/agvise-ai-seminar-handouts',
    tags: ['agriculture', 'consulting', 'AI applications'],
  },

  // ── Executive Education ───────────────────────────────────
  {
    id: 'ai-leadership-and-pm',
    name: 'AI Leadership & Project Management',
    category: 'exec-ed',
    audience: 'Managers and project leaders',
    format: 'Masterclass',
    description: 'Teaching materials and frameworks for leading AI projects and managing AI-enabled teams. Covers governance, risk, vendor evaluation, and building AI literacy within organisations.',
    siteUrl: 'https://michael-borck.github.io/ai-leadership-and-pm/',
    repoUrl: 'https://github.com/michael-borck/ai-leadership-and-pm',
    tags: ['leadership', 'project management', 'governance'],
  },
  {
    id: 'ai-for-professionals',
    name: 'AI for Professionals',
    category: 'exec-ed',
    audience: 'Working professionals',
    format: 'Hands-on workshop',
    description: 'Practical AI skills and literacy for workplace applications. Participants leave with working knowledge of prompting, tool selection, and responsible AI use in professional contexts.',
    siteUrl: 'https://michael-borck.github.io/ai-for-professionals/',
    repoUrl: 'https://github.com/michael-borck/ai-for-professionals',
    tags: ['professional development', 'AI skills', 'workplace'],
  },
  {
    id: 'ai-business-innovation',
    name: 'AI Business Innovation',
    category: 'exec-ed',
    audience: 'Executives and senior managers',
    format: 'Masterclass',
    description: 'Strategic frameworks and materials for evaluating and investing in AI initiatives. Covers opportunity assessment, build vs buy decisions, ROI, and organisational readiness.',
    siteUrl: 'https://michael-borck.github.io/ai-business-innovation/',
    repoUrl: 'https://github.com/michael-borck/ai-business-innovation',
    tags: ['strategy', 'innovation', 'executive'],
  },
  {
    id: 'aaac-ai-innovation',
    name: 'AAAC AI Innovation',
    category: 'exec-ed',
    audience: 'Business leaders and practitioners',
    format: 'Presentation and workshop',
    description: 'Strategic frameworks and presentation materials for implementing AI technologies in business. Covers adoption roadmaps, change management, and innovation governance.',
    siteUrl: 'https://michael-borck.github.io/AAAC-AI-Innovation/',
    repoUrl: 'https://github.com/michael-borck/AAAC-AI-Innovation',
    tags: ['AI adoption', 'innovation', 'implementation'],
  },

  // ── Research ──────────────────────────────────────────────
  {
    id: 'human-in-the-loop',
    name: 'Human-in-the-Loop ML',
    category: 'research',
    audience: 'Mixed: researchers, practitioners, students',
    format: 'Quarto book / presentation',
    description: 'Documentation and presentations covering human-in-the-loop machine learning concepts — where and why human judgment remains essential in automated systems.',
    siteUrl: 'https://michael-borck.github.io/human-in-the-loop/',
    repoUrl: 'https://github.com/michael-borck/human-in-the-loop',
    tags: ['machine learning', 'human-in-the-loop', 'research'],
  },
  {
    id: 'fbl-six-months-later',
    name: 'FBL: Six Months Later',
    category: 'research',
    audience: 'Academics and ML practitioners',
    format: 'Analysis and presentation',
    description: 'Analyses FBL machine learning system performance and changes six months post-deployment. Documents real-world drift, retraining decisions, and lessons from sustained production use.',
    siteUrl: 'https://michael-borck.github.io/fbl-six-months-later/',
    repoUrl: 'https://github.com/michael-borck/fbl-six-months-later',
    tags: ['machine learning', 'deployment', 'benchmarking'],
  },
];
