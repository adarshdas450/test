
import React from 'react';
import { footerLinks } from '../constants';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-800 dark:bg-slate-900 relative text-white">
            <div className="container mx-auto px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="font-bold text-xl text-slate-100">TinyWow</h3>
                        <p className="text-slate-300 dark:text-slate-400 mt-4 max-w-md">
                            TinyWow provides free online conversion, pdf, and other handy tools to help you solve problems of all types. All files both processed and unprocessed are deleted after 1 hour
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-100 dark:text-slate-200">Navigate</h4>
                        <ul className="mt-4 space-y-2">
                            {footerLinks.navigate.map(link => (
                                <li key={link.name}><a href={link.href} className="text-slate-300 dark:text-slate-400 hover:text-blue-400">{link.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-100 dark:text-slate-200">Tools</h4>
                        <ul className="mt-4 space-y-2 grid grid-cols-2 gap-x-4">
                            {footerLinks.tools.map(link => (
                                <li key={link.name}><a href={link.href} className="text-slate-300 dark:text-slate-400 hover:text-blue-400">{link.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-slate-700 dark:bg-slate-800 py-4">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-300 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-indigo-500 rounded-md flex items-center justify-center text-white font-bold">J</div>
                        <span>TinyWow is a <a href="#" className="text-blue-400 font-semibold">Jenni AI</a> Company</span>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        @ 2025 TinyWow. All rights reserved
                    </div>
                </div>
            </div>
            <button onClick={scrollToTop} className="absolute bottom-6 right-6 w-10 h-10 bg-slate-600 dark:bg-slate-700 rounded-full flex items-center justify-center text-gray-200 dark:text-gray-300 hover:bg-slate-500 dark:hover:bg-slate-600 transition-colors">
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
};

export default Footer;