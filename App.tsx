import React, { useState, useEffect, createContext, useContext, ReactNode, useCallback } from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';

// Import Screens
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import AddChildProfileScreen from './screens/AddChildProfileScreen';
import StartReadingTestScreen from './screens/StartReadingTestScreen';
import OralFluencyTestScreen from './screens/OralFluencyTestScreen';

import ReadingReportScreen from './screens/ReadingReportScreen';
import ParentDashboardScreen from './screens/ParentDashboardScreen';
import BookLibraryScreen from './screens/BookLibraryScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import PlanSelectionScreen from './screens/PlanSelectionScreen';
import ProfileSettingsScreen from './screens/ProfileSettingsScreen';

// Theme Context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto bg-white dark:bg-background-dark shadow-2xl overflow-hidden">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<CreateAccountScreen />} />
            <Route path="/add-child" element={<AddChildProfileScreen />} />
            <Route path="/start-test" element={<StartReadingTestScreen />} />
            <Route path="/oral-test" element={<OralFluencyTestScreen />} />

            <Route path="/report" element={<ReadingReportScreen />} />
            <Route path="/dashboard" element={<ParentDashboardScreen />} />
            <Route path="/library" element={<BookLibraryScreen />} />
            <Route path="/orders" element={<OrderHistoryScreen />} />
            <Route path="/plan-selection" element={<PlanSelectionScreen />} />
            <Route path="/profile" element={<ProfileSettingsScreen />} />
          </Routes>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;