
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AVATAR_URLS } from '../constants';

const StartReadingTestScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto bg-white dark:bg-background-dark shadow-2xl overflow-x-hidden">
      <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-50 dark:border-white/5">
        <button
          aria-label="Go back"
          onClick={() => navigate(-1)}
          className="text-dark-text-color dark:text-white flex size-12 shrink-0 items-center justify-start"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-dark-text-color dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Assessment
        </h2>
        <button
          onClick={() => navigate('/dashboard')}
          className="text-primary text-sm font-bold px-4 h-12 flex items-center justify-center hover:bg-primary/5 rounded-xl transition-colors shrink-0"
        >
          Skip
        </button>
      </div>

      <div className="flex flex-col flex-1 px-6 pb-24">
        <div className="mt-4 @container">
          <div className="relative w-full aspect-square bg-primary/10 dark:bg-primary/5 rounded-3xl overflow-hidden flex items-center justify-center p-8">
            <div
              className="w-full h-full bg-center bg-contain bg-no-repeat"
              data-alt="A friendly cartoon owl mascot wearing glasses and holding a book"
              style={{ backgroundImage: `url('${AVATAR_URLS.OWL_MASCOT}')` }}
            ></div>
            <div className="absolute top-4 right-4 bg-white dark:bg-input-dark-bg p-4 rounded-2xl rounded-tr-none shadow-lg border-2 border-primary/20 max-w-[180px]">
              <p className="text-sm font-medium leading-tight text-[#4A3D34] dark:text-gray-200">
                Hi! Let's go on a reading adventure together!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 mb-6">
          <h1 className="text-dark-text-color dark:text-white text-3xl font-bold leading-tight mb-2">
            Start Reading Test
          </h1>
          <p className="text-brand-gray dark:text-gray-400 text-base font-normal">
            This quick assessment takes about 5-10 minutes. It helps us find the best books for you!
          </p>
        </div>

        <div className="grid grid-cols-[48px_1fr] gap-x-4">
          <div className="flex flex-col items-center">
            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/30">
              <span className="material-symbols-outlined text-2xl">spellcheck</span>
            </div>
            <div className="w-1 bg-[#F5E6DA] dark:bg-gray-700 h-12 grow"></div>
          </div>
          <div className="flex flex-col pb-8">
            <p className="text-dark-text-color dark:text-white text-lg font-semibold leading-snug">
              Word Recognition
            </p>
            <p className="text-brand-gray dark:text-gray-400 text-sm leading-normal">
              Identify fun words as they appear on screen.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/30">
              <span className="material-symbols-outlined text-2xl">menu_book</span>
            </div>
            <div className="w-1 bg-[#F5E6DA] dark:bg-gray-700 h-12 grow"></div>
          </div>
          <div className="flex flex-col pb-8">
            <p className="text-dark-text-color dark:text-white text-lg font-semibold leading-snug">
              Sentence Reading
            </p>
            <p className="text-brand-gray dark:text-gray-400 text-sm leading-normal">
              Read a few short, exciting stories aloud.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/30">
              <span className="material-symbols-outlined text-2xl">emoji_objects</span>
            </div>
            <div className="w-1 bg-transparent h-4"></div>
          </div>
          <div className="flex flex-col">
            <p className="text-dark-text-color dark:text-white text-lg font-semibold leading-snug">
              Comprehension
            </p>
            <p className="text-brand-gray dark:text-gray-400 text-sm leading-normal">
              Answer some quick quiz questions about the story.
            </p>
          </div>
        </div>

        <div className="mt-10 p-4 bg-primary/10 dark:bg-primary/20 border border-primary/30 rounded-xl flex gap-3">
          <span className="material-symbols-outlined text-primary">info</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Parent Tip</p>
            <p className="text-sm text-dark-text-color dark:text-gray-200">
              Find a quiet spot for your child. They'll need to read aloud for some parts of the
              test.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] p-6 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800">
        <button
          onClick={() => navigate('/oral-test')}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          I'm Ready to Start!
          <span className="material-symbols-outlined">play_circle</span>
        </button>
      </div>
    </div>
  );
};

export default StartReadingTestScreen;
