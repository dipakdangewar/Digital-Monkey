import { CourseWeek, FAQItem, StatItem, TestimonialItem, ToolItem } from '../types';

export const STATS: StatItem[] = [
  { number: '16 Weeks', label: 'Structured Learning', sublabel: 'Fast-paced, high-impact training' },
  { number: '4 Months', label: 'Career Launchpad', sublabel: 'Beginner to professional duration' },
  { number: '100+', label: 'Practical Tasks', sublabel: 'Hands-on learning by doing daily' },
  { number: '16', label: 'Real Projects', sublabel: 'One fully completed every single week' },
  { number: '40+', label: 'AI Tools Integrated', sublabel: 'ChatGPT, Claude, Make, Midjourney & more' },
  { number: 'Lifetime', label: 'Community Support', sublabel: 'Continuous learning & networking' }
];

export const TOOLS_COVERED: ToolItem[] = [
  { name: 'ChatGPT', category: 'AI content', description: 'Advanced copywriting, strategy formulation, and outline creation.', iconType: 'MessageSquareText' },
  { name: 'Claude', category: 'AI content', description: 'Deep analytical research, long-form content writing, and persona development.', iconType: 'BrainCircuit' },
  { name: 'Gemini', category: 'AI content', description: 'Google-integrated search grounding, strategy generation, and translation.', iconType: 'Sparkles' },
  { name: 'Perplexity', category: 'Ads & SEO', description: 'Real-time competitive research and generative search citation auditing.', iconType: 'Search' },
  { name: 'Canva AI', category: 'Design', description: 'Instant ad creatives, brand kits, and slide presentations.', iconType: 'Palette' },
  { name: 'CapCut AI', category: 'Design', description: 'Smart auto-captions, B-roll generation, and vertical video editing.', iconType: 'Video' },
  { name: 'HeyGen', category: 'Design', description: 'AI avatar generation and highly personalized video outreach.', iconType: 'UserSquare' },
  { name: 'ElevenLabs', category: 'Design', description: 'Ultra-realistic human voiceovers and language dubbing.', iconType: 'Volume2' },
  { name: 'InVideo AI', category: 'Design', description: 'Convert text scripts into ready-to-publish videos in minutes.', iconType: 'FileVideo' },
  { name: 'Make', category: 'Automation', description: 'Build advanced, zero-code visual workflows connecting apps.', iconType: 'GitMerge' },
  { name: 'Zapier', category: 'Automation', description: 'Automate repetitive tasks and connect marketing software.', iconType: 'Cpu' },
  { name: 'Google Analytics 4', category: 'Analytics', description: 'Analyze website traffic, trace attribution, and map user behavior.', iconType: 'BarChart3' },
  { name: 'Google Ads', category: 'Ads & SEO', description: 'Run paid search ads, YouTube video campaigns, and Performance Max.', iconType: 'TrendingUp' },
  { name: 'Meta Ads Manager', category: 'Ads & SEO', description: 'Advanced Facebook and Instagram campaign targeting and pixel tracking.', iconType: 'Users' },
  { name: 'Looker Studio', category: 'Analytics', description: 'Create dynamic, client-ready data visualization dashboards.', iconType: 'PieChart' },
  { name: 'Google Search Console', category: 'Ads & SEO', description: 'Monitor search visibility, index states, and organic queries.', iconType: 'Activity' },
  { name: 'WordPress', category: 'E-commerce', description: 'The power engine behind custom websites and e-commerce blogs.', iconType: 'Globe' },
  { name: 'Elementor', category: 'Design', description: 'No-code, visual drag-and-drop landing page design system.', iconType: 'Layout' },
  { name: 'ManyChat', category: 'Automation', description: 'Automate Instagram DM, WhatsApp, and Facebook messenger lead funnels.', iconType: 'MessageCircle' },
  { name: 'Mailchimp', category: 'Automation', description: 'Design newsletters, list capture segments, and automated email drips.', iconType: 'Mail' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Aravind Sharma',
    role: 'Freelancer & Content Creator',
    review: 'This course is purely practical! In Week 2, I built my first WordPress site. By Month 3, I landed a client for SEO & Meta Ads, earning ₹35,000/month while studying. The AI tools integration saves me 15+ hours a week in content creation.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    tag: 'Freelancer Success'
  },
  {
    name: 'Priya Patel',
    role: 'Digital Marketing Executive at TechCorp',
    review: 'I was a fresh college graduate with no marketing background. Digital Monkey’s Learn-by-Doing curriculum helped me build a rich live-project portfolio. In my interview, I showed them my Looker Studio dashboards and AI content workflows, and got hired on the spot!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    tag: 'Career Transition'
  },
  {
    name: 'Rajesh Nair',
    role: 'E-commerce Store Owner',
    review: 'I wanted to run Facebook and Google Ads for my Shopify store myself instead of paying expensive agencies. Week 10 and 12 were game-changers. My Cost Per Purchase dropped by 40% after implementing the Meta Advantage+ and lookalike funnel strategies!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    tag: 'Business Owner'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is this course suitable for complete beginners?',
    answer: 'Yes, absolutely. The course starts with the absolute foundation of marketing theory and setup, and progresses step-by-step into highly advanced strategies and AI workflows. No coding or prior marketing experience is required.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'What makes Digital Monkey different from online tutorials?',
    answer: 'Our philosophy is "Learn by Doing." Every day has a dedicated practical task, and every week concludes with a real portfolio-ready project. Additionally, we integrate the latest AI-driven marketing techniques, making our students 10x faster and highly competitive in 2026.',
    category: 'General'
  },
  {
    id: 'faq-3',
    question: 'What is the format of the classes and community support?',
    answer: 'The course features live hands-on modules, daily interactive tasks, and personal feedback on every weekly project submission. You also get lifetime access to our private WhatsApp and Discord community to collaborate with peers and alumni.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'Do I get a certificate after completing the course?',
    answer: 'Yes. Upon successfully submitting your 16 weekly assignments and passing the Final Graduation Project (which is a complete 20-page business marketing audit and 90-day strategy plan), you will receive an Industry-Accredited Digital Marketing & AI Expert Certificate.',
    category: 'General'
  },
  {
    id: 'faq-5',
    question: 'What is the total duration and daily time commitment?',
    answer: 'The course is designed to span 16 weeks (4 months). We recommend dedicated daily learning of 1-2 hours and an additional 30-45 minutes to complete the daily practical task. This structure is built to easily fit into the busy schedules of students and working professionals.',
    category: 'Curriculum'
  },
  {
    id: 'faq-6',
    question: 'Do I need to buy domain, hosting, or premium tools?',
    answer: 'No, we provide hosting sandboxes for practice, and teach the curriculum using powerful, free accounts of all tools. We maintain a "Tools Master List" that shows how to execute professional campaigns without paying for monthly subscriptions.',
    category: 'AI & Tools'
  },
  {
    id: 'faq-7',
    question: 'What kind of placement and career support do you offer?',
    answer: 'We provide comprehensive career support including resume audits, mock interviews, LinkedIn profile optimization, and portfolio reviews. In addition, we share active job listings directly in our community, and connect students with agencies and brands looking for modern, AI-competent marketers.',
    category: 'Placements'
  },
  {
    id: 'faq-8',
    question: 'How does AI play a role in the digital marketing curriculum?',
    answer: 'Unlike outdated courses, we teach how to integrate AI at every step. From research (Perplexity), copywriting (Claude), image creation (Canva AI), video generation (InVideo & CapCut), up to building automated lead workflows using Make.com. You learn to do the work of a 5-person agency yourself.',
    category: 'AI & Tools'
  },
  {
    id: 'faq-9',
    question: 'Can I pay the course fees in installments?',
    answer: 'Yes, we offer flexible payment plans and zero-cost EMI options for up to 6 months to make this high-quality training accessible to everyone.',
    category: 'Fees'
  },
  {
    id: 'faq-10',
    question: 'What is the "Weekend Project" and the "Final Graduation Project"?',
    answer: 'At the end of every week, you complete a comprehensive assignment on your chosen practice brand. The Final Graduation Project (Week 16) is a massive, real-world business audit and growth roadmap report that acts as your primary job portfolio piece.',
    category: 'Curriculum'
  },
  {
    id: 'faq-11',
    question: 'What is the typical batch size for live projects?',
    answer: 'To ensure personalized attention and deep mentorship, we limit our cohorts to exactly 25 students. This allows our trainers to audit every single assignment you submit.',
    category: 'General'
  },
  {
    id: 'faq-12',
    question: 'Are there options for weekend classes?',
    answer: 'Yes, we offer both weekday evening batches (for college students and working professionals) and dedicated weekend morning batches (Saturdays & Sundays).',
    category: 'General'
  },
  {
    id: 'faq-13',
    question: 'Can I attend this course while working full-time?',
    answer: 'Absolutely. The course is designed for busy individuals, requiring about 1-2 hours of flexible study and a quick 30-minute daily task which you can complete at your convenience.',
    category: 'General'
  },
  {
    id: 'faq-14',
    question: 'Do you offer a money-back guarantee?',
    answer: 'Yes. We offer a 7-day risk-free refund window. If you feel the course is not the right fit for you within the first week, we will issue a full refund, no questions asked.',
    category: 'Fees'
  },
  {
    id: 'faq-15',
    question: 'What technical equipment is required to participate?',
    answer: 'You only need a basic laptop (Windows, Mac, or Linux) with an active internet connection. All the tools we use are cloud-based and accessible via standard browsers.',
    category: 'General'
  },
  {
    id: 'faq-16',
    question: 'How is the certificate validated by recruiters?',
    answer: 'Every certificate comes with a unique, secure QR code and verification ID. Recruiters can scan it to instantly view your complete 16-project live portfolio on our verification ledger.',
    category: 'Placements'
  },
  {
    id: 'faq-17',
    question: 'Do we get hands-on experience running live ad budgets?',
    answer: 'Yes! Unlike other courses that only show slides, Digital Monkey gives you actual live test ad budgets during the Google and Meta Ads modules to run campaigns yourself.',
    category: 'Curriculum'
  },
  {
    id: 'faq-18',
    question: 'What happens if I miss a live session or a project deadline?',
    answer: 'All live lessons are recorded in high-definition and uploaded to your personal dashboard within 2 hours. If you need more time for a weekly assignment, you can request an extension from your assigned mentor.',
    category: 'General'
  },
  {
    id: 'faq-19',
    question: 'Is the course material updated for search patterns in 2026?',
    answer: 'Yes, we update our curriculum every month. We are currently teaching advanced Generative Engine Optimization (GEO) to optimize for ChatGPT Search, Claude, and Gemini citations.',
    category: 'AI & Tools'
  },
  {
    id: 'faq-20',
    question: 'Is there direct one-on-one help available when I get stuck?',
    answer: 'Yes! We host daily "Ask-Me-Anything" helper lobbies on Discord and have dedicated technical support staff available 12 hours a day to jump on a call and resolve your doubts.',
    category: 'General'
  }
];

