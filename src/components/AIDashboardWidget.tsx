import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface AdCampaign {
  id: string;
  platform: 'Google' | 'Meta' | 'LinkedIn' | 'TikTok';
  name: string;
  spend: number;
  leads: number;
  cpl: number;
  status: 'Active' | 'Optimizing' | 'Paused';
}

const INITIAL_CAMPAIGNS: AdCampaign[] = [
  { id: '1', platform: 'Meta', name: 'Advantage+ Leads Funnel', spend: 12400, leads: 292, cpl: 42.46, status: 'Active' },
  { id: '2', platform: 'Google', name: 'Search - Transactional Keywords', spend: 8500, leads: 118, cpl: 72.03, status: 'Active' },
  { id: '3', platform: 'Meta', name: 'Instagram Retargeting Reels', spend: 3200, leads: 91, cpl: 35.16, status: 'Active' },
  { id: '4', platform: 'Google', name: 'P-Max E-commerce Catalog', spend: 15000, leads: 312, cpl: 48.07, status: 'Optimizing' }
];

const AI_PROMPTS = [
  {
    category: 'Ad Copy (AIDA)',
    trigger: 'Generate Meta Ad headline & primary text for a fitness brand',
    output: `🚨 HOOK: Tired of gym routines that don't stick? Meet the 20-Min Home Shred.
👉 PROBLEM: No time, expensive gear, zero motivation.
💡 SOLUTION: 20 minutes a day. Zero equipment. Real certified trainers tracking your progress in our private community app.
🎯 CTA: Click 'Learn More' to secure 50% Off the Premier Cohort today! Only 12 spots left.`
  },
  {
    category: 'Target Audience',
    trigger: 'Define high-intent Google search keywords for vegan catering',
    output: `🔍 TRANSACTIONAL KEYWORDS (Phrase Match):
1. "vegan catering services near me"
2. "organic plant-based wedding catering"
3. "vegan corporate lunch delivery [City]"
❌ NEGATIVE KEYWORDS: "free recipes", "cheap catering", "diy vegan cooking"`
  },
  {
    category: 'Website Audit',
    trigger: 'Run direct CRO & speed checklist on landing page',
    output: `⚙️ ACTIONABLE RECOMMENDATIONS:
- Compressive optimize heavy hero image (saves 2.4s loading time)
- Move contact submission form above the fold on mobile
- Add live floating WhatsApp trust widget to increase queries by up to 28%`
  }
];

