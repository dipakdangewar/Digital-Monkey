import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface LeadFormViewProps {
  initialProfession?: string;
  onSuccessSubmit?: () => void;
}

export interface LeadRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  currentProfession: string;
  message: string;
  timestamp: string;
}

export default function LeadFormView({ initialProfession = '', onSuccessSubmit }: LeadFormViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    currentProfession: initialProfession || 'Student',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [savedLeads, setSavedLeads] = useState<LeadRecord[]>([]);

  // Load existing mock/saved leads from localStorage for simulation testing
  useEffect(() => {
    const raw = localStorage.getItem('digital_monkey_leads');
    if (raw) {
      try {
        setSavedLeads(JSON.parse(raw));
      } catch (e) {
        // ignore
      }
    } else {
      // Pre-populate with some realistic mock leads
      const defaults: LeadRecord[] = [
        {
          id: '1',
          name: 'Anjali Gupta',
          email: 'anjali@example.com',
          phone: '+91 98765 43210',
          city: 'Mumbai',
          currentProfession: 'Freelancer',
          message: 'Interested in the upcoming weekend batch starting this Month.',
          timestamp: new Date(Date.now() - 4 * 3600000).toLocaleString()
        },
        {
          id: '2',
          name: 'Vikram Mehta',
          email: 'vikram@example.com',
          phone: '+91 87654 32109',
          city: 'Pune',
          currentProfession: 'Small Business Owner',
          message: 'Wanting to optimize organic ranking of my local restaurant using GEO.',
          timestamp: new Date(Date.now() - 12 * 3600000).toLocaleString()
        }
      ];
      localStorage.setItem('digital_monkey_leads', JSON.stringify(defaults));
      setSavedLeads(defaults);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address format';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      tempErrors.phone = 'Please provide a valid contact number';
    }
    if (!formData.city.trim()) tempErrors.city = 'City location is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate database post latency
    setTimeout(() => {
      const newLead: LeadRecord = {
        id: Math.random().toString(36).substring(2, 9),
        ...formData,
        timestamp: new Date().toLocaleString()
      };

      const updated = [newLead, ...savedLeads];
      localStorage.setItem('digital_monkey_leads', JSON.stringify(updated));
      setSavedLeads(updated);

      setIsSubmitting(false);
      setSuccess(true);
      if (onSuccessSubmit) {
        onSuccessSubmit();
      }

      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        currentProfession: 'Student',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left column: High impact benefits selling the program */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div>
            <span className="px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Next Batch Booking Active
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-3">
              Ready to Become a Digital Marketing Expert?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              Submit your credentials below to reserve your slot for our upcoming free live demo class. 
              Our placement coordinators will connect with you within 12 hours.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Student enrollment benefits:
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                { title: 'AI Powered Curriculum', desc: 'Covering 40+ advanced models, prompts & automations.', icon: 'BrainCircuit' },
                { title: '16 Live Projects', desc: 'Submit real deliverables every weekend for client critiques.', icon: 'FileText' },
                { title: 'Lifetime Community', desc: 'Secure direct access to active peers, agency leads & alumni.', icon: 'Users' },
                { title: 'Certification & Ledger', desc: 'Verifiable QR-coded certificate recruiters trust.', icon: 'Award' },
                { title: 'Placement Assistance', desc: 'Portfolio feedback, resume optimization, mock drills.', icon: 'Briefcase' },
                { title: 'Portfolio Building', desc: 'Construct a multi-page operational live client audit piece.', icon: 'Layers' },
              ].map((b, i) => (
                <div key={i} className="flex gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0 h-fit">
                    <LucideIcon name={b.icon} size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white leading-tight">
                      {b.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Lead Form */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl p-6 md:p-8 relative overflow-hidden">
          {/* Glass background gradient */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl" />
          
          <div className="mb-6 relative">
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
              Book Your Free Demo Class
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              No credit card required. Lock in your batch placement today.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto shadow-md">
                  <LucideIcon name="Check" size={32} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Demo Class Booking Successful!
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    Thank you! Your information has been registered. An admission counselor will contact you via WhatsApp and Email in the next 12 hours.
                  </p>
                </div>
                
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4 relative"
              >
                {/* Grid for Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <LucideIcon name="Users" size={12} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 text-xs font-medium bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white rounded-xl border ${
                        errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200/80 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      } outline-none transition-all placeholder:text-slate-400`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-semibold">{errors.name}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <LucideIcon name="Mail" size={12} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-2.5 text-xs font-medium bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white rounded-xl border ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200/80 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      } outline-none transition-all placeholder:text-slate-400`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-semibold">{errors.email}</p>}
                  </div>
                </div>

                {/* Grid for Phone & City */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <LucideIcon name="Phone" size={12} />
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-2.5 text-xs font-medium bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white rounded-xl border ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200/80 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      } outline-none transition-all placeholder:text-slate-400`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 font-semibold">{errors.phone}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <LucideIcon name="MapPin" size={12} />
                      City Location *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Mumbai, Pune, Bangalore"
                      className={`w-full px-4 py-2.5 text-xs font-medium bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white rounded-xl border ${
                        errors.city ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200/80 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      } outline-none transition-all placeholder:text-slate-400`}
                    />
                    {errors.city && <p className="text-[10px] text-red-500 font-semibold">{errors.city}</p>}
                  </div>
                </div>

                {/* Profession Dropdown */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <LucideIcon name="Briefcase" size={12} />
                    Current Profession
                  </label>
                  <select
                    name="currentProfession"
                    value={formData.currentProfession}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-xs font-medium bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white rounded-xl border border-slate-200/80 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  >
                    <option value="Student">Student</option>
                    <option value="Job Seeker">Job Seeker</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Small Business Owner">Small Business Owner</option>
                    <option value="Entrepreneur">Entrepreneur / Founder</option>
                    <option value="Marketing Professional">Marketing Professional</option>
                    <option value="Content Creator">Content Creator / Influencer</option>
                  </select>
                </div>

                {/* Message Box */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <LucideIcon name="MessageSquareText" size={12} />
                    Optional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your learning goals or business projects..."
                    className="w-full px-4 py-2.5 text-xs font-medium bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white rounded-xl border border-slate-200/80 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-xs font-display cursor-pointer select-none"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Registering Your Slot...
                    </>
                  ) : (
                    <>
                      <LucideIcon name="Sparkles" size={14} />
                      Book Free Demo Class
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Leads verification dashboard showing real-time feedback */}
      <div className="mt-16 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <h4 className="text-sm font-extrabold text-slate-800 dark:text-white">
            Lead Submission Console Ledger (Active Cohort Testing)
          </h4>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-normal">
          This panel lists local submissions saved to your browser session. Submit the form above to see your lead append instantly.
        </p>

        <div className="space-y-2 max-h-56 overflow-y-auto pr-1 no-scrollbar">
          {savedLeads.length === 0 ? (
            <p className="text-xs text-slate-400 italic py-4 text-center">No submitted leads in this session.</p>
          ) : (
            savedLeads.map(lead => (
              <div
                key={lead.id}
                className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 dark:text-white">{lead.name}</span>
                    <span className="text-[10px] bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-2 py-0.25 rounded font-bold uppercase">
                      {lead.currentProfession}
                    </span>
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.25 rounded font-mono font-bold">
                      {lead.city}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5 flex gap-2">
                    <span>Email: {lead.email}</span>
                    <span>•</span>
                    <span>Phone: {lead.phone}</span>
                  </div>
                  {lead.message && (
                    <p className="text-xs text-slate-600 dark:text-slate-300 italic mt-1.5 border-l-2 border-slate-200 dark:border-slate-800 pl-2">
                      "{lead.message}"
                    </p>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-slate-400 font-mono block">{lead.timestamp}</span>
                  <span className="text-[9px] text-green-500 font-bold font-mono">STATUS: PENDING OUTREACH</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
