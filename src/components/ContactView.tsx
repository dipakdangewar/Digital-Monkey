import React, { useState } from 'react';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function ContactView() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setContactForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  const handleWhatsAppChat = () => {
    // Standard whatsapp link with customizable text
    const text = encodeURIComponent("Hello Digital Monkey, I'm interested in the 4-Month Digital Marketing & AI course. Can I get more details?");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-1">
          <LucideIcon name="MapPin" size={12} />
          Contact Information & Support
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight text-slate-900 dark:text-white">
          Get in Touch with Digital Monkey
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Have questions about fees, syllabus details, or corporate partnerships? We are here to help. Reach out directly or visit our premium training campus.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left block: info cards, business hours, and Google maps placeholder */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick contact card array */}
          <div className="space-y-3">
            {[
              { title: 'Call Center Hotline', desc: '+91 98765 43210', info: 'Mon-Sun, 9:00 AM - 8:00 PM', icon: 'Phone', actionText: 'Call Now', action: () => window.open('tel:+919876543210') },
              { title: 'Email Correspondence', desc: 'admissions@digitalmonkey.in', info: 'Average reply time: 2 hours', icon: 'Mail', actionText: 'Email Us', action: () => window.open('mailto:admissions@digitalmonkey.in') },
              { title: 'Main Training Campus', desc: '4th Floor, Tech Hub Towers, Senapati Bapat Road, Pune, Maharashtra 411016', info: 'Opposite Marriott Pavilion', icon: 'MapPin', actionText: 'Navigate', action: () => window.open('https://maps.google.com') }
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-4 shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 h-fit shrink-0">
                  <LucideIcon name={item.icon} size={20} />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.title}</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">{item.desc}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.info}</p>
                  <button
                    onClick={item.action}
                    className="mt-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 text-left"
                  >
                    {item.actionText} <LucideIcon name="ArrowUpRight" size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Business Hours Card */}
          <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-3">
              <LucideIcon name="Clock" size={14} className="text-purple-500" />
              Corporate Business Hours
            </h4>
            <div className="space-y-2 text-xs">
              {[
                { days: 'Monday - Friday', hours: '8:00 AM - 9:00 PM', status: 'Live cohort' },
                { days: 'Saturday', hours: '9:00 AM - 6:00 PM', status: 'Weekend practicals' },
                { days: 'Sunday', hours: '10:00 AM - 4:00 PM', status: 'Mentors support' }
              ].map((h, index) => (
                <div key={index} className="flex items-center justify-between py-1 border-b border-slate-50 dark:border-slate-850 last:border-0">
                  <span className="font-bold text-slate-700 dark:text-slate-300">{h.days}</span>
                  <div className="text-right">
                    <span className="font-mono text-slate-900 dark:text-white font-semibold">{h.hours}</span>
                    <span className="block text-[9px] text-purple-500 font-bold uppercase font-mono">{h.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Direct Query card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent border border-green-500/20 shadow-lg relative overflow-hidden">
            <h4 className="text-sm font-extrabold text-slate-800 dark:text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping mr-0.5" />
              Chat Live on WhatsApp
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Skip forms entirely! Click below to open a direct message thread with our course advisors. Ask about fees, installment terms, or schedule.
            </p>
            <button
              onClick={handleWhatsAppChat}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-xl shadow-md text-xs flex items-center gap-2 cursor-pointer transition-all"
            >
              <LucideIcon name="MessageCircle" size={14} />
              Open WhatsApp Advisor Chat
            </button>
          </div>
        </div>

        {/* Right block: Google Map MapBox styled mockup & Contact Form */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Mock Google Map - styled and premium */}
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950 shadow-md h-64 relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-900">
              {/* Premium-looking minimalist map graphic or real iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9928509800726!2d73.82766327598166!3d18.52924906891041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf9aa5555555%3A0x8e8745c478a0f9b3!2sSenapati%20Bapat%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-80 contrast-125 dark:opacity-70"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Digital Monkey Pune Campus Map"
              ></iframe>
            </div>
            
            {/* Map label overlay */}
            <div className="absolute bottom-4 left-4 p-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-xl rounded-xl max-w-xs border border-slate-200/60 dark:border-slate-800 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-display shrink-0 font-extrabold text-sm shadow-md">
                DM
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-white">Digital Monkey Campus</p>
                <p className="text-[10px] text-slate-400 mt-0.5 truncate">Senapati Bapat Road, Pune</p>
              </div>
            </div>
          </div>

          {/* Contact form card */}
          <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
              Send an Offline Inquiry Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Our campus reception team will route this inquiry to the appropriate department.
            </p>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={contactForm.name}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white rounded-xl border border-slate-200/80 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={contactForm.email}
                    onChange={handleInputChange}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white rounded-xl border border-slate-200/80 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400">Phone Number (Optional)</label>
                <input
                  type="text"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white rounded-xl border border-slate-200/80 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400">Your Inquiry Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={handleInputChange}
                  placeholder="How can we help your digital marketing journey today?"
                  className="w-full px-4 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white rounded-xl border border-slate-200/80 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {success && (
                <div className="p-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-green-500/10">
                  <LucideIcon name="Check" size={14} />
                  Message sent successfully! Our team will get back to you shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl shadow transition-all text-xs cursor-pointer"
              >
                {isSubmitting ? 'Sending...' : 'Send Offline Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
