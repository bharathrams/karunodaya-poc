
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { DUMMY_READING_ORDERS } from '../constants';
import { ReadingOrder } from '../types';

type OrderFilter = 'Active' | 'Completed';

const OrderHistoryScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<OrderFilter>('Active');

  const filteredOrders = DUMMY_READING_ORDERS.filter((order) => {
    // This is a simplified filter. In a real app, 'Active' and 'Completed'
    // would be derived from more complex status logic (e.g., delivered vs returned).
    if (activeFilter === 'Active') {
      return order.status !== 'delivered';
    } else {
      return order.status === 'delivered';
    }
  });

  const getStatusClasses = (status: ReadingOrder['status']) => {
    switch (status) {
      case 'in-transit':
        return 'bg-orange-100 dark:bg-primary/20 text-primary';
      case 'subscription':
        return 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400';
      case 'pending-return':
        return 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400';
      case 'delivered':
        return 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400';
      default:
        return '';
    }
  };

  const getActionButton = (order: ReadingOrder) => {
    switch (order.status) {
      case 'in-transit':
        return (
          <>
            <button className="flex-1 bg-primary text-white text-xs font-bold py-2 rounded-xl">
              Track Order
            </button>
            <button className="px-3 py-2 border border-gray-100 dark:border-white/10 rounded-xl">
              <span className="material-symbols-outlined text-sm block">more_horiz</span>
            </button>
          </>
        );
      case 'pending-return':
        return (
          <button className="flex-1 bg-white dark:bg-white/5 border border-primary text-primary text-xs font-bold py-2 rounded-xl">
            View Instructions
          </button>
        );
      case 'delivered':
        return (
          <button className="flex-1 bg-primary text-white text-xs font-bold py-2 rounded-xl">
            Write Review
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full max-w-[430px] mx-auto flex-col bg-background-light dark:bg-background-dark overflow-x-hidden shadow-2xl">
      <Header
        title="Your Reading Orders"
        showBackButton={false}
        actionIcon="notifications"
        onAction={() => console.log('Notifications clicked')}
        hasBottomBorder={true}
        className="pb-2"
      >
        <div className="flex p-1 bg-gray-100 dark:bg-white/5 rounded-2xl mb-4">
          <button
            className={`flex-1 py-2 text-sm font-bold rounded-xl ${
              activeFilter === 'Active'
                ? 'bg-white dark:bg-white/10 shadow-sm text-primary'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => setActiveFilter('Active')}
          >
            Active
          </button>
          <button
            className={`flex-1 py-2 text-sm font-bold rounded-xl ${
              activeFilter === 'Completed'
                ? 'bg-white dark:bg-white/10 shadow-sm text-primary'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => setActiveFilter('Completed')}
          >
            Completed
          </button>
        </div>
      </Header>

      <main className="flex-1 px-5 py-6 pb-32">
        <div className="flex flex-col gap-5">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white dark:bg-white/5 rounded-2xl p-4 shadow-sm border border-orange-50 dark:border-white/5"
            >
              <div className="flex gap-4">
                <img
                  alt={order.bookTitle}
                  className="w-20 h-28 object-cover rounded-lg shadow-sm"
                  src={order.coverUrl}
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <span
                        className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${getStatusClasses(
                          order.status
                        )}`}
                      >
                        {order.status.replace('-', ' ')}
                      </span>
                      <span className="text-[10px] text-gray-400">Order {order.orderId}</span>
                    </div>
                    <h3 className="font-bold text-base mt-1 line-clamp-1">{order.bookTitle}</h3>
                    <p className="text-xs text-gray-500">
                      {order.status === 'in-transit' || order.status === 'pending-return'
                        ? 'Ordered'
                        : 'Delivered'}
                      : {order.date}
                    </p>
                  </div>
                  {order.details && order.status === 'subscription' && (
                    <div className="mt-3 flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-950/30 px-3 py-1.5 rounded-lg">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span className="text-[10px] font-bold">{order.details}</span>
                    </div>
                  )}
                  <div className={`flex items-center gap-2 ${order.status === 'subscription' ? 'mt-0' : 'mt-4'}`}>
                    {getActionButton(order)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <NavBar activeTab="orders" />
    </div>
  );
};

export default OrderHistoryScreen;
