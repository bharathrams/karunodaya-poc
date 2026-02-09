
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
  actionIcon?: string;
  onAction?: () => void;
  backButtonPath?: string;
  hasBottomBorder?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  onBack,
  actionIcon,
  onAction,
  backButtonPath,
  hasBottomBorder = true,
  className = '',
  children,
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else if (backButtonPath) {
      navigate(backButtonPath);
    } else {
      navigate(-1);
    }
  };

  const headerBorderClass = hasBottomBorder ? 'border-b border-orange-50 dark:border-white/5' : '';

  return (
    <header
      className={`sticky top-0 z-30 bg-background-light dark:bg-background-dark px-5 pt-6 pb-2 flex flex-col gap-4 ${headerBorderClass} ${className}`}
    >
      <div className="flex items-center gap-3 w-full">
        {showBackButton ? (
          <button
            aria-label="Go back"
            onClick={handleBackClick}
            className="text-dark-text-color dark:text-white flex size-10 shrink-0 items-center justify-start rounded-full hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
          </button>
        ) : (
          <div className="w-10" />
        )}

        <h1 className="text-dark-text-color dark:text-white text-2xl font-bold flex-1 text-center pr-4">
          {title}
        </h1>

        {actionIcon && onAction ? (
          <button
            onClick={onAction}
            className="size-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm"
          >
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
              {actionIcon}
            </span>
          </button>
        ) : (
          <div className="w-10" />
        )}
      </div>
      {children}
    </header>
  );
};

export default Header;
