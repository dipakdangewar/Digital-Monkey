import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CURRICULUM_DATA } from '../data/curriculum';
import { CourseWeek } from '../types';
import LucideIcon from './LucideIcon';

const TIMELINE_MONTHS = [
  {
    month: 1,
    title: 'Foundation & WordPress Site Builder',
    weeks: 'Weeks 1 - 4',
    description: 'Learn marketing foundations, build your live self-hosted site, draft keyword maps, and perform technical audits.',
    colorHex: '#3b82f6', // blue-500
    milestones: [
      '1-Page Brand Blueprint (Competitors list)',
      'Live 5-Page Elementor WordPress site',
      '30-Keyword structural mapping table',
      'SEO audit report + 2 optimized blogs'
    ]
  },
  {
    month: 2,
    title: 'Advanced SEO & Content Loops',
    weeks: 'Weeks 5 - 8',
    description: 'Master local SEO, configure Perplexity citation loops, schedule calendars, and edit vertical B-rolls.',
    colorHex: '#a855f7', // purple-500
    milestones: [
      '800-Word GEO content citation guide',
      '7-Day scheduled visual content calendar',
      'Google Business Profile optimized setup',
      '30-Day Instagram vertical video roadmap'
    ]
  },
  {
    month: 3,
    title: 'Paid Search Channels & Lead Funnels',
    weeks: 'Weeks 9 - 12',
    description: 'Build search campaigns, write RSA copy, implement Meta pixel funnels, and connect Mailchimp triggers.',
    colorHex: '#06b6d4', // cyan-500
    milestones: [
      'Google Search structure sheet (15 ads)',
      'Meta Custom Audience Pixel funnels',
      'Mailchimp sequence + WhatsApp catalog',
      'Live Shopify store with 3 optimized products'
    ]
  },
  {
    month: 4,
    title: 'KPI Dashboards, Automation & Gigs',
    weeks: 'Weeks 13 - 16',
    description: 'Design Looker dashboards, map automation logic, optimize freelance profiles, and complete the graduation audit.',
    colorHex: '#8b5cf6', // violet-500
    milestones: [
      'Client-ready Looker Studio KPI dashboard',
      'Make.com/Zapier lead sync logic flow',
      'Upwork & Fiverr freelance profile launch',
      '20-Page Graduation Client Business Audit'
    ]
  }
];

interface CurriculumViewProps {
  onEnrollClick: () => void;
}

