
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login, then navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-[430px] mx-auto bg-background-light dark:bg-background-dark text-light-text-color dark:text-white transition-colors duration-300">
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-white/10 shadow-sm border border-slate-100 dark:border-transparent"
          >
            <span className="material-symbols-outlined text-primary">arrow_back_ios_new</span>
          </button>
        </div>
      </div>

      <div className="px-8 mb-8">
        <h1 className="text-light-text-color dark:text-white text-3xl font-bold tracking-tight">
          Welcome Back!
        </h1>
        <p className="text-brand-gray-dark dark:text-brand-gray-light mt-2 text-base">
          Sign in to see your child's reading journey.
        </p>
      </div>

      <form onSubmit={handleLogin} className="flex-1 px-8 space-y-5">
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
              placeholder="Enter your email"
              type="email"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold ml-1 text-light-text-color dark:text-white" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              lock
            </span>
            <input
              className="w-full pl-12 pr-12 py-4 bg-white dark:bg-input-dark-bg border-none rounded-2xl shadow-sm placeholder:text-slate-400 focus:ring-2 focus:ring-primary transition-all"
              id="password"
              placeholder="Enter password"
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

        <div className="flex justify-end">
          <a className="text-sm font-medium text-primary hover:underline" href="#">
            Forgot Password?
          </a>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-orange-600 text-white text-lg font-bold py-4 rounded-2xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2"
          >
            Login
          </button>
        </div>
      </form>

      <div className="relative py-4 flex items-center px-8">
        <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
        <span className="flex-shrink mx-4 text-xs font-medium text-slate-400 uppercase tracking-widest">
          or continue with
        </span>
        <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-8">
        <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white dark:bg-input-dark-bg border border-slate-100 dark:border-transparent rounded-2xl shadow-sm hover:bg-slate-50 transition-all">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            ></path>
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            ></path>
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            ></path>
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            ></path>
          </svg>
          <span className="text-sm font-semibold">Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white dark:bg-input-dark-bg border border-slate-100 dark:border-transparent rounded-2xl shadow-sm hover:bg-slate-50 transition-all">
          <svg className="w-5 h-5 dark:fill-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.05 20.28c-.96 0-2.04-.6-3.23-.6-1.21 0-2.35.58-3.23.58-1.74 0-4.4-3.66-4.4-6.44 0-2.5 1.6-3.83 3.12-3.83 1.05 0 1.94.66 2.68.66.7 0 1.77-.73 3-.73 1.13 0 2.21.53 2.91 1.48-2.31 1.25-1.93 4.34.42 5.4-1.02 2.37-2.06 3.48-3.17 3.48zm-1.87-13.6c-.02 2.51-2.08 4.46-4.54 4.42.03-2.52 2.21-4.55 4.54-4.42z"></path>
          </svg>
          <span className="text-sm font-semibold">Apple</span>
        </button>
      </div>

      <div className="px-8 pt-8 pb-10 text-center">
        <p className="text-brand-gray-dark dark:text-brand-gray-light text-sm">
          New here?
          <a onClick={() => navigate('/register')} className="text-primary font-bold ml-1 hover:underline cursor-pointer">
            Create an account
          </a>
        </p>
      </div>

      <div className="w-full flex justify-center pb-2">
        <div className="w-32 h-1 bg-black/10 dark:bg-white/10 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoginScreen;
