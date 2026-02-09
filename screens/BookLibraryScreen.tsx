
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { DUMMY_BOOKS } from '../constants';
import { Book } from '../types';

type FilterType = 'All' | 'Subscription' | 'Purchased' | 'Adventure' | 'Fantasy';

const BookLibraryScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = DUMMY_BOOKS.filter((book) => {
    const matchesFilter =
      activeFilter === 'All' ||
      (activeFilter === 'Subscription' && book.type === 'subscription') ||
      (activeFilter === 'Purchased' && book.type === 'owned'); // 'owned' corresponds to 'Purchased'

    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="relative flex h-auto min-h-screen w-full max-w-[430px] mx-auto flex-col bg-background-light dark:bg-background-dark overflow-x-hidden shadow-2xl">
      <Header
        title="Your Book Library"
        showBackButton={false}
        actionIcon="notifications"
        onAction={() => console.log('Notifications clicked')}
        hasBottomBorder={true}
        className="pb-2"
      >
        <div className="relative mb-4">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">
            search
          </span>
          <input
            className="w-full bg-white dark:bg-white/5 border-none rounded-full py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 shadow-sm transition-all"
            placeholder="Search for books, authors..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex overflow-x-auto gap-2 hide-scrollbar pb-2">
          {(['All', 'Subscription', 'Purchased', 'Adventure', 'Fantasy'] as FilterType[]).map(
            (filter) => (
              <button
                key={filter}
                className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap ${activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-orange-100 dark:border-white/10'
                  }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            )
          )}
        </div>
      </Header>

      <main className="flex-1 px-5 py-6 pb-32">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {filteredBooks.map((book) => (
            <div key={book.id} className="flex flex-col group">
              <div className="relative mb-3 group">
                <img
                  alt={book.title}
                  className="w-full aspect-[3/4] object-cover rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300"
                  src={book.coverUrl}
                />
                <div
                  className={`absolute top-2 right-2 text-white text-[9px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider shadow-sm ${book.type === 'owned' ? 'bg-orange-500' : 'bg-blue-500'
                    }`}
                >
                  {book.type === 'owned' ? 'Owned' : 'Subscription'}
                </div>
                {book.stock !== undefined && (
                  <div className={`absolute bottom-2 left-2 px-2 py-1 rounded-lg text-[9px] font-bold uppercase backdrop-blur-md shadow-sm border ${book.stock === 0
                      ? 'bg-red-500/90 text-white border-red-400'
                      : book.stock < 5
                        ? 'bg-amber-500/90 text-white border-amber-400'
                        : 'bg-green-500/90 text-white border-green-400'
                    }`}>
                    {book.stock === 0 ? 'Out of Stock' : book.stock < 5 ? `Only ${book.stock} Left` : 'In Stock'}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-gray-500 truncate max-w-[60%]">{book.author}</p>
                  {book.price !== undefined && (
                    <span className="text-sm font-black text-primary">₹{book.price}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <NavBar activeTab="library" />
    </div>
  );
};

export default BookLibraryScreen;