export default function CurriculumView({ onEnrollClick }: CurriculumViewProps) {
  const [selectedMonth, setSelectedMonth] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1); // Week 1 expanded by default

  const handleToggleWeek = (weekNum: number) => {
    setExpandedWeek(prev => (prev === weekNum ? null : weekNum));
  };

  // Filter curriculum data by selected month and search query
  const filteredWeeks = useMemo(() => {
    return CURRICULUM_DATA.filter(week => {
      // Month calculation: Week 1-4 (Month 1), 5-8 (Month 2), 9-12 (Month 3), 13-16 (Month 4)
      const month = Math.ceil(week.weekNumber / 4);
      
      const matchesMonth = selectedMonth === 'all' || month === selectedMonth;
      const matchesSearch =
        week.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        week.goal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        week.tools.some(tool => tool.toLowerCase().includes(searchQuery.toLowerCase())) ||
        week.dailyPlan.some(
          d =>
            d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            d.learn.some(l => l.toLowerCase().includes(searchQuery.toLowerCase()))
        );

      return matchesMonth && matchesSearch;
    });
  }, [selectedMonth, searchQuery]);

  return (
    <div className="w-full">
      {/* Intro section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-1">
          <LucideIcon name="Award" size={12} />
          Complete 16-Week Curriculum
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight text-slate-900 dark:text-white">
          Practical Learn-By-Doing Course Map
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          5 days a week, 1-2 hours of daily bite-sized lessons, capped with a concrete practical assignment. 
          Follow our timeline to go from absolute beginner to high-income marketing consultant.
        </p>
      </div>

      {/* Filter and Search controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          <button
            onClick={() => setSelectedMonth('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              selectedMonth === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            All Months
          </button>
          {[1, 2, 3, 4].map(m => (
            <button
              key={m}
              onClick={() => setSelectedMonth(m)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedMonth === m
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              Month {m}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <LucideIcon
            name="Search"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search topics, tools, or weeks..."
            className="w-full pl-10 pr-4 py-2 text-xs font-medium bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl border border-slate-200/80 dark:border-slate-750 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <LucideIcon name="X" size={14} />
            </button>
          )}
        </div>
      </div>

      {/* 2-Column Grid with Vertical Interactive Timeline & Week-by-Week Accordions */}
      <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Column: Vertical Interactive Timeline */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/85 rounded-3xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-full filter blur-xl -z-10" />
            
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-50 dark:border-slate-850">
              <span className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <LucideIcon name="History" size={16} />
              </span>
              <h3 className="text-sm font-extrabold text-slate-800 dark:text-white uppercase tracking-wider font-display">
                Course Timeline
              </h3>
            </div>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium">
              Click a month below to filter the weekly topics. Track your progression from foundation to securing agency clients.
            </p>

            {/* Timeline nodes */}
            <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
              {TIMELINE_MONTHS.map((item) => {
                const isSelected = selectedMonth === item.month;
                
                return (
                  <div key={item.month} className="relative group">
                    {/* Circle Node Indicator */}
                    <button
                      onClick={() => setSelectedMonth(prev => prev === item.month ? 'all' : item.month)}
                      className="absolute -left-[23px] top-1.5 z-10 w-5 h-5 rounded-full border-2 bg-white dark:bg-slate-950 flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer"
                      style={{
                        borderColor: isSelected ? item.colorHex : 'rgba(148, 163, 184, 0.3)',
                        boxShadow: isSelected ? `0 0 10px ${item.colorHex}50` : 'none',
                        transform: isSelected ? 'scale(1.1)' : 'none'
                      }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: isSelected ? item.colorHex : 'transparent'
                        }}
                      />
                    </button>

                    {/* Month Node Card */}
                    <div
                      onClick={() => setSelectedMonth(prev => prev === item.month ? 'all' : item.month)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border-blue-500/50 bg-blue-50/10 dark:bg-blue-950/10 shadow-lg'
                          : 'border-slate-100 dark:border-slate-800/60 bg-transparent hover:bg-slate-50/50 dark:hover:bg-slate-900/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span 
                          className="text-[10px] font-black uppercase tracking-widest font-mono"
                          style={{ color: item.colorHex }}
                        >
                          Month {item.month}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold font-mono">
                          {item.weeks}
                        </span>
                      </div>
                      
                      <h4 className="text-xs font-extrabold text-slate-800 dark:text-white mt-1 group-hover:text-blue-500 transition-colors">
                        {item.title}
                      </h4>
                      
                      <p className="text-[11px] text-slate-400 dark:text-slate-450 mt-1 leading-snug">
                        {item.description}
                      </p>

                      {/* Milestones listed mini-list */}
                      <ul className="mt-3 space-y-1.5 border-t border-slate-50 dark:border-slate-850 pt-3">
                        {item.milestones.map((milestone, idx) => (
                          <li key={idx} className="flex gap-1.5 items-start text-[10px] text-slate-500 dark:text-slate-450 font-semibold leading-relaxed">
                            <span className="text-emerald-500 font-black shrink-0">✓</span>
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clear timeline filter button */}
            {selectedMonth !== 'all' && (
              <button
                onClick={() => setSelectedMonth('all')}
                className="mt-6 w-full py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 text-[11px] font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                <LucideIcon name="RefreshCw" size={12} className="text-blue-500" />
                Show All Weeks
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Detailed Accordions list */}
        <div className="lg:col-span-8 space-y-4">
          {filteredWeeks.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl">
              <LucideIcon name="Search" className="mx-auto text-slate-300 dark:text-slate-700 mb-3" size={40} />
              <p className="text-slate-500 dark:text-slate-400 font-medium">No results found matching "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSelectedMonth('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs text-blue-600 font-bold hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
          filteredWeeks.map(week => {
            const isExpanded = expandedWeek === week.weekNumber;
            const monthNumber = Math.ceil(week.weekNumber / 4);
            
            return (
              <div
                key={week.weekNumber}
                className={`rounded-2xl border transition-all duration-300 ${
                  isExpanded
                    ? 'border-blue-500 bg-white dark:bg-slate-900 shadow-xl'
                    : 'border-slate-100 dark:border-slate-800/60 bg-white/60 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900'
                }`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => handleToggleWeek(week.weekNumber)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-start md:items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 text-white flex flex-col items-center justify-center font-display shadow-md shrink-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider leading-none">Week</span>
                      <span className="text-xl font-extrabold leading-none mt-0.5">{week.weekNumber}</span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                          Month {monthNumber}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                          <LucideIcon name="Clock" size={11} /> {week.estimatedDuration}
                        </span>
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-white mt-1">
                        {week.title}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-400 mt-0.5 hidden md:block">
                        {week.goal}
                      </p>
                    </div>
                  </div>
                  <div className="ml-4 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300">
                    <LucideIcon
                      name={isExpanded ? 'ChevronUp' : 'ChevronDown'}
                      size={18}
                      className="transition-transform duration-200"
                    />
                  </div>
                </button>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden border-t border-slate-100 dark:border-slate-800"
                    >
                      <div className="p-5 md:p-6 space-y-6 bg-slate-50/50 dark:bg-slate-950/20">
                        {/* Tools list */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-2.5">
                            <LucideIcon name="Cpu" size={14} className="text-blue-500" />
                            Tools Mastered This Week
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {week.tools.map((t, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 text-xs font-semibold rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100/30 flex items-center gap-1"
                              >
                                <LucideIcon name="CheckCircle2" size={10} />
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Daily breakdown */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-3">
                            <LucideIcon name="Calendar" size={14} className="text-purple-500" />
                            Day-by-Day Practical Schedule
                          </h4>
                          
                          <div className="space-y-3">
                            {week.dailyPlan.map(day => (
                              <div
                                key={day.dayNumber}
                                className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm flex flex-col md:flex-row gap-3 items-start"
                              >
                                <div className="w-full md:w-36 shrink-0">
                                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block font-mono">
                                    Day {day.dayNumber}
                                  </span>
                                  <span className="text-sm font-extrabold text-slate-800 dark:text-white block mt-0.5">
                                    {day.dayName}
                                  </span>
                                </div>
                                <div className="flex-1 space-y-2">
                                  <div>
                                    <h5 className="text-sm font-bold text-blue-600 dark:text-blue-400">
                                      {day.title}
                                    </h5>
                                    <ul className="list-disc pl-4 mt-1.5 space-y-1 text-xs text-slate-600 dark:text-slate-350">
                                      {day.learn.map((l, i) => (
                                        <li key={i}>{l}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="pt-2 border-t border-slate-50 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
                                    <div className="flex-1">
                                      <p className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                                        Today's Practical Task:
                                      </p>
                                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                                        {day.task}
                                      </p>
                                    </div>
                                    {day.tool && (
                                      <div className="shrink-0 bg-slate-50 dark:bg-slate-950 p-2 rounded-lg border border-slate-100 dark:border-slate-800 flex items-center gap-1.5 h-fit self-end">
                                        <span className="text-[10px] font-bold text-slate-400 font-mono uppercase">Tool:</span>
                                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{day.tool}</span>
                                      </div>
                                    )}
                                  </div>
                                  {day.template && (
                                    <div className="p-2 rounded-lg bg-amber-500/5 border border-amber-500/10 text-amber-600 dark:text-amber-400 text-xs">
                                      <span className="font-bold">Template parameters: </span> {day.template}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Weekend Project section */}
                        <div className="p-4 rounded-xl border border-dashed border-purple-300/60 dark:border-purple-800/60 bg-gradient-to-r from-purple-50/50 via-indigo-50/30 to-blue-50/30 dark:from-purple-950/20 dark:via-slate-900/10 dark:to-blue-950/10">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-1 rounded bg-purple-600 text-white shadow-sm">
                              <LucideIcon name="FileText" size={14} />
                            </div>
                            <h4 className="text-sm font-extrabold text-slate-800 dark:text-white">
                              Weekend Project Assignment: {week.weekendAssignment.projectTitle}
                            </h4>
                          </div>
                          
                          <ol className="list-decimal pl-4.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                            {week.weekendAssignment.steps.map((s, index) => (
                              <li key={index}>{s}</li>
                            ))}
                          </ol>

                          <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1.5">
                              <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Deliverable:</span>
                              <span className="font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 rounded border border-purple-100/20">
                                {week.weekendAssignment.submission}
                              </span>
                            </div>
                            <button
                              onClick={onEnrollClick}
                              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 group"
                            >
                              Ready to submit? Enroll Now
                              <LucideIcon name="ArrowRight" size={12} className="transition-transform group-hover:translate-x-0.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
        </div> {/* Closes right column: Detailed Accordions list */}
      </div> {/* Closes 2-Column Grid with Vertical Interactive Timeline & Week-by-Week Accordions */}

      {/* Progress Tracker Section matching PDF */}
      <div className="mt-16 border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1">
              <LucideIcon name="Activity" size={14} />
              PDF Syllabus Companion
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              Student Progress Tracker Ledger
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Grade criteria and submission assignments expected during the 4-month program.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-center bg-slate-50 dark:bg-slate-950 px-4 py-2 rounded-xl border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Assignments</span>
              <span className="text-xl font-extrabold text-slate-800 dark:text-white font-mono">16</span>
            </div>
            <div className="text-center bg-slate-50 dark:bg-slate-950 px-4 py-2 rounded-xl border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Marks</span>
              <span className="text-xl font-extrabold text-slate-800 dark:text-white font-mono">100</span>
            </div>
          </div>
        </div>

        {/* Dense progress grid from PDF */}
        <div className="overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 text-xs font-extrabold tracking-wider border-b border-slate-100 dark:border-slate-800">
                <th className="py-3 px-4 w-16">Week</th>
                <th className="py-3 px-4">Marketing Module Courseware</th>
                <th className="py-3 px-4">Assignment Deliverable Submissions</th>
                <th className="py-3 px-4 text-right w-36">Max Grade Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs text-slate-700 dark:text-slate-350 font-medium">
              {[
                { w: 1, m: 'Digital Marketing Foundation + Mindset', p: '1-Page Brand Blueprint (Competitors list)', s: '10 / 10' },
                { w: 2, m: 'WordPress Setup & Custom Website Build', p: 'Live 5-Page Functional Site (Elementor)', s: '10 / 10' },
                { w: 3, m: 'Landing Pages + GSC Setup + Keyword Map', p: 'Spreadsheet with 30 mapped target keywords', s: '10 / 10' },
                { w: 4, m: 'SEO Deep Dive — On-Page + Technical Audit', p: 'SEO audit checklist + 2 live optimized blogs', s: '10 / 10' },
                { w: 5, m: 'Advanced SEO — GEO Engine + Google Business', p: '800-Word GEO content guide + GBP listing setup', s: '10 / 10' },
                { w: 6, m: 'Content Marketing — Multi-Channel Strategy', p: '7-Day scheduled content calendar + Canva assets', s: '10 / 10' },
                { w: 7, m: 'Personal Branding + YouTube/LinkedIn Marketing', p: 'Live optimized Video link + LinkedIn publication', s: '10 / 10' },
                { w: 8, m: 'Instagram Marketing & Social Media Strategy', p: '30-Day Instagram calendar grid plan', s: '10 / 10' },
                { w: 9, m: 'Google Ads Search Campaign Construction', p: 'Search Campaign structure sheet (15 ads copy)', s: '10 / 10' },
                { w: 10, m: 'Meta Ads Manager Facebook/IG Funnels', p: 'Target ad structures + 3 custom Canva ad designs', s: '10 / 10' },
                { w: 11, m: 'Email Automation Welcome Sequences & ManyChat', p: 'Mailchimp sequence trigger setup + WhatsApp Catalogue', s: '10 / 10' },
                { w: 12, m: 'E-commerce Marketing & Shopify Store Build', p: 'Shopify live preview link (3 optimized products)', s: '10 / 10' },
                { w: 13, m: 'Analytics Integration (GA4 + Looker Dashboard)', p: 'Client-ready Looker Studio KPI dashboard', s: '10 / 10' },
                { w: 14, m: 'Social Commerce & Influencer Briefings', p: 'Influencer campaign briefs + UTM tracking sheets', s: '10 / 10' },
                { w: 15, m: 'AI Prompt Engineering & Make.com Automation', p: 'Zapier/Make automation logic pipeline mapping', s: '10 / 10' },
                { w: 16, m: 'Freelancing Gig Setup & Graduation Project', p: '20-Page Comprehensive Client Audit & Growth Strategy', s: 'Graduation' },
              ].map(item => (
                <tr key={item.w} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-400">#{item.w}</td>
                  <td className="py-2.5 px-4 text-slate-900 dark:text-white font-semibold">{item.m}</td>
                  <td className="py-2.5 px-4 text-slate-500 dark:text-slate-400 font-mono italic">{item.p}</td>
                  <td className="py-2.5 px-4 text-right font-bold text-blue-600 dark:text-blue-400 font-mono">{item.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
