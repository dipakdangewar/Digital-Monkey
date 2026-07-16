import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STATS, TOOLS_COVERED, TESTIMONIALS, FAQS } from '../data/curriculum';
import AIDashboardWidget from './AIDashboardWidget';
import LucideIcon from './LucideIcon';

interface HomeViewProps {
  onPageChange: (page: 'home' | 'curriculum' | 'lead' | 'contact') => void;
  onSelectProfession: (profession: string) => void;
}

export default function HomeView({ onPageChange, onSelectProfession }: HomeViewProps) {
  const [activeFaqCategory, setActiveFaqCategory] = useState<'All' | 'General' | 'Curriculum' | 'Placements' | 'AI & Tools' | 'Fees'>('All');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [toolCategory, setToolCategory] = useState<'All' | 'AI content' | 'Design' | 'Ads & SEO' | 'Automation' | 'Analytics'>('All');

  const handleToggleFaq = (id: string) => {
    setExpandedFaq(prev => (prev === id ? null : id));
  };

  const handleFaqCategoryClick = (category: typeof activeFaqCategory) => {
    setActiveFaqCategory(category);
    setExpandedFaq(null);
  };

  const handleEnrollClick = (profession: string = 'Student') => {
    onSelectProfession(profession);
    onPageChange('lead');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter FAQs based on active category
  const filteredFaqs = FAQS.filter(faq => activeFaqCategory === 'All' || faq.category === activeFaqCategory);

  // Filter Tools based on active category
  const filteredTools = TOOLS_COVERED.filter(tool => toolCategory === 'All' || tool.category === toolCategory);

  return (
    <div className="space-y-24 pb-12">
      {/* 1. Hero Section */}
      <section className="relative pt-4 md:pt-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left content column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 shadow-sm border border-blue-100/30">
              <LucideIcon name="Sparkles" size={12} className="animate-spin text-blue-500" />
              AI Powered Digital Marketing School
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] font-display">
              Become a Job-Ready{' '}
              <span className="gradient-text">Digital Marketer</span> in Just 4 Months
            </h1>
            
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Master SEO, Google Ads, Meta Ads, AI Marketing, Content Creation, Social Media, Analytics, Email Marketing, WordPress, Automation and Freelancing through real-world projects. Learn by doing, supported by a lifetime community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleEnrollClick()}
                className="gradient-bg hover:opacity-95 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-xs font-display flex items-center gap-2 cursor-pointer select-none"
              >
                Enroll Now <LucideIcon name="ArrowRight" size={14} />
              </button>
              
              <button
                onClick={() => onPageChange('curriculum')}
                className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-800 font-bold py-3.5 px-7 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-xs font-display flex items-center gap-2 cursor-pointer select-none"
              >
                <LucideIcon name="FileText" size={14} />
                Download Curriculum
              </button>
            </div>

            {/* Trust Badge Indicators */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-x-6 gap-y-3">
              {[
                'AI Powered Curriculum',
                '16 Live Projects',
                'Industry Ready Certificate',
                'Lifetime Community Support'
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <LucideIcon name="Check" size={10} />
                  </div>
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right interactive dashboard col */}
          <div className="lg:col-span-5 relative">
            {/* Visual background gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl filter blur-3xl -z-10" />
            <AIDashboardWidget />
          </div>
        </div>
      </section>

      {/* 2. Statistics Section */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl -z-10" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center divide-y md:divide-y-0 lg:divide-x divide-slate-800">
          {STATS.map((stat, i) => (
            <div key={i} className={`pt-6 lg:pt-0 ${i === 0 ? 'pt-0' : ''} space-y-1.5 lg:px-4`}>
              <p className="text-3xl md:text-4xl font-extrabold tracking-tight font-display gradient-text">
                {stat.number}
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {stat.label}
              </p>
              <p className="text-[10px] text-slate-400 font-medium">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Course Section */}
      <section className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Graphic */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-inner space-y-6 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/10 rounded-full filter blur-2xl" />
          
          <div className="p-3 bg-blue-600 text-white rounded-2xl w-fit shadow-md">
            <LucideIcon name="Briefcase" size={24} />
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Practical, Project-Based Digital Marketing Program
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Unlike theoretical courses, Digital Monkey is structured as a full 4-month simulated marketing agency workspace. You practice alongside real certified campaigns daily. No dry slides. You learn purely by executing actual marketing deliverables.
          </p>

          <div className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <LucideIcon name="Check" className="text-green-500" size={14} />
              No prior coding or marketing experience required
            </div>
            <div className="flex items-center gap-2">
              <LucideIcon name="Check" className="text-green-500" size={14} />
              Includes 2026 search updates & AI-citations
            </div>
            <div className="flex items-center gap-2">
              <LucideIcon name="Check" className="text-green-500" size={14} />
              1-on-1 resume reviews and mock job drills
            </div>
          </div>
        </div>

        {/* Right Column Highlights */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1">
              <LucideIcon name="Layers" size={14} />
              Course Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 font-display">
              How the 4-Month Cohort Accelerates Your Career
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'AI-Integrated Curriculum', desc: 'Stop writing copy manually. Master Claude, Gemini, InVideo AI & Midjourney to scale content 10x faster.', icon: 'BrainCircuit' },
              { title: 'Portfolio Building', desc: 'Build concrete campaigns on your designated brand. Graduate with an online portfolio verified by recruiters.', icon: 'Layers' },
              { title: 'Freelancing & Agency Guidance', desc: 'Learn to configure gig covers, draft client retainers, scope work, and set premium pricing models.', icon: 'DollarSign' },
              { title: 'Full Technical Support', desc: 'Access 1-on-1 debug lobbies daily on Discord whenever you get stuck running code or installing pixel scripts.', icon: 'Settings' }
            ].map((p, i) => (
              <div key={i} className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-2 shadow-sm hover:border-blue-500/30 transition-colors">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-fit">
                  <LucideIcon name={p.icon} size={16} />
                </div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white pt-1">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Digital Monkey Section */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Why Choose Digital Monkey
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            16 Core Competencies You Will Master
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            We cover the entire modern digital landscape. You graduate competent in paid search, organic loops, AI, and monetization.
          </p>
        </div>

        {/* 16 Competency Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { title: 'Learn by Doing', desc: 'Forget dry lectures. We teach purely through hands-on campaign execution.', icon: 'CheckCircle2' },
            { title: 'AI Powered Marketing', desc: 'Scale content pipelines and analytics tracking using LLM systems.', icon: 'Sparkles' },
            { title: 'Industry Updated', desc: 'Curriculum constantly refreshed for the latest 2026 tactics.', icon: 'Award' },
            { title: 'Live Website Projects', desc: 'Construct responsive self-hosted WordPress/Elementor domains.', icon: 'Globe' },
            { title: 'SEO + GEO SEO', desc: 'Rank both organically on Google SERPs and within Perplexity/ChatGPT citations.', icon: 'Search' },
            { title: 'Google Search Ads', desc: 'Build ad structures, write RSA copy, and specify sitelink extensions.', icon: 'TrendingUp' },
            { title: 'Meta Instagram Ads', desc: 'Configure Conversion Tracking Pixels and Interest-based audiences.', icon: 'Users' },
            { title: 'Content Marketing', desc: 'Generate high-retention video hooks and educational carousels.', icon: 'FileText' },
            { title: 'Social Media Organic', desc: 'Decode Reels and Shorts feed placement algorithms.', icon: 'Video' },
            { title: 'Email Newsletter loops', desc: 'Connect form triggers to Mailchimp lists and drip sequences.', icon: 'Mail' },
            { title: 'WhatsApp Broadcasting', desc: 'Utilize automated Catalogue features and quick replying.', icon: 'MessageCircle' },
            { title: 'Analytics Attribution', desc: 'Install GA4 Streams, set custom events, trace paths.', icon: 'BarChart3' },
            { title: 'AI Automation Paths', desc: 'Sync leads to sheets and email systems using Make.com pipelines.', icon: 'GitMerge' },
            { title: 'Prompt Engineering', desc: 'Employ CRAFT model instruction templates for rapid drafting.', icon: 'BrainCircuit' },
            { title: 'Freelance Positioning', desc: 'Configure gig summaries, draft proposals, set contract pricing.', icon: 'Briefcase' },
            { title: 'Agency Scaling', desc: 'Learn to pitch local business clients and secure Monthly Retainers.', icon: 'DollarSign' }
          ].map((card, i) => (
            <div
              key={i}
              className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex gap-3.5"
            >
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 h-fit shrink-0">
                <LucideIcon name={card.icon} size={16} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wide">
                  {card.title}
                </h4>
                <p className="text-xs text-slate-400 leading-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Course Highlights Section */}
      <section className="space-y-8 bg-slate-50 dark:bg-slate-950 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-900">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Curriculum Path
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The 4-Month Success Roadmap
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            A balanced weekly pacing taking you from foundation to advanced client monetization.
          </p>
        </div>

        {/* 4 Month Timeline visualizer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Timeline connecting bar (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-0.5 bg-slate-200 dark:bg-slate-800 -z-10" />
          
          {[
            { m: 'Month 1', title: 'Foundation & Website build', topics: ['Foundation & Mindset', 'WordPress Dashboard', 'Landing Pages', 'Yoast SEO Basics', 'Google Search Console'], icon: 'Globe' },
            { m: 'Month 2', title: 'Advanced SEO & Loops', topics: ['GEO & AI Citations', 'Local Maps Packs', 'Copywriting PAS models', 'YouTube & LinkedIn profiles', 'Instagram Reels'], icon: 'Search' },
            { m: 'Month 3', title: 'Paid Channels & Lists', topics: ['Google Search Ads RSA', 'Performance Max Asset groups', 'Meta Pixel custom ads', 'Mailchimp automation', 'Shopify listings PLO'], icon: 'TrendingUp' },
            { m: 'Month 4', title: 'Analytics & Monetizing', topics: ['GA4 conversion streams', 'Looker Studio dashboards', 'Zapier/Make workflows', 'Upwork gig proposals', '20-Page Graduation Project'], icon: 'Briefcase' }
          ].map((month, index) => (
            <div key={index} className="space-y-3 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400 uppercase tracking-widest font-mono">
                  {month.m}
                </span>
                <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
                  <LucideIcon name={month.icon} size={14} />
                </div>
              </div>
              <h4 className="text-sm font-extrabold text-slate-800 dark:text-white">
                {month.title}
              </h4>
              <ul className="space-y-1.5 border-t border-slate-50 dark:border-slate-850 pt-3 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                {month.topics.map((t, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-green-500 shrink-0 font-bold">✓</span>
                    <span className="leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={() => onPageChange('curriculum')}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5 group cursor-pointer"
          >
            Explore Detailed Week-by-Week Syllabus
            <LucideIcon name="ArrowRight" size={14} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </section>

      {/* 6. AI Tools Covered Section */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Modern Toolkit
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 font-display">
              40+ Industry Tools Covered In-Depth
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Stop learning theory. Gain practical comfort using the exact tools recruiters and startups active in 2026 expect.
            </p>
          </div>

          {/* Tool filter list */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-950 rounded-xl w-full md:w-auto overflow-x-auto no-scrollbar">
            {(['All', 'AI content', 'Design', 'Ads & SEO', 'Automation', 'Analytics'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setToolCategory(cat)}
                className={`px-3 py-1.5 text-[10px] font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                  toolCategory === cat
                    ? 'bg-white dark:bg-slate-850 text-slate-950 dark:text-white shadow'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tool Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredTools.map(tool => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={tool.name}
                className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-800/80 shadow-sm hover:shadow flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400">
                      {tool.category}
                    </span>
                    <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                      <LucideIcon name={tool.iconType} size={14} />
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-slate-850 dark:text-white">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-snug">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 7. Career Opportunities Section */}
      <section className="space-y-8 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden border border-slate-850 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl -z-10" />
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider font-mono">
            Career Paths
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight font-display">
            A Career with Infinite Opportunities
          </h2>
          <p className="text-xs text-slate-400">
            Digital marketing competence unlocks high-paying pathways across corporations, remote gigs, and self-owned agencies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { title: 'SEO Specialist', salary: '₹4L - ₹8L / year', skills: 'GEO, Sitemaps, Audits', desc: 'Manage organic visibility and AI engines search positioning for corporate brands.' },
            { title: 'Performance Marketer', salary: '₹5L - ₹12L / year', skills: 'Ads manager, Pixel, CBO', desc: 'Deploy paid ad budgets on Google and Meta platforms to secure high margin conversions.' },
            { title: 'Content Strategist', salary: '₹4L - ₹9L / year', skills: 'Claude copy, Canva, B-rolls', desc: 'Craft high-engagement vertical scripts, visual carousels, and drip emails.' },
            { title: 'Freelancer / Gig Consultant', salary: '₹30k - ₹1.5L / month', skills: 'Fiverr gigs, Upwork proposals', desc: 'Provide targeted remote consultation to international clients on local SEO or ad setups.' },
            { title: 'Agency Owner', salary: 'Scalable Retainers', skills: 'Retainer proposals, Pricing', desc: 'Partner with local brands, hire creators, and manage their unified marketing assets.' }
          ].map((job, i) => (
            <div
              key={i}
              className="p-4 bg-slate-850/60 hover:bg-slate-850 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-4 hover:border-blue-500/50 transition-all shadow"
            >
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 font-mono">
                  Path {i + 1}
                </h4>
                <h3 className="text-base font-extrabold text-white">
                  {job.title}
                </h3>
                <p className="text-[11px] text-slate-400 leading-normal">
                  {job.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-800 space-y-1 text-[10px] font-semibold text-slate-400">
                <div className="flex justify-between">
                  <span>Est. Income:</span>
                  <span className="text-green-400 font-bold">{job.salary}</span>
                </div>
                <div className="flex justify-between">
                  <span>Core focus:</span>
                  <span className="text-blue-300 truncate max-w-[100px]">{job.skills}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prompt profession segments trigger CTA */}
        <div className="p-6 bg-slate-850/50 rounded-2xl border border-slate-800 text-center space-y-4">
          <p className="text-sm font-semibold">
            Which pathway aligns with your current goals? Click to load personalized demo registration:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: 'Fresh Student', prof: 'Student' },
              { label: 'Unemployed Job Seeker', prof: 'Job Seeker' },
              { label: 'Remote Freelancer', prof: 'Freelancer' },
              { label: 'Small Business Owner', prof: 'Small Business Owner' },
              { label: 'Content Creator', prof: 'Content Creator' }
            ].map(item => (
              <button
                key={item.prof}
                onClick={() => handleEnrollClick(item.prof)}
                className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-950 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
            Student Reviews
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved By Hundreds of Successful Alumni
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Read how our practical, learn-by-doing modules helped students secure job placement or freelance retainers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between shadow-sm relative hover:shadow-md transition-shadow"
            >
              {/* Double quotes graphic */}
              <span className="absolute top-4 right-4 text-slate-100 dark:text-slate-800/50 font-display font-extrabold text-5xl select-none leading-none">
                “
              </span>

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <span key={idx}>
                      <LucideIcon name="Star" size={14} className="fill-amber-500" />
                    </span>
                  ))}
                </div>
                
                <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed relative z-10">
                  "{t.review}"
                </p>
              </div>

              {/* Author info */}
              <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-850 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover shadow-inner"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {t.role}
                  </p>
                  <span className="inline-block text-[9px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-1.5 py-0.25 rounded mt-1 font-mono uppercase tracking-wide">
                    {t.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            FAQ Center
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Got doubts? Explore our comprehensive 20-question support index grouped by categories.
          </p>
        </div>

        {/* Category triggers */}
        <div className="flex flex-wrap gap-1.5 justify-center p-1 bg-slate-100 dark:bg-slate-950 rounded-2xl">
          {(['All', 'General', 'Curriculum', 'Placements', 'AI & Tools', 'Fees'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => handleFaqCategoryClick(cat)}
              className={`px-3 py-1.5 text-[10px] font-bold rounded-lg uppercase tracking-wider cursor-pointer transition-all ${
                activeFaqCategory === cat
                  ? 'bg-white dark:bg-slate-850 text-slate-950 dark:text-white shadow'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="space-y-2.5">
          {filteredFaqs.map(faq => {
            const isFaqExpanded = expandedFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden"
              >
                <button
                  onClick={() => handleToggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs md:text-sm text-slate-800 dark:text-white focus:outline-none hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  <span className="pr-4 leading-normal flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">
                      {faq.category}
                    </span>
                    {faq.question}
                  </span>
                  <div className="p-1 rounded bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-450 shrink-0">
                    <LucideIcon
                      name={isFaqExpanded ? 'ChevronUp' : 'ChevronDown'}
                      size={14}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isFaqExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className="p-4 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-850 text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
