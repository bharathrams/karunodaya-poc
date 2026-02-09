
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DUMMY_RECOMMENDED_BOOKS } from '../constants';
import { Book } from '../types';

interface TabContentProps {
  books: Book[];
}

const AssessmentTabContent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div id="content-assessment" className="block">
      <div className="flex flex-col items-center px-4 pt-6 pb-2">
        <div className="relative flex items-center justify-center w-56 h-28 overflow-hidden">
          <div className="absolute top-0 w-56 h-56 border-[14px] border-orange-100 dark:border-white/10 rounded-full"></div>
          {/* Progress circle - Adjusted to match 145deg rotation for proficient level */}
          <div className="absolute top-0 w-56 h-56 border-[14px] border-primary rounded-full rotate-[145deg] progress-arc"></div>
          <div className="absolute bottom-0 text-center">
            <h1 className="text-dark-text-color dark:text-white tracking-light text-2xl font-bold leading-tight">
              Fluency Level
            </h1>
          </div>
        </div>
        <p className="text-orange-900/50 dark:text-gray-400 text-xs font-medium mt-1">
          Proficient (Level 5 of 6)
        </p>
        <p className="text-dark-text-color dark:text-primary text-xs font-normal leading-normal px-8 text-center mt-3">
          Excellent progress! Sam's reading rhythm is in the{' '}
          <span className="font-bold">top 15%</span> for their age group.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="bg-white dark:bg-white/5 p-3 rounded-xl border border-orange-100 dark:border-white/10 text-center">
          <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">
            Words Per Minute (WPM)
          </p>
          <div className="flex items-end justify-center gap-1">
            <span className="text-xl font-bold">115</span>
            <span className="text-[10px] text-primary mb-1">avg</span>
          </div>
        </div>
        <div className="bg-white dark:bg-white/5 p-3 rounded-xl border border-orange-100 dark:border-white/10 text-center">
          <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">
            Accuracy Rate (%)
          </p>
          <div className="flex items-end justify-center gap-1">
            <span className="text-xl font-bold">98</span>
            <span className="text-[10px] text-primary mb-1">%</span>
          </div>
        </div>
      </div>

      <div className="px-4 py-2 space-y-4">
        <details className="group bg-primary/10 dark:bg-primary/5 rounded-xl border border-primary/20 overflow-hidden">
          <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">info</span>
              <span className="text-sm font-bold text-dark-text-color dark:text-white">
                What this means
              </span>
            </div>
            <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform">
              expand_more
            </span>
          </summary>
          <div className="px-4 pb-4">
            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
              A high fluency level means Sam reads with natural rhythm and appropriate phrasing. This
              allows their brain to focus on <strong>comprehending</strong> the story rather than
              just decoding individual words.
            </p>
          </div>
        </details>

        <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-orange-100 dark:border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary font-bold text-lg">
              check_circle
            </span>
            <h3 className="text-dark-text-color dark:text-white text-md font-bold">Strengths</h3>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-dark-text-color dark:text-white">
                  Smooth Pacing:
                </span>{' '}
                Maintains a consistent and natural reading speed.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-dark-text-color dark:text-white">
                  Expression:
                </span>{' '}
                Uses dynamic tone to reflect character emotions and punctuation.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-orange-100 dark:border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-amber-600 font-bold text-lg">
              trending_up
            </span>
            <h3 className="text-dark-text-color dark:text-white text-md font-bold">
              Areas to Improve
            </h3>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="size-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-dark-text-color dark:text-white">
                  Word Blending:
                </span>{' '}
                Occasionally pauses on complex multi-syllable compound words.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="size-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-dark-text-color dark:text-white">
                  Breath Control:
                </span>{' '}
                Working on phrasing longer sentences without mid-sentence pauses.
              </p>
            </li>
          </ul>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-[#FF9E4D] p-5 rounded-2xl shadow-lg border border-primary/20">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-dark-text-color font-bold text-lg">
                rocket_launch
              </span>
              <h3 className="text-dark-text-color text-md font-extrabold tracking-tight">
                Subscribe to Improve
              </h3>
            </div>
            <p className="text-dark-text-color/80 text-xs font-medium leading-snug mb-4">
              Unlock personalized daily plans. Students see{' '}
              <span className="font-bold underline">35% improvement</span> in 30 days.
            </p>
            <button
              onClick={() => navigate('/plan-selection')}
              className="w-full bg-dark-text-color text-white font-bold py-3 px-4 rounded-xl text-xs shadow-md"
            >
              Get Started for $9.99/mo
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 size-20 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </div>
      <div className="p-4 pt-4 pb-20 text-center">
        <p className="text-[9px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          Assessment Date: October 24, 2023
        </p>
      </div>
    </div>
  );
};

