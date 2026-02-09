
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlanSelectionScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isDisclaimerAccepted, setIsDisclaimerAccepted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'buy-books'>('monthly');

  const handleConfirmSelection = () => {
    if (selectedPlan === 'monthly' && !isDisclaimerAccepted) {
      alert('Please accept the disclaimer for monthly subscription.');
      return;
    }
    // Simulate selection and navigate to dashboard or confirmation
    console.log('Selected Plan:', selectedPlan);
    navigate('/dashboard');
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[430px] mx-auto bg-white dark:bg-[#1A1614] overflow-x-hidden pb-24">
      <div className="flex items-center bg-white dark:bg-[#1A1614] p-4 sticky top-0 z-50 justify-between">
        <button
          onClick={() => navigate(-1)}
          className="text-[#111813] dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-orange-50 dark:hover:bg-gray-800"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-[#111813] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
          Plan Selection
        </h2>
      </div>

      <div className="px-6 pt-4 pb-6">
        <h1 className="text-[#111813] dark:text-white tracking-tight text-[28px] font-extrabold leading-tight text-left">
          Choose Your Plan
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-base mt-2 font-normal">
          Pick the best way to fuel your child's reading journey and track their progress.
        </p>
      </div>

      <div className="flex flex-col gap-4 px-6">
        <div
          className={`relative flex flex-col gap-4 rounded-xl border-2 ${
            selectedPlan === 'monthly' ? 'border-primary ring-4 ring-primary/5' : 'border-orange-100 dark:border-gray-800'
          } bg-white dark:bg-[#2A1D15] p-6 ios-shadow transition-all cursor-pointer`}
          onClick={() => setSelectedPlan('monthly')}
        >
          {selectedPlan === 'monthly' && (
            <div className="absolute -top-3 right-6 bg-primary text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
              Recommended
            </div>
          )}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-[#111813] dark:text-white text-xl font-bold leading-tight">
                Monthly Subscription
              </h3>
            </div>
            <p className="flex items-baseline gap-1 text-[#111813] dark:text-white mt-1">
              <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
                $19.99
              </span>
              <span className="text-sm font-medium opacity-70">/ month</span>
            </p>
          </div>
          <div className="space-y-3 mt-2">
            <div className="text-sm font-normal flex gap-3 text-[#111813] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-[20px]">
                check_circle
              </span>
              Access to 500+ premium books
            </div>
            <div className="text-sm font-normal flex gap-3 text-[#111813] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-[20px]">
                check_circle
              </span>
              Monthly progress assessments
            </div>
            <div className="text-sm font-normal flex gap-3 text-[#111813] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-[20px]">
                check_circle
              </span>
              Personalized reading paths
            </div>
            <div className="text-sm font-normal flex gap-3 text-[#111813] dark:text-gray-200 italic opacity-80">
              <span className="material-symbols-outlined text-gray-400 text-[20px]">info</span>
              Returnable after use
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col gap-4 rounded-xl border ${
            selectedPlan === 'buy-books' ? 'border-2 border-primary ring-4 ring-primary/5' : 'border-orange-100 dark:border-gray-800'
          } bg-white dark:bg-[#211C1A] p-6 transition-all cursor-pointer`}
          onClick={() => setSelectedPlan('buy-books')}
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-[#111813] dark:text-white text-xl font-bold leading-tight">
              Buy Books
            </h3>
            <p className="flex items-baseline gap-1 text-[#111813] dark:text-white mt-1">
              <span className="text-4xl font-black leading-tight tracking-[-0.033em]">Varies</span>
              <span className="text-sm font-medium opacity-70">per book</span>
            </p>
          </div>
          <div className="space-y-3 mt-2">
            <div className="text-sm font-normal flex gap-3 text-[#111813] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-[20px]">
                check_circle
              </span>
              Keep books forever
            </div>
            <div className="text-sm font-normal flex gap-3 text-[#111813] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-[20px]">
                check_circle
              </span>
              Build your home library
            </div>
            <div className="text-sm font-normal flex gap-3 text-[#111813] dark:text-gray-200">
              <span className="material-symbols-outlined text-primary text-[20px]">
                check_circle
              </span>
              One-time assessment per purchase
            </div>
            <div className="text-sm font-normal flex gap-3 text-[#111813] dark:text-gray-200 italic opacity-80">
              <span className="material-symbols-outlined text-gray-400 text-[20px]">
                shopping_bag
              </span>
              Individual ownership
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="p-5 bg-orange-50 dark:bg-orange-950/20 rounded-xl border border-dashed border-orange-200 dark:border-orange-900/50">
          <div className="flex items-start gap-3">
            <div className="pt-0.5">
              <input
                className="checkbox-custom h-6 w-6 rounded-lg border-2 border-primary/40 bg-white dark:bg-gray-800 text-primary focus:ring-primary focus:ring-offset-0 transition-all cursor-pointer"
                id="disclaimer"
                type="checkbox"
                checked={isDisclaimerAccepted}
                onChange={(e) => setIsDisclaimerAccepted(e.target.checked)}
              />
            </div>
            <label
              className="text-[#111813] dark:text-gray-200 text-sm font-medium leading-relaxed cursor-pointer select-none"
              htmlFor="disclaimer"
            >
              I understand that subscription books are part of a rental plan and{' '}
              <span className="font-bold underline text-primary">must be returned</span> after my
              plan completion or cancellation.
            </label>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/90 dark:bg-[#1A1614]/90 backdrop-blur-md px-6 py-6 border-t border-gray-100 dark:border-gray-800">
        <button
          onClick={handleConfirmSelection}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl text-lg transition-all active:scale-[0.98] shadow-lg shadow-orange-500/30"
        >
          Confirm Selection
        </button>
        <div className="h-4"></div>
      </div>

      <div className="absolute top-[15%] -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-[20%] -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
    </div>
  );
};

export default PlanSelectionScreen;
