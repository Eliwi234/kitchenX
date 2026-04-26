import type { Order } from "../store/useOrderStore";

export const generateMockOrder = (): Order => {
  return {
    id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    customer: ["Yousef", "Ali", "Nour", "Maya", "Khaled"][Math.floor(Math.random() * 5)],
    chef: ["Ahmed's Grill", "Lana's Kitchen", "Sweet Treats", "Mona's Bakery"][Math.floor(Math.random() * 4)],
    status: "Pending",
    amount: `$${(20 + Math.random() * 50).toFixed(2)}`,
    date: "Just now",
  };
};
