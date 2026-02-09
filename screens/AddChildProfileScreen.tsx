
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AVATAR_URLS } from '../constants';

const AddChildProfileScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_URLS.RUSTY);
  const [childName, setChildName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [grade, setGrade] = useState('Preschool');
  const [readingLanguages, setReadingLanguages] = useState<string[]>(['English']);
  const [gender, setGender] = useState<'boy' | 'girl' | ''>('');

  const avatars = [
    { name: 'Rusty', url: AVATAR_URLS.RUSTY },
    { name: 'Bamboo', url: AVATAR_URLS.BAMBOO },
    { name: 'Leo', url: AVATAR_URLS.LEO },
    { name: 'Hoot', url: AVATAR_URLS.HOOT },
  ];

  const grades = ['Preschool', 'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade'];
  const languages = ['English', 'Spanish', 'French', 'Hindi', 'Tamil', 'Kannada', 'Telugu'];

  const toggleLanguage = (lang: string) => {
    setReadingLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store in local storage
    const storedChildren = localStorage.getItem('childProfiles');
    let childProfiles = [];
    if (storedChildren) {
      childProfiles = JSON.parse(storedChildren);
    }

    // Create new child profile
    const newChild = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: childName,
      avatarUrl: selectedAvatar,
      gender: gender as 'boy' | 'girl',
      // If it's the first child, make it active
      status: childProfiles.length === 0 ? 'active' : 'inactive',
      lastRead: 'Just added'
    };

    childProfiles.push(newChild);
    localStorage.setItem('childProfiles', JSON.stringify(childProfiles));

    console.log('Saved child:', newChild);
    navigate('/start-test'); // Navigate to the next step
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-[430px] mx-auto bg-background-light dark:bg-background-dark text-light-text-color dark:text-white transition-colors duration-300">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-30 border-b border-orange-50 dark:border-white/5">
        <button
          onClick={() => navigate(-1)}
          className="text-light-text-color dark:text-white flex size-12 shrink-0 items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
        </button>
        <h2 className="text-light-text-color dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Add Child Profile
        </h2>
        <button
          onClick={() => navigate('/dashboard')}
          className="text-primary text-sm font-bold px-4 h-12 flex items-center justify-center hover:bg-primary/5 rounded-xl transition-colors"
        >
          Skip
        </button>
      </div>

      <div className="flex flex-col gap-3 p-6">
        <div className="flex gap-6 justify-between items-center">
          <p className="text-light-text-color dark:text-white text-sm font-semibold uppercase tracking-wider">
            Step 1 of 2
          </p>
          <p className="text-light-text-color dark:text-white text-xs font-normal opacity-60">
            50% Complete
          </p>
        </div>
        <div className="rounded-full bg-orange-100 dark:bg-gray-800 h-2 overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: '50%' }}></div>
        </div>
      </div>

      <div className="px-6 pt-4 text-center">
        <h3 className="text-light-text-color dark:text-white tracking-tight text-3xl font-extrabold leading-tight">
          Let's get started!
        </h3>
        <p className="text-light-text-color dark:text-gray-400 text-base font-normal leading-normal mt-2">
          Tell us a bit about your young reader.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-6 pb-24">
        <section>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-light-text-color dark:text-white text-lg font-bold">
              Pick an Avatar
            </h3>
            <span className="text-primary text-sm font-medium cursor-pointer">See all</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-2 px-2">
            {avatars.map((avatar) => (
              <div
                key={avatar.name}
                className="flex flex-col items-center gap-2 shrink-0 cursor-pointer"
                onClick={() => setSelectedAvatar(avatar.url)}
              >
                <div
                  className={`size-20 rounded-full bg-primary/20 p-1 ${selectedAvatar === avatar.url
                    ? 'border-4 border-primary'
                    : 'border-4 border-transparent bg-gray-100 dark:bg-gray-800'
                    }`}
                >
                  <img
                    alt={`${avatar.name} avatar`}
                    className="w-full h-full object-cover rounded-full"
                    src={avatar.url}
                  />
                </div>
                <span
                  className={`text-xs font-bold ${selectedAvatar === avatar.url ? 'text-primary' : 'text-gray-500 opacity-60'
                    }`}
                >
                  {avatar.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-light-text-color dark:text-white text-sm font-bold pl-1" htmlFor="child-name">
              Child's Name
            </label>
            <input
              className="w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-xl p-4 text-base focus:ring-primary focus:border-primary transition-all"
              id="child-name"
              placeholder="e.g. Charlie"
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-light-text-color dark:text-white text-sm font-bold pl-1" htmlFor="date-of-birth">
                Date of Birth
              </label>
              <input
                className="w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-xl p-4 text-base focus:ring-primary focus:border-primary transition-all appearance-none"
                id="date-of-birth"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-light-text-color dark:text-white text-sm font-bold pl-1" htmlFor="grade">
                Grade
              </label>
              <select
                className="w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-xl p-4 text-base focus:ring-primary focus:border-primary transition-all appearance-none"
                id="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              >
                {grades.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-light-text-color dark:text-white text-sm font-bold pl-1">
              Gender
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setGender('boy')}
                className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${gender === 'boy'
                  ? 'border-primary bg-primary/5 text-primary scale-[1.02]'
                  : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-400'
                  }`}
              >
                <div className={`size-12 rounded-full flex items-center justify-center ${gender === 'boy' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
                  <span className="material-symbols-outlined text-3xl">boy</span>
                </div>
                <span className="font-bold">Boy</span>
              </button>
              <button
                type="button"
                onClick={() => setGender('girl')}
                className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${gender === 'girl'
                  ? 'border-primary bg-primary/5 text-primary scale-[1.02]'
                  : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-400'
                  }`}
              >
                <div className={`size-12 rounded-full flex items-center justify-center ${gender === 'girl' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
                  <span className="material-symbols-outlined text-3xl">girl</span>
                </div>
                <span className="font-bold">Girl</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-light-text-color dark:text-white text-sm font-bold pl-1" htmlFor="reading-language">
              Reading Languages
            </label>
            <div className="flex flex-wrap gap-2 pt-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  className={`px-4 py-2.5 text-sm rounded-xl transition-all border ${readingLanguages.includes(lang)
                    ? 'font-bold bg-primary text-white border-primary shadow-md shadow-primary/20 scale-105'
                    : 'font-medium bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-70 hover:opacity-100'
                    }`}
                  onClick={() => toggleLanguage(lang)}
                >
                  <div className="flex items-center gap-2">
                    {lang}
                    {readingLanguages.includes(lang) && (
                      <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-primary/10 dark:bg-primary/5 rounded-xl border border-primary/20">
          <span className="material-symbols-outlined text-primary">info</span>
          <p className="text-xs leading-tight text-light-text-color dark:text-gray-300">
            We use this information to personalize book recommendations and track reading
            milestones.
          </p>
        </div>

        <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto p-6 bg-gradient-to-t from-background-light via-background-light dark:from-background-dark dark:via-background-dark to-transparent">
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-95 transition-transform"
          >
            Next: Literacy Assessment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddChildProfileScreen;
