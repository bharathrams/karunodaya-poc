
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AVATAR_URLS, DUMMY_ORAL_PASSAGES } from '../constants';

const OralFluencyTestScreen: React.FC = () => {
  const navigate = useNavigate();
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [progress, setProgress] = useState(3); // Starting at 3/8 as per screenshot
  const [isRecording, setIsRecording] = useState(false);

  const totalPassages = DUMMY_ORAL_PASSAGES.length;
  const totalSteps = 8; // Max steps for the progress bar

  const currentPassage = DUMMY_ORAL_PASSAGES[currentPassageIndex];

  // Placeholder for microphone logic
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        // Here you would send the audioChunks to a server for processing
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        console.log('Recording stopped, audio blob:', audioBlob);
        // For now, just advance to the next step
        if (currentPassageIndex < totalPassages - 1) {
          setCurrentPassageIndex((prev) => prev + 1);
          setProgress((prev) => Math.min(prev + 1, totalSteps));
        } else {
          navigate('/report'); // Or wherever the next assessment step is
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      console.log('Recording started...');
    } catch (err) {
      console.error('Error accessing microphone:', err);
      // Handle error, e.g., show a message to the user
    }
  }, [currentPassageIndex, totalPassages, totalSteps, navigate]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      console.log('Recording stopped...');
    }
  }, []);

  const handleMicButtonClick = useCallback(() => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }, [isRecording, startRecording, stopRecording]);

  useEffect(() => {
    // Clean up media recorder on unmount
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
        mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  const progressBarWidth = `${(progress / totalSteps) * 100}%`;

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto bg-white dark:bg-orange-dark-bg shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-10 pb-4 sticky top-0 z-20 bg-white/90 dark:bg-orange-dark-bg/90 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2">
          <button
            aria-label="Exit assessment"
            onClick={() => navigate('/start-test')} // Go back to assessment start
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <div className="flex-1 px-8">
            <div className="h-2 w-full bg-orange-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: progressBarWidth }}
              ></div>
            </div>
          </div>
          <div className="text-xs font-bold text-primary/60">
            {progress}/{totalSteps}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-8 relative">
        <div className="flex items-start gap-4 mt-4 mb-12">
          <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-primary/20 relative">
            <div
              className="w-full h-full bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url('${AVATAR_URLS.OWL_MASCOT}')` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary/40 text-4xl" style={{ fontVariationSettings: `'wght' 200` }}>
                headset
              </span>
            </div>
          </div>
          <div className="bg-primary/5 dark:bg-orange-text-dark p-4 rounded-3xl rounded-tl-none border border-orange-100 dark:border-gray-800 relative shadow-sm">
            <p className="text-sm font-semibold leading-tight text-orange-900 dark:text-orange-100">
              Read this out loud for me!
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-md mx-auto text-center">
            <p className="font-serif-kid text-[28px] leading-[1.6] text-gray-800 dark:text-gray-100 font-medium">
              {currentPassage.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>

        <div className="pb-16 pt-8 flex flex-col items-center gap-4">
          <button
            onClick={handleMicButtonClick}
            className={`size-24 rounded-full bg-primary flex items-center justify-center text-white active:scale-90 transition-transform cursor-pointer ${isRecording ? 'mic-glow animate-pulse' : ''
              }`}
          >
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: `'FILL' 1` }}>
              mic
            </span>
          </button>
          <p className="text-orange-500 font-bold text-sm tracking-widest uppercase">
            {isRecording ? 'Recording...' : 'Tap to Record'}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 text-center bg-orange-50/50 dark:bg-gray-900/30">
        <p className="text-xs font-medium text-orange-800/40 dark:text-gray-500 uppercase tracking-widest">
          Oral Fluency Assessment
        </p>
      </div>
    </div>
  );
};

export default OralFluencyTestScreen;