export default function AIDashboardWidget() {
  const [campaigns, setCampaigns] = useState<AdCampaign[]>(INITIAL_CAMPAIGNS);
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiOutput, setAiOutput] = useState(AI_PROMPTS[0].output);
  const [typingOutput, setTypingOutput] = useState(AI_PROMPTS[0].output);
  const [liveCounter, setLiveCounter] = useState(813);

  // Increment metrics randomly to look alive and dynamic
  useEffect(() => {
    const interval = setInterval(() => {
      setCampaigns(prev => prev.map(c => {
        if (c.status === 'Active' && Math.random() > 0.6) {
          const addedLeads = Math.floor(Math.random() * 2) + 1;
          const addedSpend = Math.floor(Math.random() * 120) + 40;
          const newLeads = c.leads + addedLeads;
          const newSpend = c.spend + addedSpend;
          return {
            ...c,
            leads: newLeads,
            spend: newSpend,
            cpl: Number((newSpend / newLeads).toFixed(2))
          };
        }
        return c;
      }));
      
      // Update overall leads counter
      if (Math.random() > 0.5) {
        setLiveCounter(prev => prev + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle AI execution simulation
  const handleRunPrompt = (index: number) => {
    setSelectedPrompt(index);
    setIsGenerating(true);
    setTypingOutput('');
    
    setTimeout(() => {
      setIsGenerating(false);
      setAiOutput(AI_PROMPTS[index].output);
    }, 1500);
  };

  // Typewriter effect for AI generated text
  useEffect(() => {
    if (isGenerating) return;
    
    let currentIndex = 0;
    const textToType = aiOutput;
    setTypingOutput('');
    
    const interval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypingOutput(prev => prev + textToType.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 8);
    
    return () => clearInterval(interval);
  }, [aiOutput, isGenerating]);

  // Aggregate stats
  const totalLeads = campaigns.reduce((acc, c) => acc + c.leads, 0);
  const totalSpend = campaigns.reduce((acc, c) => acc + c.spend, 0);
  const avgCpl = Number((totalSpend / totalLeads).toFixed(2));

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden p-5">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400 font-medium">
            digital_monkey_os_v1.0
          </span>
        </div>
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping mr-1" />
          Live Student Sandbox
        </div>
      </div>

      {/* Grid containing Quick Stats */}
      <div className="grid grid-cols-3 gap-3 my-4">
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
          <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
            Total Leads
          </p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-xl font-bold text-slate-800 dark:text-white font-mono">
              {totalLeads}
            </span>
            <span className="text-[10px] text-green-500 font-medium font-mono">+12%</span>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
          <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
            Avg. CPL
          </p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-xl font-bold text-slate-800 dark:text-white font-mono">
              ₹{avgCpl}
            </span>
            <span className="text-[10px] text-blue-500 font-medium font-mono">Stable</span>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
          <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
            Cohort leads
          </p>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-xl font-bold text-slate-800 dark:text-white font-mono">
              {liveCounter}
            </span>
            <span className="text-[10px] text-purple-500 font-medium font-mono animate-pulse">LIVE</span>
          </div>
        </div>
      </div>

      {/* Tab select for active marketing tasks */}
      <div className="mt-4">
        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
          <LucideIcon name="Sparkles" className="text-purple-500" size={14} />
          AI Engine Simulator
        </p>
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-950">
          {AI_PROMPTS.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleRunPrompt(i)}
              className={`flex-1 min-w-[110px] text-center text-xs py-1.5 px-2 rounded-lg font-medium transition-all ${
                selectedPrompt === i
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {prompt.category}
            </button>
          ))}
        </div>

        {/* Selected trigger */}
        <div className="mt-3 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <div className="p-1 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
            <LucideIcon name="BrainCircuit" size={14} />
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 italic font-medium truncate">
            "{AI_PROMPTS[selectedPrompt].trigger}"
          </p>
        </div>

        {/* AI response box */}
        <div className="mt-2.5 rounded-xl bg-slate-950 text-slate-100 p-3.5 font-mono text-xs h-[160px] overflow-y-auto border border-slate-900 shadow-inner relative">
          <div className="absolute top-2 right-2 text-[9px] uppercase tracking-wider text-purple-400/80 font-bold bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-900/50">
            {isGenerating ? 'Generating...' : 'Gemini AI active'}
          </div>
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center h-full gap-2">
              <span className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-[10px] text-slate-400 animate-pulse font-sans">
                Analyzing search volumes, entities, and ad structures...
              </p>
            </div>
          ) : (
            <pre className="whitespace-pre-wrap leading-relaxed break-words">{typingOutput || ' '}</pre>
          )}
        </div>
      </div>

      {/* Campaign List */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Weekly Practical Ad Set Campaigns
          </p>
          <span className="text-[10px] font-mono text-slate-400">Sync status: OK</span>
        </div>
        <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1 no-scrollbar">
          {campaigns.map(c => (
            <div
              key={c.id}
              className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    c.status === 'Active'
                      ? 'bg-green-500'
                      : c.status === 'Optimizing'
                      ? 'bg-blue-400'
                      : 'bg-slate-400'
                  }`}
                />
                <div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {c.name}
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                    <span className="text-[9px] uppercase font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-1 py-0.25 rounded">
                      {c.platform}
                    </span>
                    • Spend: ₹{c.spend.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-100 font-mono">
                  {c.leads} Leads
                </p>
                <p className="text-[9px] text-slate-400 font-mono">₹{c.cpl}/lead</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
