
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { AVATAR_URLS, DUMMY_CHILD_PROFILES } from '../constants';
import { ChildProfile } from '../types';

const ProfileSettingsScreen: React.FC = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = React.useState({
    fullName: 'Sarah Mitchell',
    email: 'sarah.m@example.com'
  });

  React.useEffect(() => {
    const storedProfile = localStorage.getItem('parentProfile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const [childProfiles, setChildProfiles] = React.useState<ChildProfile[]>([]);

  React.useEffect(() => {
    const storedChildren = localStorage.getItem('childProfiles');
    if (storedChildren) {
      let parsedChildren = JSON.parse(storedChildren);

      // If none are active or if only one exists, make sure it's active
      const hasActive = parsedChildren.some((c: ChildProfile) => c.status === 'active');
      if (parsedChildren.length > 0 && !hasActive) {
        parsedChildren[0].status = 'active';
        localStorage.setItem('childProfiles', JSON.stringify(parsedChildren));
      } else if (parsedChildren.length === 1) {
        parsedChildren[0].status = 'active';
        localStorage.setItem('childProfiles', JSON.stringify(parsedChildren));
      }

      setChildProfiles(parsedChildren);
    }
  }, []);

  const handleSetActive = (childId: string) => {
    setChildProfiles((prevProfiles) => {
      const updated = prevProfiles.map(child => ({
        ...child,
        status: (child.id === childId ? 'active' : 'inactive') as 'active' | 'inactive'
      }));
      localStorage.setItem('childProfiles', JSON.stringify(updated));
      // Manually trigger storage event for the same window to react
      window.dispatchEvent(new Event('storage'));
      return updated;
    });
  };

  const handleDeleteStudent = (e: React.MouseEvent, childId: string) => {
    e.stopPropagation(); // Prevent card click from triggering set active
    if (window.confirm('Are you sure you want to delete this student profile?')) {
      const updated = childProfiles.filter(child => child.id !== childId);

      // If we deleted the active student, make the first remaining student active
      if (updated.length > 0 && !updated.some(c => c.status === 'active')) {
        updated[0].status = 'active';
      }

      setChildProfiles(updated);
      localStorage.setItem('childProfiles', JSON.stringify(updated));
      window.dispatchEvent(new Event('storage'));
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full max-w-[430px] mx-auto flex-col bg-background-light dark:bg-background-dark overflow-x-hidden shadow-2xl">
      <Header
        title="Profile &amp; Settings"
        showBackButton={false}
        actionIcon="settings"
        onAction={() => console.log('Settings clicked')}
        hasBottomBorder={true}
        className="pb-4"
      />

      <main className="flex-1 px-5 py-6 pb-32">
        <div className="flex flex-col gap-8">
          <section>
            <div className="bg-white dark:bg-white/5 rounded-3xl p-5 shadow-sm border border-orange-50 dark:border-white/5">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    alt="Parent Portrait"
                    className="size-16 rounded-2xl object-cover ring-2 ring-orange-100 dark:ring-white/10"
                    src={AVATAR_URLS.PARENT_PROFILE}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-primary size-5 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[10px] text-white">
                      verified
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold">{profile.fullName}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {profile.email}
                  </p>
                </div>
                <button className="p-2 rounded-xl bg-orange-50 dark:bg-white/5 text-primary">
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                Students
              </h3>
              {childProfiles.length > 0 && (
                <span className="text-xs font-medium text-gray-400">
                  {childProfiles.length} active profiles
                </span>
              )}
            </div>
            <div className="flex flex-col gap-3">
              {childProfiles.length > 0 ? (
                <>
                  {childProfiles.map((child: ChildProfile) => (
                    <div
                      key={child.id}
                      className={`bg-white dark:bg-white/5 rounded-2xl p-4 shadow-sm relative overflow-hidden ${child.status === 'active'
                        ? 'border-2 border-primary'
                        : 'border border-orange-50 dark:border-white/5'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`size-12 rounded-full flex items-center justify-center ${child.status === 'active'
                            ? 'bg-orange-100 dark:bg-orange-900/30'
                            : 'bg-gray-100 dark:bg-white/5'
                            }`}
                        >
                          <span
                            className={`material-symbols-outlined ${child.status === 'active' ? 'text-primary' : 'text-gray-400'
                              }`}
                          >
                            {child.status === 'active' ? 'child_care' : 'face'}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-base">{child.name}</h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            {child.status === 'active' ? (
                              <>
                                <span className="size-2 rounded-full bg-green-500"></span>
                                <span className="text-xs font-medium text-gray-500">
                                  Currently Reading
                                </span>
                              </>
                            ) : (
                              <p className="text-xs text-gray-500">Last read {child.lastRead}</p>
                            )}
                          </div>
                        </div>
                        {child.status === 'active' ? (
                          <div className="flex items-center gap-2">
                            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                              Active
                            </div>
                            <button
                              onClick={(e) => handleDeleteStudent(e, child.id)}
                              className="p-1 text-red-400 hover:text-red-600 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleSetActive(child.id)}
                              className="text-[11px] font-bold text-gray-500 bg-gray-50 dark:bg-white/5 px-3 py-2 rounded-xl border border-gray-100 dark:border-white/5"
                            >
                              Set Active
                            </button>
                            <button
                              onClick={(e) => handleDeleteStudent(e, child.id)}
                              className="p-1 text-red-400 hover:text-red-600 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => navigate('/add-child')}
                    className="mt-2 w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-dashed border-primary/30 text-primary font-bold bg-orange-50/30 dark:bg-primary/5"
                  >
                    <span className="material-symbols-outlined">add_circle</span>
                    <span>Add Another Student</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('/add-child')}
                  className="w-full flex flex-col items-center justify-center gap-3 py-10 rounded-3xl border-2 border-dashed border-primary/30 text-primary bg-orange-50/30 dark:bg-primary/5 hover:bg-orange-50 dark:hover:bg-primary/10 transition-colors group"
                >
                  <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl">person_add</span>
                  </div>
                  <div className="text-center px-6">
                    <p className="font-bold text-lg">Add Your First Student</p>
                    <p className="text-sm opacity-60 mt-1">Start tracking your child's reading progress by creating their profile.</p>
                  </div>
                </button>
              )}
            </div>
          </section>

          <section>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
              Account Settings
            </h3>
            <div className="bg-white dark:bg-white/5 rounded-3xl overflow-hidden shadow-sm border border-orange-50 dark:border-white/5">
              <button
                onClick={() => navigate('/plan-selection')}
                className="w-full flex items-center gap-4 p-4 hover:bg-orange-50/30 dark:hover:bg-white/5 transition-colors"
              >
                <div className="size-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-500 text-xl">
                    autorenew
                  </span>
                </div>
                <span className="flex-1 text-left font-medium text-sm">Manage Subscription</span>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </button>
              <div className="h-px bg-orange-50 dark:bg-white/5 mx-4"></div>
              <button className="w-full flex items-center gap-4 p-4 hover:bg-orange-50/30 dark:hover:bg-white/5 transition-colors">
                <div className="size-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-purple-500 text-xl">
                    payments
                  </span>
                </div>
                <span className="flex-1 text-left font-medium text-sm">Payment Methods</span>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </button>
              <div className="h-px bg-orange-50 dark:bg-white/5 mx-4"></div>
              <button className="w-full flex items-center gap-4 p-4 hover:bg-orange-50/30 dark:hover:bg-white/5 transition-colors">
                <div className="size-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-amber-500 text-xl">
                    notifications_active
                  </span>
                </div>
                <span className="flex-1 text-left font-medium text-sm">
                  Notification Preferences
                </span>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </button>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-white dark:bg-white/5 border border-orange-50 dark:border-white/5 text-sm font-semibold">
              <span className="material-symbols-outlined text-primary text-xl">help</span>
              <span>Help &amp; Support</span>
            </button>
            <button
              onClick={() => navigate('/login')} // Simulate logout by going to login screen
              className="w-full flex items-center justify-center gap-2 py-4 text-red-500 font-bold text-sm"
            >
              <span className="material-symbols-outlined text-xl">logout</span>
              <span>Logout Account</span>
            </button>
            <div className="text-center mt-4">
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                Version 2.4.0 (Build 128)
              </p>
            </div>
          </section>
        </div>
      </main>

      <NavBar activeTab="profile" />
    </div>
  );
};

export default ProfileSettingsScreen;
