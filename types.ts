
export interface ChildProfile {
  id: string;
  name: string;
  avatarUrl: string;
  status: 'active' | 'inactive';
  lastRead?: string;
  gender?: 'boy' | 'girl';
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  type: 'owned' | 'subscription';
  tag?: {
    label: string;
    color: string;
    icon: string;
  };
  price?: number;
  stock?: number;
}

export interface ReadingOrder {
  id: string;
  bookTitle: string;
  coverUrl: string;
  status: 'in-transit' | 'subscription' | 'pending-return' | 'delivered';
  orderId: string;
  date: string; // e.g., "Oct 24, 2023"
  details?: string; // e.g., "Return by: Nov 12 (5 days left)"
}

