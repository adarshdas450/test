
import React from 'react';
import { ShieldCheck, Zap, Clock } from 'lucide-react';

const PremiumCTA: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold">Get more with Premium</h2>
          <p className="mt-4 max-w-lg mx-auto md:mx-0">
            Take your projects further with premium tools that stay out of your way and work smarter. Create without limits, ads, or roadblocks. Get started for just $9 a month.
          </p>
          <div className="flex justify-center md:justify-start gap-8 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Ad-free
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" /> Unlimited usage
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" /> Faster processing
            </div>
          </div>
          <button className="mt-10 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Get started
          </button>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
            <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-30"></div>
                <div className="absolute inset-4 bg-blue-500 rounded-full opacity-40"></div>
                <div className="absolute inset-8 bg-blue-500 rounded-full opacity-50"></div>
                <div className="absolute inset-12 bg-slate-200 rounded-2xl shadow-2xl p-4 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                      <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
                    </div>
                     <div className="w-full h-2 bg-gray-200 rounded-full mt-2"></div>
                     <div className="w-4/5 h-2 bg-gray-200 rounded-full mt-2"></div>
                </div>
                <div className="absolute top-8 -left-4 w-10 h-10 bg-slate-200 rounded-full shadow-lg flex items-center justify-center text-red-500"><i className="fas fa-file-pdf text-xl"></i></div>
                <div className="absolute top-1/2 -right-6 w-12 h-12 bg-slate-200 rounded-full shadow-lg flex items-center justify-center text-green-500"><i className="fas fa-file-excel text-2xl"></i></div>
                <div className="absolute bottom-4 left-0 w-8 h-8 bg-slate-200 rounded-full shadow-lg flex items-center justify-center text-blue-500"><i className="fas fa-file-word text-lg"></i></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCTA;