
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
  activeTab: 'home' | 'library' | 'orders' | 'profile';
}

const NavBar: React.FC<NavBarProps> = ({ activeTab }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const getButtonClass = (tabName: 'home' | 'library' | 'orders' | 'profile') => {
    return `flex flex-col items-center gap-1 ${
      activeTab === tabName ? 'text-primary' : 'text-gray-400'
    }`;
  };

  const getIconClass = (tabName: 'home' | 'library' | 'orders' | 'profile') => {
    return `material-symbols-outlined ${activeTab === tabName ? 'fill-1' : ''}`;
  };

  const getTextClass = (tabName: 'home' | 'library' | 'orders' | 'profile') => {
    return `text-[10px] ${activeTab === tabName ? 'font-bold' : 'font-medium'}`;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-orange-100 dark:border-white/10 px-8 py-3 flex justify-between items-center z-30">
      <button className={getButtonClass('home')} onClick={() => handleNavigation('/dashboard')}>
        <span className={getIconClass('home')}>home</span>
        <span className={getTextClass('home')}>Home</span>
      </button>
      <button className={getButtonClass('library')} onClick={() => handleNavigation('/library')}>
        <span className={getIconClass('library')}>library_books</span>
        <span className={getTextClass('library')}>Books</span>
      </button>
      <button className={getButtonClass('orders')} onClick={() => handleNavigation('/orders')}>
        <span className={getIconClass('orders')}>shopping_cart</span>
        <span className={getTextClass('orders')}>Orders</span>
      </button>
      <button className={getButtonClass('profile')} onClick={() => handleNavigation('/profile')}>
        <span className={getIconClass('profile')}>person</span>
        <span className={getTextClass('profile')}>Profile</span>
      </button>
    </nav>
  );
};

export default NavBar;