export const CURRICULUM_DATA: CourseWeek[] = [
  {
    weekNumber: 1,
    title: 'Digital Marketing Foundation + Mindset',
    subtitle: 'Month 1: Foundation + Website + SEO Basics',
    goal: 'Understand the core concepts of marketing and establish your practice brand blueprint from scratch.',
    tools: ['Google Search', 'ChatGPT', 'Canva', 'Notion'],
    estimatedDuration: '10 Hours',
    dailyPlan: [
      {
        dayNumber: 1,
        dayName: 'Monday',
        title: 'What is Digital Marketing & Why It Matters in 2026',
        learn: [
          'Traditional vs Digital Marketing paradigms',
          'How consumers buy online today',
          'Understanding the 3-step Buyer’s Journey (Awareness -> Consideration -> Decision)'
        ],
        task: 'Identify 3 local or international businesses and document all digital channels they use. Identify where they are missing.',
        tool: 'Google Search'
      },
      {
        dayNumber: 2,
        dayName: 'Tuesday',
        title: 'The Digital Marketing Ecosystem - All Channels Explained',
        learn: [
          'The unified funnel: SEO, Content, Social, Paid Ads, Email, WhatsApp, and Analytics',
          'Platform mapping: Instagram, YouTube, LinkedIn, TikTok, X, Threads, Facebook',
          'Short-form vertical video as the primary modern discovery engine'
        ],
        task: 'Draw the Digital Marketing Funnel on paper or Canva. Label each stage with corresponding active digital channels.',
        tool: 'Canva'
      },
      {
        dayNumber: 3,
        dayName: 'Wednesday',
        title: 'How to Think Like a Marketer - Strategy Before Tactics',
        learn: [
          'Target Audience and demographic segmentation',
          'Building a high-detail Buyer Persona',
          'Defining USP (Unique Selling Proposition) and Brand Positioning'
        ],
        task: 'Pick a practice brand/niche you want to build (yours or a made-up one) and write a highly detailed 1-page Buyer Persona.',
        template: 'Name, Age, Occupation, Goals, Pain Points, Where they hang out online, Trigger to buy'
      },
      {
        dayNumber: 4,
        dayName: 'Thursday',
        title: 'How AI Has Changed Digital Marketing',
        learn: [
          'Generative Search Engines: SEO vs GEO (Generative Engine Optimization)',
          'How Google AI Overviews, ChatGPT, and Perplexity change traffic patterns',
          'The concept of "AI Citation" and why brands must optimize for LLMs'
        ],
        task: 'Search the same query on Google, ChatGPT, and Perplexity. Document 5 critical observations on layout and source citations.',
        tool: 'ChatGPT & Perplexity'
      },
      {
        dayNumber: 5,
        dayName: 'Friday',
        title: 'Setting Up Your Learning System',
        learn: [
          'Establishing folders and structures for portfolio building',
          'Best practices for tracking tools, credentials, and project briefs'
        ],
        task: 'Create a Google Drive folder structure for this course: Website, SEO, Content, Paid Ads, Analytics, Portfolio.',
        tool: 'Google Drive'
      }
    ],
    weekendAssignment: {
      projectTitle: 'Practice Brand Blueprint & Competitor Audit',
      steps: [
        'Select one brand/niche to use for practical exercises over the next 16 weeks.',
        'Write a complete 1-page Brand Blueprint containing Name, Tagline, Target Audience, and 3 key USPs.',
        'Identify top 3 direct competitors and map their digital footprint (websites, keywords, active ads, social channels).',
        'Submit the blueprint as a shared Google Doc.'
      ],
      submission: 'Google Doc Link'
    }
  },
  {
    weekNumber: 2,
    title: 'WordPress Website Setup & Structure',
    subtitle: 'Month 1: Foundation + Website + SEO Basics',
    goal: 'Learn domain/hosting mechanics and build a mobile-friendly, multi-page WordPress website from scratch.',
    tools: ['WordPress', 'Elementor Free', 'Yoast SEO', 'Contact Form 7'],
    estimatedDuration: '12 Hours',
    dailyPlan: [
      {
        dayNumber: 6,
        dayName: 'Monday',
        title: 'Why Every Business Needs a Website - Not Just Social Media',
        learn: [
          'Website as owned digital asset vs social profiles as rented space',
          'The 5 core pages every business website must have for conversion trust'
        ],
        task: 'Visit 3 top competitor websites in your niche. Rate their loading speed, design, clarity of message, and contact options (1-10).',
        tool: 'Google Chrome DevTools'
      },
      {
        dayNumber: 7,
        dayName: 'Tuesday',
        title: 'Setting Up WordPress - Domain, Hosting, Installation',
        learn: [
          'Domain Names and DNS settings',
          'Shared vs Cloud hosting models',
          'One-click WordPress installation process'
        ],
        task: 'Provision a free sandbox WordPress site using free hosting or local server tools and log into the WP-Admin dashboard.',
        tool: 'WordPress'
      },
      {
        dayNumber: 8,
        dayName: 'Wednesday',
        title: 'WordPress Dashboard - Pages, Posts, Plugins, Settings',
        learn: [
          'Navigating the sidebar: Pages vs Posts',
          'Core Settings: Permalinks (SEO friendly structure), Reading, Discussion',
          'The power of Plugins and custom functionality'
        ],
        task: 'Set permalinks to "Post Name". Install and activate 5 essential plugins: Yoast SEO, Contact Form 7, Elementor, and speed cache tools.',
        tool: 'WordPress Dashboard'
      },
      {
        dayNumber: 9,
        dayName: 'Thursday',
        title: 'Designing with Elementor - No-Code Drag-and-Drop',
        learn: [
          'Understanding Sections, Columns, and Widgets',
          'Configuring typography, padding, margins, and global colors',
          'Designing for mobile, tablet, and desktop viewports simultaneously'
        ],
        task: 'Design a highly attractive Home Page section using Elementor widgets, aligning with your brand’s persona colors.',
        tool: 'Elementor Builder'
      },
      {
        dayNumber: 10,
        dayName: 'Friday',
        title: 'Website Copywriting - Writing Words That Sell',
        learn: [
          'Core copywriting formulas (AIDA, Hero Headline framework)',
          'Using AI assistants to draft and edit engaging, human-sounding website copy'
        ],
        task: 'Write landing page header, sub-header, features list, and a strong call-to-action button copy for your homepage.',
        tool: 'Claude or ChatGPT'
      }
    ],
    weekendAssignment: {
      projectTitle: 'Launch a 5-Page Functional Website',
      steps: [
        'Complete all 5 standard pages: Home, About, Services/Products, Blog, and Contact.',
        'Ensure the site has a consistent header and footer with legal links (Privacy, Terms).',
        'Add a live contact form that successfully triggers submissions.',
        'Optimize and test mobile responsiveness across all sections.',
        'Submit the live website URL and screenshots.'
      ],
      submission: 'Live Website URL + Mobile screenshots'
    }
  },
  {
    weekNumber: 3,
    title: 'Landing Pages + WordPress Advanced + SEO Intro',
    subtitle: 'Month 1: Foundation + Website + SEO Basics',
    goal: 'Create hyper-focused, high-conversion landing pages and master search engine crawling mechanics.',
    tools: ['Elementor', 'Google Search Console', 'Yoast SEO', 'AnswerThePublic'],
    estimatedDuration: '11 Hours',
    dailyPlan: [
      {
        dayNumber: 11,
        dayName: 'Monday',
        title: 'Landing Pages vs Websites - What is the Difference?',
        learn: [
          'The architectural differences: Information-driven vs Action-driven design',
          'Anatomy of a 15%+ conversion rate landing page (Hero, Social Proof, Benefits, Forms, FAQ, CTA)'
        ],
        task: 'Search Google for "any service + free trial". Analyze the top 3 landing pages and note down their conversion barriers and hooks.',
        tool: 'Google Search'
      },
      {
        dayNumber: 12,
        dayName: 'Tuesday',
        title: 'Building a Landing Page in Elementor',
        learn: [
          'Hiding theme header/footer for distraction-free user paths (Elementor Canvas)',
          'Setting up sticky floating action forms and countdown timers for urgency'
        ],
        task: 'Create a clean, functional lead capture landing page for your brand with an embedded lead form above the fold.',
        tool: 'Elementor Canvas'
      },
      {
        dayNumber: 13,
        dayName: 'Wednesday',
        title: 'How Search Engines Work - SEO Basics',
        learn: [
          'Crawling (Googlebot), Indexing, and Ranking processes',
          'Understanding the 200+ Google algorithm factors: On-Page, Off-Page, Technical',
          'Why SEO is a long-term investment vs instant paid traffic'
        ],
        task: 'Search your niche on Google. Analyze the top 3 results and document what they have in common (e.g. content depth, images, tags).',
        tool: 'Google Search'
      },
      {
        dayNumber: 14,
        dayName: 'Thursday',
        title: 'Keyword Research - Finding What People Search For',
        learn: [
          'Short-tail vs Long-tail keyword structures',
          'Decoding Search Intent: Informational, Navigational, Commercial, Transactional',
          'Using free search queries and suggestion tools'
        ],
        task: 'Find 20 highly relevant long-tail search phrases with transactional intent related to your practice brand.',
        tool: 'Google Autocomplete & AnswerThePublic'
      },
      {
        dayNumber: 15,
        dayName: 'Friday',
        title: 'Google Search Console Setup & Verification',
        learn: [
          'What is Google Search Console and how it tracks search performance',
          'Verifying site ownership using HTML tags or DNS TXT records',
          'Generating and submitting XML Sitemaps'
        ],
        task: 'Create a Google Search Console property for your website, verify ownership, and submit your Yoast-generated sitemap XML.',
        tool: 'Google Search Console & Yoast'
      }
    ],
    weekendAssignment: {
      projectTitle: 'Landing Page & Niche Keyword Master List',
      steps: [
        'Create a Google Spreadsheet with 30 mapped target keywords in your niche.',
        'Group keywords by Search Intent, estimated Difficulty, and priority.',
        'Select the top 5 high-intent keywords you want to optimize your website for.',
        'Submit a link to the keyword sheet and landing page URL.'
      ],
      submission: 'Google Sheets link + Live landing page URL'
    }
  },
  {
    weekNumber: 4,
    title: 'SEO Deep Dive — On-Page + Technical SEO',
    subtitle: 'Month 1: Foundation + Website + SEO Basics',
    goal: 'Master metadata structure, write SEO-optimized copy, audit Core Web Vitals, and build display remarketing campaigns.',
    tools: ['Yoast SEO', 'PageSpeed Insights', 'Google Ads', 'Canva'],
    estimatedDuration: '12 Hours',
    dailyPlan: [
      {
        dayNumber: 16,
        dayName: 'Monday',
        title: 'On-Page SEO - Optimizing Every Page Element',
        learn: [
          'Drafting ideal Title Tags (under 60 characters with keywords)',
          'Writing high-CTR Meta Descriptions (150-160 characters with strong CTAs)',
          'Heading tags hierarchy (Single H1 per page, structured H2/H3)',
          'Alt text rules for image indexing'
        ],
        task: 'Optimize Title, Meta Description, Headings, and Alt texts on your Homepage using the Yoast SEO interface.',
        tool: 'Yoast SEO Plugin'
      },
      {
        dayNumber: 17,
        dayName: 'Tuesday',
        title: 'Writing SEO-Optimized Blog Posts + E-E-A-T',
        learn: [
          'Writing for users first, search engines second',
          'The Google E-E-A-T framework: Experience, Expertise, Authoritativeness, Trustworthiness',
          'Using LSI (Latent Semantic Indexing) keywords'
        ],
        task: 'Write a comprehensive, original 600-word blog post in your niche with an author bio, internal linking, and citations.',
        tool: 'WordPress Editor & AI Assistant'
      },
      {
        dayNumber: 18,
        dayName: 'Wednesday',
        title: 'Technical SEO - Speed, Mobile, Core Web Vitals',
        learn: [
          'Understanding Core Web Vitals: LCP (Loading), INP (Interaction), CLS (Visual Stability)',
          'Optimizing heavy images using WebP formats and lazy loading',
          'How caching and minification improve browser rendering'
        ],
        task: 'Run a full speed audit on your website. Document the top 3 critical loading recommendations.',
        tool: 'Google PageSpeed Insights'
      },
      {
        dayNumber: 19,
        dayName: 'Thursday',
        title: 'Internal Linking & Site Content Silos',
        learn: [
          'Designing content hubs and link structures (silos)',
          'How internal link juice flows through pages',
          'Anchor text optimization strategies'
        ],
        task: 'Map a silo structure for your blog. Write 2 additional mini-posts and link them back to your main pillar post.',
        tool: 'WordPress Dashboard'
      },
      {
        dayNumber: 20,
        dayName: 'Friday',
        title: 'Google Display Network & YouTube Ads Remarketing',
        learn: [
          'What is Google Display Network (GDN) and cookie-less tracking',
          'Creating remarketing/retargeting list audiences based on page visits',
          'Ad banner sizes: 728x90, 300x250, 160x600'
        ],
        task: 'Set up a Google remarketing audience draft, and design 3 banner ad variations in Canva for retargeting.',
        tool: 'Google Ads & Canva'
      }
    ],
    weekendAssignment: {
      projectTitle: 'SEO Website Audit & Core Optimization Plan',
      steps: [
        'Complete a full On-Page and Technical audit checklist on your 5-page website.',
        'Publish 2 SEO-optimized blog posts of at least 500 words targeting low-competition keywords.',
        'Confirm green checkmarks on Yoast SEO readouts for both posts.',
        'Submit a detailed SEO audit checklist and live URLs.'
      ],
      submission: 'PDF Audit Document + 2 Blog URLs'
    }
  },
  {
    weekNumber: 5,
    title: 'Advanced SEO — GEO, Local SEO + Off-Page SEO',
    subtitle: 'Month 2: Advanced SEO + Content + Social Media',
    goal: 'Position your website to be cited by AI search engines, rank in local map packs, and execute ethical backlink campaigns.',
    tools: ['Google Business Profile', 'Google Search Console', 'ChatGPT', 'Semrush Free'],
    estimatedDuration: '10 Hours',
    dailyPlan: [
      {
        dayNumber: 21,
        dayName: 'Monday',
        title: 'GEO - Generative Engine Optimization',
        learn: [
          'The future of search: how ChatGPT Search and Perplexity synthesize answers',
          'The concept of AI Citations and brand mentions',
          'Structuring content to be easily parsed by large language models'
        ],
        task: 'Ask Perplexity a question in your niche. Analyze the cited sources, and reverse-engineer why those specific websites were selected.',
        tool: 'Perplexity Search'
      },
      {
        dayNumber: 22,
        dayName: 'Tuesday',
        title: 'Writing for AI - Content That Gets Cited',
        learn: [
          'Implementing clear Entity Definitions and structured FAQ sections',
          'NAP (Name, Address, Phone) consistency across directories',
          'JSON-LD Schema Markup basics'
        ],
        task: 'Add a schema-formatted FAQ section (3 questions and answers) with structured layout to your best performing blog post.',
        tool: 'Yoast Schema & ChatGPT'
      },
      {
        dayNumber: 23,
        dayName: 'Wednesday',
        title: 'Local SEO - Getting Found in Your City',
        learn: [
          'How Google Maps rankings work and local search intent',
          'Setting up and optimizing a Google Business Profile (GBP)',
          'Strategies to collect high-quality Google reviews safely'
        ],
        task: 'Create or draft a Google Business Profile optimization sheet including business category, physical address, business hours, and photos.',
        tool: 'Google Business Profile Template'
      },
      {
        dayNumber: 24,
        dayName: 'Thursday',
        title: 'Off-Page SEO - Backlinks and Authority Building',
        learn: [
          'What is Domain Authority/Page Authority and why backlinks act as "votes"',
          'White-hat link building: guest posting, local directories, digital PR',
          'Avoiding dangerous black-hat paid links'
        ],
        task: 'Find 5 local directories or community blogs in your niche where you can realistically pitch a guest post or directory listing.',
        tool: 'Google Search & Semrush'
      },
      {
        dayNumber: 25,
        dayName: 'Friday',
        title: 'Search Everywhere Optimization - Beyond Google',
        learn: [
          'Understanding user search on TikTok, YouTube, and Instagram',
          'Keywords in social media handles, bios, captions, and hashtags'
        ],
        task: 'Search optimization audit: optimize the bios of your active social media handles for discovery keywords.',
        tool: 'Social Media Channels'
      }
    ],
    weekendAssignment: {
      projectTitle: 'GEO-Optimized Content Piece & Local Map Setup',
      steps: [
        'Write an 800-word "Ultimate Guide" blog post structured with Q&A style questions to maximize AI engine citations.',
        'Include at least 1 verified statistic and clear visual diagram links in the post.',
        'Optimize local citation NAP consistency across 3 digital profiles.',
        'Submit the live blog post link and screenshots of the optimization.'
      ],
      submission: 'Live blog URL + Local SEO profile screenshots'
    }
  },
  {
    weekNumber: 6,
    title: 'Content Marketing — Creating Content That Grows Your Business',
    subtitle: 'Month 2: Advanced SEO + Content + Social Media',
    goal: 'Build an exhaustive content calendar, write copy using conversion frameworks, and produce high-engagement short-form videos.',
    tools: ['Canva', 'InVideo AI', 'CapCut', 'Claude'],
    estimatedDuration: '11 Hours',
    dailyPlan: [
      {
        dayNumber: 26,
        dayName: 'Monday',
        title: 'Content Marketing Strategy - Plan Before You Create',
        learn: [
          'Content formats: Blogs, Case Studies, Short-form, Newsletters',
          'Structuring the Content Pyramid (Pillar content -> Micro content)',
          'Setting up a collaborative Content Calendar'
        ],
        task: 'Create a Google Sheets calendar template outlining content type, platform, visual assets, publishing dates, and caption draft.',
        tool: 'Google Sheets'
      },
      {
        dayNumber: 27,
        dayName: 'Tuesday',
        title: 'Copywriting + Blog Writing with AI - The Right Way',
        learn: [
          'Using AIDA, PAS (Problem-Agitate-Solution), and PASTOR framework copywriting models',
          'Prompt engineering for long-form content outline and semantic rich sentences',
          'Editing AI output to preserve human voice, E-E-A-T, and brand style'
        ],
        task: 'Draft an engaging promotional email outline and social caption using the PAS copywriting model for your practice brand.',
        tool: 'Claude & Google Docs'
      },
      {
        dayNumber: 28,
        dayName: 'Wednesday',
        title: 'Video Script Writing + AI Video Creation',
        learn: [
          'The anatomy of a 60-second video (Hook in first 3s, Problem, Value, CTA)',
          'faceless YouTube/TikTok channels as scalable business models',
          'Using AI video synthesizers and auto voice tools'
        ],
        task: 'Write a high-retention 60-second vertical video script and convert it into a draft video with realistic voice and captions.',
        tool: 'InVideo AI & CapCut'
      },
      {
        dayNumber: 29,
        dayName: 'Thursday',
        title: 'Visual Content - Canva for Marketing',
        learn: [
          'Brand identity: establishing brand font styles, color palettes, logo files',
          'Design rules: hierarchy, contrast, balance, whitespace',
          'Designing high-engagement Instagram carousels and YouTube thumbnails'
        ],
        task: 'Establish a custom brand kit in Canva and design a beautiful 5-slide educational carousel post for your brand.',
        tool: 'Canva'
      },
      {
        dayNumber: 30,
        dayName: 'Friday',
        title: 'Content Repurposing - One Idea, 10 Pieces of Content',
        learn: [
          'The leverage framework: turning 1 blog post into 1 YouTube script, 3 Reels, 5 Social updates, and 1 newsletter'
        ],
        task: 'Take your best published blog post and draft 3 social media captions and 1 email newsletter based on its core message.',
        tool: 'Claude or ChatGPT'
      }
    ],
    weekendAssignment: {
      projectTitle: '7-Day High-Converting Content Calendar',
      steps: [
        'Map out a full 7-day social media publishing plan for your practice brand.',
        'Design at least 3 custom graphics or carousels in Canva.',
        'Write complete, hook-rich captions with 10 researched hashtags for each post.',
        'Record/produce 2 educational short video clips (TikTok/Instagram Reels style).',
        'Submit the spreadsheet and Google Drive asset links.'
      ],
      submission: 'Calendar link + Canva asset folder'
    }
  },
  {
    weekNumber: 7,
    title: 'Personal Branding + YouTube + LinkedIn Marketing',
    subtitle: 'Month 2: Advanced SEO + Content + Social Media',
    goal: 'Establish authority, build a professional personal brand, optimize YouTube SEO, and create engaging LinkedIn content.',
    tools: ['Canva', 'YouTube Studio', 'LinkedIn', 'TubeBuddy'],
    estimatedDuration: '10 Hours',
    dailyPlan: [
      {
        dayNumber: 31,
        dayName: 'Monday',
        title: 'Personal Branding - Why You Need to Be the Brand',
        learn: [
          'Why audiences buy from people, not logo grids',
          'Defining your personal brand core formula (Niche, Audience, Content Style)'
        ],
        task: 'Define your personal or practice brand statement in 3 clear sentences. Write a polished, keyword-rich bio suitable for all social handles.',
        tool: 'LinkedIn Profile'
      },
      {
        dayNumber: 32,
        dayName: 'Tuesday',
        title: 'YouTube Marketing - Channel Setup & Shorts Strategy',
        learn: [
          'Configuring YouTube Channel optimization: About, Tags, Links, Banner',
          'Decoding the YouTube algorithm (CTR, AVD, and Session Duration)',
          'YouTube Shorts vs Long-form audience mechanics in 2026'
        ],
        task: 'Create or audit a practice YouTube channel. Design a channel banner and upload a test unlisted vertical Short.',
        tool: 'YouTube Studio & Canva'
      },
      {
        dayNumber: 33,
        dayName: 'Wednesday',
        title: 'YouTube SEO - Getting Found on Search',
        learn: [
          'Performing keyword research on search engines',
          'Anatomy of a clickable title and description structure',
          'Generating optimized tags and playlists'
        ],
        task: 'Research and write optimized Title, Description, and Tags for 3 video ideas in your niche using analysis extensions.',
        tool: 'TubeBuddy or VidIQ'
      },
      {
        dayNumber: 34,
        dayName: 'Thursday',
        title: 'LinkedIn Marketing - B2B Professional Brand Building',
        learn: [
          'Optimizing your profile headline, about section, and featured assets',
          'Understanding the B2B networking funnel and content categories'
        ],
        task: 'Revise your professional LinkedIn profile headline, rewrite your About summary, and map out your top 3 professional skills.',
        tool: 'LinkedIn Dashboard'
      },
      {
        dayNumber: 35,
        dayName: 'Friday',
        title: 'LinkedIn Content Strategy - Text & Visuals',
        learn: [
          'The 4 high-performing LinkedIn content formats: Text story, PDF slides, polls, and video',
          'Writing professional narrative stories that gather engagement'
        ],
        task: 'Write a high-impact narrative post (150-250 words) about a major digital marketing lesson you learned this month.',
        tool: 'LinkedIn Publisher'
      }
    ],
    weekendAssignment: {
      projectTitle: 'YouTube Video & LinkedIn Pillar Post Launch',
      steps: [
        'Produce and publish a 3-5 minute YouTube video discussing a niche tutorial.',
        'Optimize title, tags, description, and design a high-CTR visual thumbnail in Canva.',
        'Publish a LinkedIn article or long-form PDF document (500+ words) sharing the key lessons.',
        'Submit links to both public assets.'
      ],
      submission: 'YouTube Video Link + LinkedIn Post Link'
    }
  },
  {
    weekNumber: 8,
    title: 'Instagram + Social Media Strategy',
    subtitle: 'Month 2: Advanced SEO + Content + Social Media',
    goal: 'Scale your Instagram following, run hashtag audits, and automate scheduling across platforms.',
    tools: ['Instagram Business', 'Meta Business Suite', 'Canva', 'Later'],
    estimatedDuration: '11 Hours',
    dailyPlan: [
      {
        dayNumber: 36,
        dayName: 'Monday',
        title: 'Instagram Marketing - Algorithm, Account Types, Profile Setup',
        learn: [
          'Personal vs Creator vs Business profile analytics access',
          'Deciphering the 2026 Instagram feed, stories, and Explore page algorithms',
          'Optimizing Name field, Link-in-Bio, and active Story Highlights'
        ],
        task: 'Switch your practice handle to a Professional/Business profile. Write an optimized bio with a call-to-action link.',
        tool: 'Instagram App'
      },
      {
        dayNumber: 37,
        dayName: 'Tuesday',
        title: 'Instagram Content Strategy - Reels, Carousels, Stories',
        learn: [
          'Reels as discovery engine, Carousels as authority builder, Stories as conversion nurture',
          'Analyzing reach vs engagement metrics'
        ],
        task: 'Design and export a 5-page educational carousel on Canva and record a 15-second conversational Story talking about your brand.',
        tool: 'Canva & Instagram'
      },
      {
        dayNumber: 38,
        dayName: 'Wednesday',
        title: 'Hashtag Strategy + Caption Writing for IG',
        learn: [
          'How keywords in captions drive Instagram Search ranking',
          'Strategic hashtag groups: Broad, Medium, Niche sizes',
          'Writing scroll-stopping first-line caption hooks'
        ],
        task: 'Research 30 hashtags in your niche. Group them into sets of 15 (5 large, 5 medium, 5 small) for testing.',
        tool: 'Instagram Search'
      },
      {
        dayNumber: 39,
        dayName: 'Thursday',
        title: 'Social Media Scheduling & Batch Creation',
        learn: [
          'Why batching content saves 80% of administrative time',
          'Scheduling native posts with free official tools'
        ],
        task: 'Draft, organize, and schedule 7 days of Instagram posts with custom visuals and captions inside the Meta dashboard.',
        tool: 'Meta Business Suite'
      },
      {
        dayNumber: 40,
        dayName: 'Friday',
        title: 'TikTok, X (Twitter), Threads & Modern Micro-messaging',
        learn: [
          'Algorithmic differences of text-first platforms (X & Threads)',
          'How brands use real-time commentary and conversational posts to grow'
        ],
        task: 'Create profiles for your practice brand on X and Threads. Write 3 short-form text updates for immediate release.',
        tool: 'X & Threads'
      }
    ],
    weekendAssignment: {
      projectTitle: '30-Day Instagram Content Calendar Plan',
      steps: [
        'Build a comprehensive 30-day Instagram Content Calendar spreadsheet.',
        'Map out content formats (Reels, Carousels, Stories, Single images) and daily topics.',
        'Design, write captions, and pre-load assets for Week 1 of the calendar.',
        'Submit a link to the spreadsheet calendar and screenshots of Scheduled posts.'
      ],
      submission: 'Google Spreadsheet Link + Scheduled Screenshot'
    }
  },
  {
    weekNumber: 9,
    title: 'Google Ads — Search + Performance Max',
    subtitle: 'Month 3: Paid Advertising + Email + E-commerce',
    goal: 'Understand paid ad auctions, execute search keyword matching, and design AI-driven Performance Max campaigns.',
    tools: ['Google Ads Manager', 'Google Keyword Planner', 'Google Sheets'],
    estimatedDuration: '12 Hours',
    dailyPlan: [
      {
        dayNumber: 41,
        dayName: 'Monday',
        title: 'Google Ads Fundamentals - How Search Paid Traffic Works',
        learn: [
          'The mechanics of Google Ad Auction: PPC (Pay Per Click) and CPC',
          'Understanding Quality Score (Ad relevance, Landing Page experience, CTR)',
          'Setting up Google Ads MCC (Manager Account) without card requirements'
        ],
        task: 'Create a free Google Ads account, log into the dashboard, and navigate to the tools menu.',
        tool: 'Google Ads Account'
      },
      {
        dayNumber: 42,
        dayName: 'Tuesday',
        title: 'Keyword Research for Google Ads',
        learn: [
          'Google Keyword Match Types: Broad Match, Phrase Match, Exact Match',
          'The power of Negative Keywords to filter out waste spend',
          'Estimating CPC costs, search volumes, and advertiser competition'
        ],
        task: 'Search your niche keywords in Google Planner. Find 50 relevant keywords with monthly search data and average CPC estimates.',
        tool: 'Google Keyword Planner'
      },
      {
        dayNumber: 43,
        dayName: 'Wednesday',
        title: 'Building Your First Search Campaign Structure',
        learn: [
          'Google Ads Hierarchy: Campaign -> Ad Group -> Keywords & Ads',
          'Selecting Campaign Goals: Leads, Website Traffic, Sales',
          'Setting bidding strategies: Maximize Clicks vs Maximize Conversions'
        ],
        task: 'Configure a draft Google Search campaign targeting your landing page. Set a daily mock budget and outline 2 distinct Ad Groups.',
        tool: 'Google Ads Campaign Wizard'
      },
      {
        dayNumber: 44,
        dayName: 'Thursday',
        title: 'Writing Google Ads - Responsive Search Ads',
        learn: [
          'Writing persuasive headlines and descriptions',
          'Responsive Search Ads (RSA): google-mandated 15 headlines and 4 descriptions mix',
          'Adding Asset Extensions: Sitelinks, Callouts, Call extensions'
        ],
        task: 'Write 15 compelling headlines (under 30 chars each) and 4 descriptions (under 90 chars each) targeting your key keywords.',
        tool: 'Claude & Google Docs'
      },
      {
        dayNumber: 45,
        dayName: 'Friday',
        title: 'Performance Max - Google’s AI Campaign',
        learn: [
          'What is Performance Max (P-Max) and why it represents the AI future',
          'Setting up Asset Groups: combining search, display, maps, and video assets in one bucket'
        ],
        task: 'Map out an Asset Group document specifying 5 images, 2 logos, 3 short video links, and copy headlines for a P-Max campaign.',
        tool: 'Google Ads Asset Group Plan'
      }
    ],
    weekendAssignment: {
      projectTitle: 'Complete Google Ads Campaign Strategy Plan',
      steps: [
        'Develop a complete campaign plan document including Campaign Goal, Bidding, Target Audience location, and negative keywords list.',
        'Include 2 configured Ad Groups with 10 exact/phrase keywords each.',
        'Write complete RSA copy drafts (15 headlines, 4 descriptions) and specify 4 sitelink extension URLs.',
        'Submit the finalized campaign structure PDF.'
      ],
      submission: 'Google Ads Campaign Document PDF'
    }
  },
  {
    weekNumber: 10,
    title: 'Meta Ads — Facebook + Instagram Advertising',
    subtitle: 'Month 3: Paid Advertising + Email + E-commerce',
    goal: 'Navigate Meta Business Suite, configure tracking pixels, build target audiences, and launch high-converting ad copy.',
    tools: ['Meta Ads Manager', 'Meta Pixel Helper', 'Canva', 'ChatGPT'],
    estimatedDuration: '12 Hours',
    dailyPlan: [
      {
        dayNumber: 46,
        dayName: 'Monday',
        title: 'Meta Ads Ecosystem - Business Manager Setup',
        learn: [
          'Meta Business Manager vs Ads Manager vs Boost Post (never boost!)',
          'What is the Meta Pixel and why Conversion Tracking is critical',
          'Installing Pixel code on WordPress websites'
        ],
        task: 'Set up a mock Meta Business Manager, draft a new Ad Account, and verify your website pixel using Chrome Helper extension.',
        tool: 'Meta Business Manager & Helper'
      },
      {
        dayNumber: 47,
        dayName: 'Tuesday',
        title: 'Meta Campaign Structure & Objectives',
        learn: [
          'Campaign Objectives: Awareness, Traffic, Engagement, Leads, App Promotion, Sales',
          'Understanding CBO (Campaign Budget Optimization) vs ABO (Ad Set Budget Optimization)'
        ],
        task: 'Select your core lead campaign objective. Document your chosen budget, run dates, and bid strategies in a sheet.',
        tool: 'Meta Ads Manager'
      },
      {
        dayNumber: 48,
        dayName: 'Wednesday',
        title: 'Audience Targeting - Reaching the Right Buyer',
        learn: [
          'Core targeting: Locations, Ages, Genders, Detailed Interests and Behaviors',
          'Custom Audiences: retargeting website visitors and video viewers',
          'Lookalike Audiences: finding 1% identical clones of your buyers'
        ],
        task: 'Define and document 3 target audience sets: 1 broad interest-based, 1 lookalike draft, and 1 retargeting pool.',
        tool: 'Meta Audience Dashboard'
      },
      {
        dayNumber: 49,
        dayName: 'Thursday',
        title: 'Creating Meta Ads that Convert - Creative & Copy',
        learn: [
          'Ad format guidelines: Single Image, Carousel (multi-slide), Video Reels',
          'persuasive primary ad copy formula (Hook, problem, USP, testimonial, CTA)',
          'Designing high-contrast social ads on Canva'
        ],
        task: 'Design 3 distinctive high-contrast image ads (1080x1080) in Canva and write a complete copy draft for Facebook.',
        tool: 'Canva & ChatGPT'
      },
      {
        dayNumber: 50,
        dayName: 'Friday',
        title: 'Meta Advantage+ AI Campaigns',
        learn: [
          'How Meta’s AI auto-selects placements, budgets, and text variations',
          'When to rely on AI targeting vs manual control guidelines'
        ],
        task: 'Create a draft Advantage+ shopping/lead campaign inside Ads Manager with multi-text options pre-loaded.',
        tool: 'Meta Ads Manager'
      }
    ],
    weekendAssignment: {
      projectTitle: 'Meta Ads Campaign Layout & Mock Launch',
      steps: [
        'Build a complete Meta Ads Campaign structure in drafts or sheets.',
        'Define Campaign Goal (Leads), 2 different Ad Sets (targeting Broad vs Retargeting), and 3 ad creative variations.',
        'Provide high-detail screenshots of your Ads Manager layout or visual Canva creatives.',
        'Submit your campaign strategy folder.'
      ],
      submission: 'Meta Ads Strategy Deck Link + Canva Folder'
    }
  },
  {
    weekNumber: 11,
    title: 'Email Marketing + WhatsApp Business Marketing',
    subtitle: 'Month 3: Paid Advertising + Email + E-commerce',
    goal: 'Build an email list capture engine, write welcome sequences, and configure conversational chatbot funnels.',
    tools: ['Mailchimp', 'WhatsApp Business App', 'ManyChat', 'ChatGPT'],
    estimatedDuration: '11 Hours',
    dailyPlan: [
      {
        dayNumber: 51,
        dayName: 'Monday',
        title: 'Email Marketing Fundamentals - The Ultimate ROI Channel',
        learn: [
          'Why email lists are owned assets with highest ROI (avg 36:1)',
          'Designing high-value Lead Magnets (Ebooks, Checklists, Video training)',
          'Double opt-in vs single opt-in and compliance laws (GDPR, CAN-SPAM)'
        ],
        task: 'Design a highly attractive checklist or cheat-sheet lead magnet in Canva to grow your email list.',
        tool: 'Canva'
      },
      {
        dayNumber: 52,
        dayName: 'Tuesday',
        title: 'Setting Up Mailchimp - Lists and Drips',
        learn: [
          'Creating and segmenting email audiences',
          'Designing clean newsletter templates with high-contrast text and buttons',
          'Connecting form captures to your Elementor landing page'
        ],
        task: 'Create a Mailchimp free account. Design a clean signup form widget and embed it into your practice landing page.',
        tool: 'Mailchimp & Elementor'
      },
      {
        dayNumber: 53,
        dayName: 'Wednesday',
        title: 'Writing Automated Welcome Email Sequences',
        learn: [
          'The anatomy of a 5-part welcome email sequence (Value, Story, Lesson, Proof, Pitch)',
          'Drafting compelling, high-open subject lines'
        ],
        task: 'Write a sequence of 3 welcome emails (under 200 words each) using custom copy to warm up new subscribers.',
        tool: 'Claude & Mailchimp'
      },
      {
        dayNumber: 54,
        dayName: 'Thursday',
        title: 'WhatsApp Business Marketing - The 98% Open Rate Channel',
        learn: [
          'WhatsApp Business App features: Catalogs, Quick Replies, Labels',
          'WhatsApp Business API limits vs manual broadcasting guidelines',
          'Writing non-spammy conversational broadcast updates'
        ],
        task: 'Set up or draft a WhatsApp Business catalog with 3 primary marketing services, pricing, and visual covers.',
        tool: 'WhatsApp Business App'
      },
      {
        dayNumber: 55,
        dayName: 'Friday',
        title: 'ManyChat - Chatbot Conversational Funnels',
        learn: [
          'Introduction to conversational marketing automation',
          'Setting up "Comment REEL to send DM" triggers on Instagram'
        ],
        task: 'Map out a visual chatbot flowchart: User comments word -> Bot sends DM -> Bot asks for Email -> Bot saves Lead.',
        tool: 'ManyChat Flowchart'
      }
    ],
    weekendAssignment: {
      projectTitle: 'Automated Email Drip & WhatsApp Campaign Launch',
      steps: [
        'Publish a live lead-capture page offering your free Canva lead magnet.',
        'Configure a live Mailchimp automation that triggers a Welcome Email upon form completion.',
        'Create a WhatsApp broadcasting plan sheet with 3 engagement scripts.',
        'Submit verification screenshots of active form, Mailchimp email template, and WhatsApp catalogue.'
      ],
      submission: 'Lead Magnet Link + Mailchimp Screenshot'
    }
  },
  {
    weekNumber: 12,
    title: 'E-commerce Marketing',
    subtitle: 'Month 3: Paid Advertising + Email + E-commerce',
    goal: 'Understand e-commerce store operations, optimize listings, configure search ads, and track AOV/LTV metrics.',
    tools: ['Shopify', 'Google Merchant Center', 'Meta Commerce', 'Claude'],
    estimatedDuration: '12 Hours',
    dailyPlan: [
      {
        dayNumber: 56,
        dayName: 'Monday',
        title: 'E-commerce Fundamentals - Store Models',
        learn: [
          'Understanding D2C (Direct to Consumer), Marketplaces, and Dropshipping',
          'Why e-commerce websites must have fast checkout pathways'
        ],
        task: 'Identify 1 successful e-commerce brand in your country. Analyze their store checkout path, noting checkout speed barriers.',
        tool: 'Google Chrome'
      },
      {
        dayNumber: 57,
        dayName: 'Tuesday',
        title: 'Setting Up a Shopify Store',
        learn: [
          'Shopify dashboard walk-through: Products, Orders, Analytics, Online Store',
          'Selecting conversion-friendly themes, configuring payment processors'
        ],
        task: 'Sign up for a free Shopify trial, create a blank store, and configure basic shipping zones.',
        tool: 'Shopify Store Builder'
      },
      {
        dayNumber: 58,
        dayName: 'Wednesday',
        title: 'Product Listing Optimization (PLO) - Writing Listings',
        learn: [
          'Formatting product titles: Brand + Product Type + Core Feature + Style',
          'Writing descriptive, SEO-rich product descriptions with benefit bullets',
          'Optimizing product gallery images with mock badges'
        ],
        task: 'Draft a conversion-focused product description and title for a practice e-commerce item.',
        tool: 'Claude & Shopify Editor'
      },
      {
        dayNumber: 59,
        dayName: 'Thursday',
        title: 'E-commerce Paid Ads - Shopping Ads & Catalogues',
        learn: [
          'Google Merchant Center feed setup and optimization',
          'Setting up Meta Commerce Manager and syncing Shopify catalog feeds'
        ],
        task: 'Create an excel catalog inventory sheet specifying IDs, titles, descriptions, conditions, prices, and links.',
        tool: 'Google Sheets'
      },
      {
        dayNumber: 60,
        dayName: 'Friday',
        title: 'E-commerce Key Performance Indicators (KPIs)',
        learn: [
          'Understanding AOV (Average Order Value), CAC, and LTV (Customer Lifetime Value)',
          'Strategies to lift average order value: bundling, upselling, cross-selling'
        ],
        task: 'Map out 3 upsell bundle suggestions for your practice store product catalog to lift average checkout values.',
        tool: 'Google Docs'
      }
    ],
    weekendAssignment: {
      projectTitle: 'Launch a Mini Shopify Store with optimized Products',
      steps: [
        'Complete setup of a Shopify store with 3 active optimized product pages.',
        'Create a "Buy Bundle and Save 15%" upsell section on the homepage.',
        'Configure the cart checkout flow, and add essential policies (Returns, Shipping).',
        'Submit your Shopify preview link and optimized listings report.'
      ],
      submission: 'Shopify Store URL + Catalog PDF'
    }
  },
  {
    weekNumber: 13,
    title: 'Analytics — GA4 + Looker Studio + CRO + ORM',
    subtitle: 'Month 4: Analytics + AI + Automation + Getting Paid',
    goal: 'Install Google Analytics 4, build Looker Studio reports, analyze user heatmaps, and protect online brand reputation.',
    tools: ['Google Analytics 4', 'Looker Studio', 'Hotjar', 'Google Business Profile'],
    estimatedDuration: '12 Hours',
    dailyPlan: [
      {
        dayNumber: 61,
        dayName: 'Monday',
        title: 'Google Analytics 4 (GA4) - Installation & Basics',
        learn: [
          'GA4 vs older Universal Analytics architectures',
          'Setting up GA4 Data Streams and finding the Measurement ID',
          'Configuring Key Events (Conversions) like form submissions'
        ],
        task: 'Set up a GA4 account, find your tracking code, and install it on your WordPress header section.',
        tool: 'Google Analytics 4'
      },
      {
        dayNumber: 62,
        dayName: 'Tuesday',
        title: 'Reading GA4 Reports - Understanding Your Audience',
        learn: [
          'Reviewing User Acquisition (where traffic comes from) vs Engagement (what they do)',
          'Analyzing bounce rates, session durations, and landing page pathways'
        ],
        task: 'Simulate or pull a Traffic report, and document which search channel drives the longest session duration.',
        tool: 'GA4 Reports'
      },
      {
        dayNumber: 63,
        dayName: 'Wednesday',
        title: 'Looker Studio - Client-Ready Interactive Dashboards',
        learn: [
          'Connecting GA4, Google Search Console, and Sheets to Looker Studio',
          'Designing client dashboards using charts, tables, and scorecard widgets'
        ],
        task: 'Build a blank Looker Studio report, connect a sample spreadsheet source, and create a custom KPI scorecard.',
        tool: 'Looker Studio'
      },
      {
        dayNumber: 64,
        dayName: 'Thursday',
        title: 'CRO - Conversion Rate Optimization',
        learn: [
          'Understanding conversion friction points',
          'Installing Heatmaps to record user scroll behavior',
          'A/B testing basics: button colors, titles, and form fields'
        ],
        task: 'Install a free heatmap tool on your landing page and analyze where mock users would encounter visual friction.',
        tool: 'Hotjar'
      },
      {
        dayNumber: 65,
        dayName: 'Friday',
        title: 'ORM - Online Reputation Management',
        learn: [
          'How online reviews impact local maps and conversion rates',
          'Responding to positive vs critical 1-star reviews professionally',
          'Collecting genuine reviews with QR codes'
        ],
        task: 'Write 3 reusable, highly professional response templates for both positive and negative Google Business reviews.',
        tool: 'Google Docs'
      }
    ],
    weekendAssignment: {
      projectTitle: 'Looker Studio Marketing KPI Dashboard',
      steps: [
        'Build a functional, visual Looker Studio dashboard designed for a business client.',
        'Include charts for Sessions Over Time, Traffic Channels, and conversion tables.',
        'Export and compile 3 CRO improvement recommendations for your Landing Page.',
        'Submit the shared public dashboard link.'
      ],
      submission: 'Looker Studio Dashboard Link'
    }
  },
  {
    weekNumber: 14,
    title: 'Social Commerce + Influencer Marketing + UGC',
    subtitle: 'Month 4: Analytics + AI + Automation + Getting Paid',
    goal: 'Integrate social checkout stores, pitch and brief influencers, build community groups, and track campaigns via UTM codes.',
    tools: ['Meta Commerce', 'Canva', 'Google Sheets', 'UTM Builder'],
    estimatedDuration: '10 Hours',
    dailyPlan: [
      {
        dayNumber: 66,
        dayName: 'Monday',
        title: 'Social Commerce - Selling inside the App',
        learn: [
          'Setting up Instagram and Facebook Shops',
          'Adding product tags to Reels and Stories to buy in one click'
        ],
        task: 'Map out the product tag flow for an e-commerce item on Instagram, specifying product tag locations.',
        tool: 'Meta Commerce Catalog'
      },
      {
        dayNumber: 67,
        dayName: 'Tuesday',
        title: 'Influencer Marketing - Finding the Right Creators',
        learn: [
          'Influencer tiers: Nano, Micro, Macro, Mega metrics',
          'Calculating true Engagement Rate vs fake follower pools',
          'ROI of Micro-influencer campaigns'
        ],
        task: 'Shortlist 5 micro-influencers in your country niche. Extract their follower counts, engagement levels, and write down contact emails.',
        tool: 'Instagram Search & Sheets'
      },
      {
        dayNumber: 68,
        dayName: 'Wednesday',
        title: 'Writing an Influencer Brief - Clear Deliverables',
        learn: [
          'Drafting standard visual guidelines and copywriting do’s & don’ts',
          'Setting milestones: Draft checks, post times, link tracking'
        ],
        task: 'Draft a complete 1-page creative Influencer Brief for an upcoming product launch in your brand.',
        tool: 'Google Docs Template'
      },
      {
        dayNumber: 69,
        dayName: 'Thursday',
        title: 'Community Building + User Generated Content (UGC)',
        learn: [
          'Building brand moats using Private Facebook Groups, WhatsApp, and Discord',
          'Sourcing and incentivizing UGC (User Generated Content) video reviews'
        ],
        task: 'Write an incentive email template to encourage existing buyers to submit a 30s video review in exchange for points.',
        tool: 'Claude or ChatGPT'
      },
      {
        dayNumber: 70,
        dayName: 'Friday',
        title: 'Affiliate Marketing & UTM Campaign Tracking',
        learn: [
          'How affiliate programs drive sales without upfront risk',
          'Creating clean UTM URLs to identify traffic sources (Source, Medium, Campaign)'
        ],
        task: 'Generate 3 customized UTM tracking URLs for an upcoming campaign using a URL tool.',
        tool: 'Campaign UTM Builder'
      }
    ],
    weekendAssignment: {
      projectTitle: 'Influencer Pitch & Campaign Tracking System',
      steps: [
        'Develop a customized Influencer Outreach email template.',
        'Compile an influencer outreach tracking sheet containing contact data, price quotes, and sizes.',
        'Provide 3 ready-to-track UTM campaign URLs pointing to your product page.',
        'Submit the tracking sheet link and pitch template.'
      ],
      submission: 'Google Sheets Campaign Link'
    }
  },
  {
    weekNumber: 15,
    title: 'AI Tools + Prompt Engineering + Automation',
    subtitle: 'Month 4: Analytics + AI + Automation + Getting Paid',
    goal: 'Leverage AI systems for 10x marketing output, write prompt frameworks, and engineer Make.com automation paths.',
    tools: ['Make.com', 'ChatGPT', 'Claude', 'Canva AI', 'Zapier'],
    estimatedDuration: '12 Hours',
    dailyPlan: [
      {
        dayNumber: 71,
        dayName: 'Monday',
        title: 'AI Tools for Digital Marketing - Complete 2026 Toolkit',
        learn: [
          'Mapping the AI visual landscape: Canva Magic, ElevenLabs, HeyGen, Midjourney',
          'Using AI assistants as strategist partners, not just text outlines'
        ],
        task: 'Generate a high-quality educational social media post including descriptive visual prompts and captions using AI.',
        tool: 'ChatGPT & Canva AI'
      },
      {
        dayNumber: 72,
        dayName: 'Tuesday',
        title: 'Prompt Engineering - Writing Instructions that Work',
        learn: [
          'The CRAFT framework: Context, Role, Action, Format, Tone',
          'Setting up few-shot examples and chain-of-thought system prompts'
        ],
        task: 'Develop 3 reusable CRAFT prompt templates: 1 for SEO meta optimization, 1 for Facebook ad copy, 1 for blog outline.',
        tool: 'Claude & Notion'
      },
      {
        dayNumber: 73,
        dayName: 'Wednesday',
        title: 'AI for Paid Ads - Generating 100 Variations',
        learn: [
          'Using AI assistants to spit out dozens of high-ctr headlines and hooks',
          'Generating realistic AI ad mockups and testing visual angles'
        ],
        task: 'Generate a master list of 20 distinct Google Ads search headlines and 5 Meta Ad visual prompt instructions for your brand.',
        tool: 'ChatGPT or Gemini'
      },
      {
        dayNumber: 74,
        dayName: 'Thursday',
        title: 'Make.com / Zapier Marketing Automations',
        learn: [
          'Introduction to visual logic and app connections',
          'Connecting forms, emails, databases, and chat alerts without code'
        ],
        task: 'Draft or map a visual automation flowchart: Form Lead Submitted -> Send Mailchimp welcome -> Send alert to team.',
        tool: 'Make.com Canvas or Zapier'
      },
      {
        dayNumber: 75,
        dayName: 'Friday',
        title: 'Custom AI Agents for Marketing Teams',
        learn: [
          'How custom AI assistants and GPTs automate research tasks',
          'Setting up custom GPT parameters with specific brand guidelines'
        ],
        task: 'Write a comprehensive instruction prompt (under 300 words) to train a custom GPT to act as your brand’s copywriter.',
        tool: 'ChatGPT or Custom Agent Builder'
      }
    ],
    weekendAssignment: {
      projectTitle: 'AI-Powered Lead & Post Automation Setup',
      steps: [
        'Build a functional or visual mock-up of an automated lead collection workflow in Make.com or Zapier.',
        'Configure trigger fields (contact forms) to successfully map to target spreadsheet and email notification databases.',
        'Write a complete documentation file describing the automation steps and time saved.',
        'Submit the workflow screenshots and documentation.'
      ],
      submission: 'Make.com workflow PDF + Screenshots'
    }
  },
  {
    weekNumber: 16,
    title: 'Freelancing + Agency + Final Graduation Project',
    subtitle: 'Month 4: Analytics + AI + Automation + Getting Paid',
    goal: 'Create freelancing profiles, compile a multi-page marketing portfolio, write outreach letters, and draft client contracts.',
    tools: ['Upwork', 'Fiverr', 'LinkedIn', 'Google Docs', 'Canva'],
    estimatedDuration: '14 Hours',
    dailyPlan: [
      {
        dayNumber: 76,
        dayName: 'Monday',
        title: 'How to Earn Money with Digital Marketing - Paths',
        learn: [
          'Comparing full-time jobs vs freelance consulting vs launching a full agency',
          'Calculating sustainable hourly rates and monthly client retainer structures'
        ],
        task: 'Write your personalized 1-year career path plan specifying target income, chosen marketing services, and client target sizes.',
        tool: 'Google Docs'
      },
      {
        dayNumber: 77,
        dayName: 'Tuesday',
        title: 'Freelancing Platforms - Upwork & Fiverr Mastery',
        learn: [
          'Setting up Upwork and Fiverr profiles that stand out',
          'Writing pitch letters and proposals that get responses',
          'Configuring search-friendly gig listing covers'
        ],
        task: 'Draft a complete, search-optimized Upwork profile description and listing titles for your core marketing skills.',
        tool: 'Word Processor'
      },
      {
        dayNumber: 78,
        dayName: 'Wednesday',
        title: 'Building Your Client Portfolio',
        learn: [
          'How to build a portfolio when you have zero past clients (using practice brands)',
          'Structuring case studies: Challenge, Strategy, Execution, Results'
        ],
        task: 'Assemble the best 5 weekly project assignments you completed during this course into a single master PDF portfolio.',
        tool: 'Canva'
      },
      {
        dayNumber: 79,
        dayName: 'Thursday',
        title: 'Client Outreach & Pitching Proposals',
        learn: [
          'Cold email copywriting structures that get high response rates',
          'Auditing prospect websites to find immediate value gaps'
        ],
        task: 'Write a cold email pitch letter (under 200 words) targeting a local business showing 3 quick SEO/Ad gaps they can fix.',
        tool: 'Claude & Gmail'
      },
      {
        dayNumber: 80,
        dayName: 'Friday',
        title: 'Pricing, Contracts, and Client Management',
        learn: [
          'Drafting standard Freelance Services Agreements',
          'Managing client communication and establishing delivery boundaries'
        ],
        task: 'Draft a standard 1-page Client Service Agreement proposal template containing deliverables, pricing, and timelines.',
        tool: 'Google Docs Template'
      }
    ],
    weekendAssignment: {
      projectTitle: 'Final Graduation Project: Complete Business Audit & Growth Strategy',
      steps: [
        'Conduct a comprehensive 20-page audit and strategy deck for a real local business.',
        'Include Deliverable 1: Comprehensive Website & Speed Audit.',
        'Include Deliverable 2: Mapped Keyword Research List of 30 items.',
        'Include Deliverable 3: 30-Day social and search content plan calendar.',
        'Include Deliverable 4: Campaign blueprint search and meta paid ads drafts.',
        'Include Deliverable 5: Google Analytics dashboard structure proposal.',
        'Include Deliverable 6: 90-day growth roadmap split into 3 monthly milestone budgets.',
        'Submit the finalized PDF compilation (Graduation audit piece).'
      ],
      submission: 'Final Graduation PDF Audit Report'
    }
  }
];
