
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AVATAR_URLS } from '../constants';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen w-full max-w-[430px] mx-auto bg-brand-light-bg dark:bg-brand-dark-bg text-text-light dark:text-text-dark transition-colors duration-300">
      {/* iOS Notch Spacer */}
      <div className="ios-notch w-full px-8 pt-4"></div>

      {/* Header */}
      <div className="flex items-center p-6 pb-2 justify-between">
        <div className="text-primary flex size-10 shrink-0 items-center justify-center bg-primary/10 rounded-xl">
          <span className="material-symbols-outlined">menu_book</span>
        </div>
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 ml-3">
          Reading Journey
        </h2>
        <button className="text-text-muted-light dark:text-text-muted-dark">
          <span className="material-symbols-outlined">info</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="relative w-full aspect-square max-w-[320px] flex items-center justify-center">
          <div className="absolute inset-0 bg-soft-blue/50 dark:bg-blue-900/20 illustration-blob blur-2xl"></div>
          <div className="absolute top-10 right-0 w-32 h-32 bg-primary/20 dark:bg-orange-900/20 rounded-full blur-xl"></div>
          <div
            className="relative w-full h-full bg-center bg-no-repeat bg-contain rounded-3xl"
            style={{ backgroundImage: `url('${AVATAR_URLS.CHILD_READING}')` }}
            data-alt="A warm illustration of a child happily reading a large book"
          ></div>
        </div>

        <div className="text-center mt-8">
          <h1 className="text-text-light dark:text-white tracking-tight text-[32px] font-bold leading-[1.15] px-4">
            Unlock Your Child's Reading Potential
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed mt-4 px-6">
            A personalized journey to help your child grow. Test their level, get custom book
            picks, and watch them thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-0 w-full mt-8 px-6">
          <div className="flex items-start gap-4 py-3">
            <div className="flex flex-col items-center shrink-0">
              <div className="flex size-10 items-center justify-center rounded-full bg-soft-blue text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                <span className="material-symbols-outlined text-2xl">assignment</span>
              </div>
              <div className="w-[2px] bg-slate-200 dark:bg-slate-800 h-6"></div>
            </div>
            <div className="flex flex-col pt-1">
              <p className="text-text-light dark:text-white text-base font-semibold leading-none">
                Assess Skills
              </p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1">
                Initial reading assessment and level check
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 py-3">
            <div className="flex flex-col items-center shrink-0">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-2xl">auto_awesome</span>
              </div>
              <div className="w-[2px] bg-slate-200 dark:bg-slate-800 h-6"></div>
            </div>
            <div className="flex flex-col pt-1">
              <p className="text-text-light dark:text-white text-base font-semibold leading-none">
                Personalize Plan
              </p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1">
                AI-driven book recommendations based on interests
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 py-3">
            <div className="flex flex-col items-center shrink-0">
              <div className="flex size-10 items-center justify-center rounded-full bg-soft-yellow text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-300">
                <span className="material-symbols-outlined text-2xl">trending_up</span>
              </div>
            </div>
            <div className="flex flex-col pt-1">
              <p className="text-text-light dark:text-white text-base font-semibold leading-none">
                Track Progress
              </p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1">
                Real-time stats and achievement badges
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-8 space-y-4 bg-brand-light-bg dark:bg-brand-dark-bg border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={() => navigate('/login')} // Assuming login is the next step for "Get Started"
          className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-brand-orange/20 transition-all flex items-center justify-center gap-2"
        >
          Get Started
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full text-text-light dark:text-white text-base font-medium py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
        >
          Already have an account? <span className="text-brand-orange font-bold">Log in</span>
        </button>
      </div>

      <div className="w-full flex justify-center pb-2">
        <div className="w-32 h-1 bg-black/20 dark:bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
