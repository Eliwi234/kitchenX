import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Order {
  id: string;
  customer: string;
  chef: string;
  status: "Delivered" | "Preparing" | "Pending";
  amount: string;
  date: string;
}

interface OrderState {
  orders: Order[];
  updateOrderStatus: (id: string, status: Order["status"]) => void;
  deleteOrder: (id: string) => void;
  addMockOrder: (order: Order) => void;
}

const initialOrders: Order[] = [
  { id: "ORD-9302", customer: "Ahmed", chef: "Lana's Kitchen", status: "Delivered", amount: "$42.50", date: "10 mins ago" },
  { id: "ORD-9300", customer: "Omar", chef: "Ahmed's Grill", status: "Pending", amount: "$65.00", date: "1 hour ago" },
  { id: "ORD-9299", customer: "Lana", chef: "Sweet Treats", status: "Delivered", amount: "$22.00", date: "2 hours ago" },
];

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
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
    }),
    { name: "kitchenx-order-storage" }
  )
);
