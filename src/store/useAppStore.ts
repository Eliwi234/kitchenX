import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  name: string;
  email: string;
}

export interface Order {
  id: string;
  customer: string;
  chef: string;
  status: "Delivered" | "Preparing" | "Pending";
  amount: string;
  date: string;
}

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  orders: Order[];
  updateOrderStatus: (id: string, status: Order["status"]) => void;
  deleteOrder: (id: string) => void;
  addMockOrder: (order: Order) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  language: "en" | "ar";
  toggleLanguage: () => void;
}

const initialOrders: Order[] = [
  { id: "ORD-9302", customer: "Ahmed", chef: "Lana's Kitchen", status: "Delivered", amount: "$42.50", date: "10 mins ago" },
  { id: "ORD-9300", customer: "Omar", chef: "Ahmed's Grill", status: "Pending", amount: "$65.00", date: "1 hour ago" },
  { id: "ORD-9299", customer: "Lana", chef: "Sweet Treats", status: "Delivered", amount: "$22.00", date: "2 hours ago" },
];

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      orders: initialOrders,
      updateOrderStatus: (id, status) => set((state) => ({
        orders: state.orders.map(o => o.id === id ? { ...o, status } : o)
      })),
      deleteOrder: (id) => set((state) => ({
        orders: state.orders.filter(o => o.id !== id)
      })),
      addMockOrder: (order) => set((state) => ({
        orders: [order, ...state.orders]
      })),
      theme: "light",
      toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
      language: "en",
      toggleLanguage: () => set((state) => ({ language: state.language === "en" ? "ar" : "en" })),
    }),
    { name: "kitchenx-storage" }
  )
);
