
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { AVATAR_URLS, DUMMY_PERSONALIZED_BOOKS, DUMMY_BOOKS } from '../constants';
import { ChildProfile } from '../types';
const ParentDashboardScreen: React.FC = () => {
  const navigate = useNavigate();
  const [parentName, setParentName] = React.useState('Sarah');
  const [activeChildName, setActiveChildName] = React.useState('Sam');
  const [hasChildren, setHasChildren] = React.useState(true);
  const [assessmentCompleted, setAssessmentCompleted] = React.useState(false);

  React.useEffect(() => {
    const loadData = () => {
      const storedProfile = localStorage.getItem('parentProfile');
      if (storedProfile) {
        const { fullName } = JSON.parse(storedProfile);
        if (fullName) {
          setParentName(fullName.split(' ')[0]);
        }
      }

      const storedChildren = localStorage.getItem('childProfiles');
      if (storedChildren) {
        const childProfiles = JSON.parse(storedChildren);
        setHasChildren(childProfiles.length > 0);
        const activeChild = childProfiles.find((c: any) => c.status === 'active') || childProfiles[0];
        if (activeChild) {
          setActiveChildName(activeChild.name);
        }

        const assessmentStatus = localStorage.getItem('assessmentCompleted');
        setAssessmentCompleted(assessmentStatus === 'true');
      } else {
        setHasChildren(false);
        setAssessmentCompleted(false);
      }
    };

    loadData();

    // Listen for changes from other components (like Profile Settings)
    window.addEventListener('storage', loadData);
    // Also refresh on focus in case it stayed mounted
    window.addEventListener('focus', loadData);

    return () => {
      window.removeEventListener('storage', loadData);
      window.removeEventListener('focus', loadData);
    };
  }, []);

  return (
    <div className="relative flex h-auto min-h-screen w-full max-w-[430px] mx-auto flex-col bg-background-light dark:bg-background-dark overflow-x-hidden shadow-2xl">
      <header className="sticky top-0 z-30 bg-background-light dark:bg-background-dark px-5 py-4 flex items-center justify-between border-b border-orange-50 dark:border-white/5">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary">
            <img
              alt="Child Profile"
              className="w-full h-full object-cover"
              src={AVATAR_URLS.CHILD_READING} // Assuming this is a generic child profile image
            />
          </div>
          <div>
            <h1 className="text-xs text-orange-800/60 dark:text-orange-200/40 font-medium uppercase tracking-wider">
              Parent Dashboard
            </h1>
            <p className="text-lg font-bold">Hello, {parentName}!</p>
          </div>
        </div>
        <button className="size-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm">
          <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
            notifications
          </span>
        </button>
      </header>

      <main className="flex-1 space-y-6 pb-28">
        {!hasChildren && (
          <section className="px-5 mt-4">
            <button
              onClick={() => navigate('/add-child')}
              className="w-full bg-orange-50 dark:bg-primary/5 border border-primary/20 p-4 rounded-2xl flex items-center gap-4 group active:scale-[0.98] transition-all"
            >
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined font-bold">person_add</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-bold text-gray-900 dark:text-white">Add your child</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Track progress & get recommendations</p>
              </div>
              <span className="material-symbols-outlined text-primary opacity-40 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </button>
          </section>
        )}

        {hasChildren && assessmentCompleted && (
          <section className="px-5 mt-4">
            <div className="bg-white dark:bg-white/5 rounded-2xl p-5 shadow-sm border border-orange-100 dark:border-white/10 relative">
              <div className="flex items-start justify-between mb-4 pr-[70px]">
                <div>
                  <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide flex items-center gap-2">
                    <span className="text-primary">{activeChildName}'s</span> Level
                  </h2>
                  <p className="text-2xl font-bold text-primary">Intermediate</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 size-20">
                <svg className="size-full -rotate-90">
                  <circle
                    className="text-gray-100 dark:text-white/10 stroke-current"
                    cx="40" cy="40" fill="transparent" r="37" strokeWidth="6"
                  ></circle>
                  <circle
                    className="text-primary stroke-current"
                    cx="40" cy="40" fill="transparent" r="37"
                    strokeDasharray="232.47"
                    strokeDashoffset="77.49"
                    strokeLinecap="round"
                    strokeWidth="6"
                  ></circle>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                  Lvl 4
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-sm text-primary fill-1">verified</span>
                <span>Assessment completed 2 days ago</span>
              </div>
              <div className="mt-4 pt-4 border-t border-orange-50 dark:border-white/5 flex justify-between items-center">
                <span className="text-xs font-medium text-gray-500">Books read :</span>
                <span className="text-sm font-bold text-primary">12 Books</span>
              </div>
            </div>
          </section>
        )}

        {hasChildren && !assessmentCompleted && (
          <section className="px-5 mt-4">
            <div className="bg-gradient-to-br from-primary/10 to-orange-400/5 dark:from-primary/20 dark:to-transparent p-6 rounded-[32px] border border-primary/20 relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-primary">auto_stories</span>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined font-bold">assignment</span>
                  </div>
                  <h3 className="font-black text-lg tracking-tight">Complete Assessment</h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Finish <span className="text-primary font-bold">{activeChildName}'s</span> reading test to unlock
                  <span className="font-bold"> personalized book recommendations</span> and precise progress tracking.
                </p>

                <button
                  onClick={() => navigate('/start-test')}
                  className="w-full bg-primary text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-all"
                >
                  <span>START ASSESSMENT (5-10 MIN)</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Subscription Upgrade Banner */}
        {/* <section className="px-5">
          <div
            onClick={() => navigate('/plan-selection')}
            className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-4 flex items-center justify-between shadow-lg shadow-orange-500/10 text-white cursor-pointer group active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <span className="material-symbols-outlined font-bold text-white">workspace_premium</span>
              </div>
              <div className="space-y-0.5">
                <h3 className="text-[15px] font-black tracking-wide uppercase">Upgrade to Premium</h3>
                <p className="text-[11px] opacity-80 font-medium leading-tight">Unlock premium and get personalized books for your child</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-1.5 py-1.5 rounded-xl border border-white/20">
              <span className="material-symbols-outlined text-white text-lg">chevron_right</span>
            </div>
          </div>
        </section> */}

        {hasChildren && assessmentCompleted && (
          <section className="px-5">
            <div className="mb-6 flex flex-col gap-1">
              <h2 className="text-xl font-black tracking-tight">
                {`Recommended for ${activeChildName}`}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Expertly picked books for your child's level</p>
            </div>

            <div className="flex overflow-x-auto gap-4 hide-scrollbar -mx-5 px-5 pb-4">
              {DUMMY_BOOKS.filter(b => b.type === 'subscription').map((book) => (
                <div key={book.id} className="flex-shrink-0 w-40 group cursor-pointer">
                  <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all">
                    <img
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={book.coverUrl}
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>

                    {/* Recommendation Badge */}
                    <div className="absolute top-2 left-2 bg-primary text-white text-[8px] font-black px-2 py-1 rounded-lg uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[10px]">recommend</span>
                      Best Match
                    </div>

                    <div className="absolute top-2 right-2 size-7 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-primary text-sm font-bold">lock</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-xs text-gray-900 dark:text-white line-clamp-1">{book.title}</h3>
                  <p className="text-[10px] text-gray-500 mt-0.5">{book.author}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/plan-selection')}
              className="w-full mt-4 bg-primary text-white rounded-2xl p-5 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">workspace_premium</span>
                </div>
                <div className="text-left">
                  <p className="text-[15px] font-black tracking-tight leading-none mb-1 text-white">Subscribe to Unlock All</p>
                  <p className="text-[11px] text-white/80 font-medium">Starting at just ₹199/month</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-white group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </section>
        )}

        <section className="px-5">
          <div className="flex items-center gap-6 py-2 border-b border-orange-50 dark:border-white/5 mb-6 overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-2 shrink-0">
              <span className="material-symbols-outlined text-green-500 text-lg">verified_user</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">100% Child Safe</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="material-symbols-outlined text-blue-500 text-lg">auto_stories</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Curated Content</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="material-symbols-outlined text-purple-500 text-lg">workspace_premium</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Premium Quality</span>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-black tracking-tight">
              {hasChildren ? `Curated for ${activeChildName}` : 'Explore Fresh Arrivals'}
            </h2>
            <button className="text-primary text-sm font-bold flex items-center gap-1">
              See All
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {DUMMY_PERSONALIZED_BOOKS.map((book) => (
              <div key={book.id} className="flex flex-col group cursor-pointer">
                <div className="relative mb-3 overflow-hidden rounded-2xl">
                  <img
                    alt={book.title}
                    className="w-full aspect-[3/4] object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                    src={book.coverUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {book.tag && (
                    <div className="absolute top-2 left-2 bg-white/95 dark:bg-gray-900/90 backdrop-blur px-2.5 py-1 rounded-lg border border-primary/10 shadow-sm">
                      <p className="text-[10px] font-bold text-primary flex items-center gap-1.5 uppercase">
                        <span className="material-symbols-outlined text-[14px]">
                          {book.tag.icon}
                        </span>
                        {book.tag.label}
                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">{book.title}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-[11px] text-gray-500 flex items-center gap-1">
                      <span className="size-1 rounded-full bg-gray-300"></span>
                      {book.author}
                    </p>
                    {book.price && (
                      <span className="text-xs font-black text-primary">₹{book.price}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 pb-4">
          <div className="bg-gradient-to-br from-primary/5 to-orange-100/30 dark:from-primary/10 dark:to-transparent p-6 rounded-[32px] border border-primary/10">
            <h3 className="font-bold text-base mb-2">Want a Custom List?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Update your preferences to get books tailored specifically to your child's interests.
            </p>
            <button className="flex items-center gap-2 text-primary font-bold text-sm">
              <span className="material-symbols-outlined">tune</span>
              <span>Update Preferences</span>
            </button>
          </div>
        </section>
      </main>

      <NavBar activeTab="home" />
    </div>
  );
};

export default ParentDashboardScreen;
