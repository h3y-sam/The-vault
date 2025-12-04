import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';
  const Icon = isPrivacy ? Shield : FileText;
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white dark:bg-[#0F1117] rounded-3xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800 animate-in zoom-in-95 fade-in duration-200">
        
        {/* Header */}
        <div className="relative px-8 py-6 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50/50 dark:bg-slate-900/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">
                    <Icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                    <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-tight">{title}</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Last Updated: {lastUpdated}</p>
                </div>
            </div>
            <button 
                onClick={onClose}
                className="p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm hover:shadow-md"
            >
                <X size={18} />
            </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-8 custom-scrollbar bg-white dark:bg-[#0F1117] text-slate-600 dark:text-slate-300 leading-relaxed text-sm space-y-6">
            {isPrivacy ? (
                <>
                    <section>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">1. Introduction</h3>
                        <p>Welcome to The Vault. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we handle your data when you visit our website.</p>
                    </section>
                    
                    <section>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">2. Information Collection</h3>
                        <p>The Vault operates as a client-side application. We do not collect, store, or process any personal identification information (PII) on our servers. Any preferences you save (such as Dark Mode settings) are stored locally on your device using LocalStorage.</p>
                    </section>

                    <section>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">3. Third-Party Links</h3>
                        <p>Our website contains links to external websites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
                    </section>

                    <section>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">4. Cookies</h3>
                        <p>We do not use tracking cookies. Technical cookies may be used by the hosting provider to ensure the security and performance of the website, but these do not track your browsing habits.</p>
                    </section>
                </>
            ) : (
                <>
                    <section>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">1. Acceptance of Terms</h3>
                        <p>By accessing and using The Vault, you accept and agree to be bound by the terms and provision of this agreement.</p>
                    </section>
                    
                    <section>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">2. Disclaimer</h3>
                        <p className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 text-amber-800 dark:text-amber-400 text-xs">
                            The links and resources provided on The Vault are for educational and informational purposes only. We do not host any files, software, or media content.
                        </p>
                        <p className="mt-3">We are not responsible for the accuracy, compliance, copyright, legality, decency, or any other aspect of the content of other linked sites. If you have any legal issues please contact the appropriate media file owners or host sites.</p>
                    </section>

                    <section>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">3. Use License</h3>
                        <p>Permission is granted to temporarily view the materials (information or software) on The Vault's website for personal, non-commercial transitory viewing only.</p>
                    </section>

                    <section>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">4. Modifications</h3>
                        <p>We reserve the right to revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
                    </section>
                </>
            )}
        </div>
        
        {/* Footer */}
        <div className="px-8 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
             <p className="text-xs text-center text-slate-400">
                This document is effective as of {lastUpdated}.
             </p>
        </div>
      </div>
    </div>
  );
};