import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AVATAR_URLS, DUMMY_EXPRESSION_TEST_DATA } from '../constants';
import { Feeling } from '../types';

const ExpressionPunctuationTestScreen: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(8); // Starting at 8/12 as per screenshot
  const [selectedFeeling, setSelectedFeeling] = useState<Feeling | null>(null);

  const totalQuestions = DUMMY_EXPRESSION_TEST_DATA.length;
  const totalSteps = 12; // Max steps for the progress bar

  // Defensive check: Ensure currentTestData can be safely accessed
  if (totalQuestions === 0 || currentQuestionIndex < 0 || currentQuestionIndex >= totalQuestions) {
    console.error("Attempted to render ExpressionPunctuationTestScreen with invalid question index or empty data.", { currentQuestionIndex, totalQuestions });
    alert("An error occurred loading the expression test. Returning to start screen.");
    navigate('/start-tcurrentTestDataest'); // Fallback to start test or an error screen
    return null; // Don't render anything if data is invalid
  }

  const  = DUMMY_EXPRESSION_TEST_DATA[currentQuestionIndex];

  const handleFeelingSelect = (feeling: Feeling) => {
    setSelectedFeeling(feeling);
    // In a real app, this would involve processing the recording and checking the selection
    // For now, simulate advancing to the next step
    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setProgress((prev) => Math.min(prev + 1, totalSteps));
        setSelectedFeeling(null); // Reset selection for the next question
      } else {
        navigate('/report'); // Navigate to the reading report after all questions
      }
    }, 500); // Small delay to show selection
  };

  const progressBarWidth = `${(progress / totalSteps) * 100}%`;

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto bg-light-gray-background dark:bg-orange-dark-bg text-light-text-color dark:text-white transition-colors duration-200">
      {/* Header */}
      <div className="px-6 pt-10 pb-4 sticky top-0 z-20 bg-white/90 dark:bg-orange-dark-bg/90 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <button
            aria-label="Exit assessment"
            onClick={() => navigate('/oral-test')} // Go back to previous test or assessment start
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <div className="flex-1 px-8">
            <div className="h-3 w-full bg-orange-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: progressBarWidth }}
              ></div>
            </div>
          </div>
          <div className="text-sm font-bold text-primary">
            {progress}/{totalSteps}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 relative">
        <div className="flex items-start gap-3 mt-2">
          <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-primary/20">
            <div
              className="w-full h-full bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url('${AVATAR_URLS.OWL_MASCOT}')` }}
            ></div>
          </div>
          <div className="bg-white dark:bg-orange-text-dark p-3 rounded-2xl rounded-tl-none shadow-sm border border-orange-100 dark:border-gray-800 relative">
            <p className="text-sm font-medium leading-tight">{currentTestData.question}</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center py-6">
          <div className="flex gap-4 mb-8">
            <div
              className={`flex flex-col items-center gap-1 cursor-pointer ${selectedFeeling === Feeling.HAPPY ? 'scale-105' : ''
                } transition-transform`}
              onClick={() => handleFeelingSelect(Feeling.HAPPY)}
            >
              <div className="size-14 rounded-2xl bg-yellow-100 flex items-center justify-center border-2 border-yellow-200 shadow-sm">
                <span className="material-symbols-outlined text-3xl text-yellow-600" style={{ fontVariationSettings: `'FILL' 1` }}>
                  sentiment_very_satisfied
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase text-yellow-700">Happy</span>
            </div>
            <div
              className={`flex flex-col items-center gap-1 cursor-pointer ${selectedFeeling === Feeling.SURPRISED ? 'scale-105' : ''
                } transition-transform`}
              onClick={() => handleFeelingSelect(Feeling.SURPRISED)}
            >
              <div className="size-14 rounded-2xl bg-orange-100 flex items-center justify-center border-2 border-orange-200 shadow-sm">
                <span className="material-symbols-outlined text-3xl text-orange-600" style={{ fontVariationSettings: `'FILL' 1` }}>
                  wb_incandescent
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase text-orange-700">Surprised</span>
            </div>
            <div
              className={`flex flex-col items-center gap-1 cursor-pointer ${selectedFeeling === Feeling.SERIOUS ? 'scale-105' : ''
                } transition-transform`}
              onClick={() => handleFeelingSelect(Feeling.SERIOUS)}
            >
              <div className="size-14 rounded-2xl bg-gray-100 flex items-center justify-center border-2 border-gray-200 shadow-sm">
                <span className="material-symbols-outlined text-3xl text-gray-600" style={{ fontVariationSettings: `'FILL' 1` }}>
                  sentiment_neutral
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase text-gray-600">Serious</span>
            </div>
          </div>
          <div className="text-center bg-orange-50/50 dark:bg-orange-900/10 p-8 rounded-[2.5rem] border-2 border-dashed border-primary/20">
            <h1
              className="text-4xl font-extrabold leading-relaxed text-light-text-color dark:text-white"
              dangerouslySetInnerHTML={{ __html: currentTestData.textToRead }}
            ></h1>
          </div>
        </div>

        <div className="pb-12 pt-6 flex flex-col items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-md"></div>
            <button className="relative size-24 rounded-full bg-primary flex flex-col items-center justify-center text-white shadow-[0_10px_30px_rgba(255,140,0,0.4)] active:scale-95 transition-all">
              <span className="material-symbols-outlined text-4xl mb-1" style={{ fontVariationSettings: `'FILL' 1` }}>
                mic
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Tap to Act</span>
            </button>
          </div>
          <div className="mt-8 px-6 py-3 bg-soft-orange dark:bg-gray-800 rounded-2xl flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary"></span>
            <p className="text-sm font-medium text-orange-800 dark:text-gray-300">
              Acting out the reading helps you learn!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 text-center bg-orange-50 dark:bg-gray-900/50 border-t border-orange-100 dark:border-gray-800">
        <p className="text-xs font-bold text-orange-800/40 dark:text-gray-500 uppercase tracking-widest">
          Expression &amp; Punctuation Test
        </p>
      </div>
    </div>
  );
};

export default ExpressionPunctuationTestScreen;