const RecommendationsTabContent: React.FC<TabContentProps> = ({ books }) => {
  return (
    <div id="content-recommendations" className="block">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-dark-text-color dark:text-white text-lg font-bold">
            Recommended Next Steps
          </h3>
          <span className="text-[10px] bg-primary/20 text-primary-700 dark:text-primary px-2 py-0.5 rounded-full font-bold">
            Level 5
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {books.map((book) => (
            <div key={book.id} className="flex flex-col group">
              <div className="relative mb-2">
                <img
                  alt={book.title}
                  className="w-full aspect-[3/4] object-cover rounded-xl shadow-sm"
                  src={book.coverUrl}
                />
                {book.tag && (
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 dark:bg-black/90 backdrop-blur-sm px-2 py-1.5 rounded-lg text-[9px] font-bold text-primary border border-primary/10 shadow-sm">
                    <span className="text-dark-text-color dark:text-white block opacity-60">
                      Why it's for you:
                    </span>
                    <span>{book.tag.label}</span>
                  </div>
                )}
              </div>
              <p className="text-sm font-bold truncate">{book.title}</p>
              <p className="text-[10px] text-gray-500 uppercase font-semibold">
                {book.author}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-4 border-t border-orange-100 dark:border-white/10">
          <h4 className="text-sm font-bold">Curation Controls</h4>
          <button className="w-full border-2 border-orange-100 dark:border-white/10 bg-white dark:bg-white/5 text-dark-text-color dark:text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm hover:bg-orange-50 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-lg">tune</span>
            <span>Customize Preferences</span>
          </button>
          <p className="text-[10px] text-center text-gray-500 dark:text-gray-400">
            Tailor books based on Sam's oral reading performance
          </p>
        </div>
      </div>
      <div className="p-8 pb-32"></div>
    </div>
  );
};

const ReadingReportScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'assessment' | 'recommendations'>('assessment');

  const handleTabChange = (tab: 'assessment' | 'recommendations') => {
    setActiveTab(tab);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full max-w-[430px] mx-auto flex-col bg-background-light dark:bg-background-dark overflow-x-hidden shadow-2xl">
      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between border-b border-orange-100 dark:border-white/10">
        <div
          onClick={() => navigate(-1)}
          className="text-dark-text-color dark:text-white flex size-10 shrink-0 items-center cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </div>
        <h2 className="text-dark-text-color dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Reading Report
        </h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-dark-text-color dark:text-white">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex border-b border-orange-100 dark:border-white/10 bg-white dark:bg-background-dark sticky top-[57px] z-10">
          <label
            htmlFor="tab-assessment"
            className={`flex-1 py-3 text-center text-sm font-medium cursor-pointer border-b-2 transition-all ${activeTab === 'assessment'
              ? 'border-primary text-dark-text-color dark:text-white font-bold'
              : 'border-transparent text-gray-400'
              }`}
            onClick={() => handleTabChange('assessment')}
          >
            Assessment
          </label>
          <label
            htmlFor="tab-recommendations"
            className={`flex-1 py-3 text-center text-sm font-medium cursor-pointer border-b-2 transition-all ${activeTab === 'recommendations'
              ? 'border-primary text-dark-text-color dark:text-white font-bold'
              : 'border-transparent text-gray-400'
              }`}
            onClick={() => handleTabChange('recommendations')}
          >
            Recommendations
          </label>
        </div>

        {activeTab === 'assessment' ? (
          <AssessmentTabContent />
        ) : (
          <RecommendationsTabContent books={DUMMY_RECOMMENDED_BOOKS} />
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto p-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-orange-100 dark:border-white/10 z-20">
        <button
          onClick={() => {
            localStorage.setItem('assessmentCompleted', 'true');
            navigate('/dashboard');
          }}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors"
        >
          <span>Explore App</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default ReadingReportScreen;
