
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccountScreen: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store user data in local storage
    const parentProfile = {
      fullName,
      email
    };
    localStorage.setItem('parentProfile', JSON.stringify(parentProfile));

    // Navigate to add child profile
    navigate('/add-child');
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-[430px] mx-auto bg-background-light dark:bg-background-dark text-light-text-color dark:text-white transition-colors duration-300">
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/login')}
            className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-white/10 shadow-sm border border-slate-100 dark:border-transparent"
          >
            <span className="material-symbols-outlined text-primary">arrow_back_ios_new</span>
          </button>
          <div className="flex gap-2">
            <div className="w-8 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800"></div>
            <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800"></div>
          </div>
          <div className="size-10"></div>
        </div>
      </div>

      <div className="px-8 mb-8">
        <h1 className="text-light-text-color dark:text-white text-3xl font-bold tracking-tight">
          Parent Account
        </h1>
        <p className="text-brand-gray-dark dark:text-brand-gray-light mt-2 text-base">
          Let's set up your profile to start tracking your child's progress.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 px-8 space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold ml-1 text-light-text-color dark:text-white" htmlFor="full-name">
            Full Name
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              person
            </span>
            <input
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-input-dark-bg border-none rounded-2xl shadow-sm placeholder:text-slate-400 focus:ring-2 focus:ring-primary transition-all"
              id="full-name"
              placeholder="Enter your name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold ml-1 text-light-text-color dark:text-white" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              mail
            </span>
            <input
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-input-dark-bg border-none rounded-2xl shadow-sm placeholder:text-slate-400 focus:ring-2 focus:ring-primary transition-all"
              id="email"
              placeholder="example@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold ml-1 text-light-text-color dark:text-white" htmlFor="password">
            Create Password
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              lock
            </span>
            <input
              className="w-full pl-12 pr-12 py-4 bg-white dark:bg-input-dark-bg border-none rounded-2xl shadow-sm placeholder:text-slate-400 focus:ring-2 focus:ring-primary transition-all"
              id="password"
              placeholder="Min. 8 characters"
              type={showPassword ? 'text' : 'password'}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              <span className="material-symbols-outlined">
                {showPassword ? 'visibility' : 'visibility_off'}
              </span>
            </button>
          </div>
        </div>

        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <div className="mt-1">
              <input className="rounded-md border-slate-200 text-primary focus:ring-primary" type="checkbox" required />
            </div>
            <span className="text-xs text-brand-gray-dark dark:text-brand-gray-light leading-tight">
              I agree to the Terms of Service and Privacy Policy. I'd like to receive reading tips
              and updates.
            </span>
          </label>
        </div>
        <div className="p-8 pb-10">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-orange-600 text-white text-lg font-bold py-4 rounded-2xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2"
          >
            Next Step
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </form>

      <div className="w-full flex justify-center pb-2">
        <div className="w-32 h-1 bg-black/10 dark:bg-white/10 rounded-full"></div>
      </div>
    </div>
  );
};

export default CreateAccountScreen;
