import { Check, Clock, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../../../store/useAppStore";

const statusStyles: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  Preparing: "bg-primary-light text-primary-dark",
  Pending: "bg-yellow-100 text-yellow-700",
};

export function ActivityTable() {
  const { orders, updateOrderStatus, deleteOrder, addMockOrder } = useAppStore();
  const { t } = useTranslation();

  const handleSimulateNewOrder = () => {
    addMockOrder({
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: ["Yousef", "Ali", "Nour", "Maya", "Khaled"][Math.floor(Math.random() * 5)],
      chef: ["Ahmed's Grill", "Lana's Kitchen", "Sweet Treats", "Mona's Bakery"][Math.floor(Math.random() * 4)],
      status: "Pending",
      amount: `$${(20 + Math.random() * 50).toFixed(2)}`,
      date: "Just now",
    });
  };

  return (
    <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
      <div className="px-6 py-5 border-b border-border flex justify-between items-center">
        <h2 className="text-lg font-semibold text-text-primary">{t("recent_order_activity")}</h2>
        <div className="flex gap-4">
          <button 
            onClick={handleSimulateNewOrder}
            className="text-sm font-medium bg-background text-text-primary px-3 py-1.5 rounded-lg hover:opacity-80 border border-border transition-all"
          >
            {t("simulate_order")}
          </button>
          <button className="text-sm font-medium text-primary hover:opacity-80 transition-colors pt-1.5">{t("view_all")}</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-start border-collapse">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">{t("order_id")}</th>
              <th className="px-6 py-4 font-medium">{t("customer")}</th>
              <th className="px-6 py-4 font-medium">{t("chef")}</th>
              <th className="px-6 py-4 font-medium">{t("status")}</th>
              <th className="px-6 py-4 font-medium">{t("amount")}</th>
              <th className="px-6 py-4 font-medium">{t("date")}</th>
              <th className="px-6 py-4 font-medium text-end">{t("actions")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {orders.map((row) => (
              <tr key={row.id} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 font-medium text-text-primary">{row.id}</td>
                <td className="px-6 py-4 text-text-primary">{row.customer}</td>
                <td className="px-6 py-4 text-text-primary">{row.chef}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[row.status]}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-text-primary">{row.amount}</td>
                <td className="px-6 py-4 text-text-secondary">{row.date}</td>
                <td className="px-6 py-4 text-end">
                  <div className="flex justify-end gap-2">
                    {row.status === "Pending" && (
                      <button 
                        onClick={() => updateOrderStatus(row.id, "Preparing")}
                        className="p-1.5 text-primary hover:bg-primary-light rounded-lg transition-colors border border-transparent hover:border-primary-light"
                        title="Mark as Preparing"
                      >
                        <Clock size={16} />
                      </button>
                    )}
                    {row.status === "Preparing" && (
                      <button 
                        onClick={() => updateOrderStatus(row.id, "Delivered")}
                        className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors border border-transparent hover:border-green-200"
                        title="Mark as Delivered"
                      >
                        <Check size={16} />
                      </button>
                    )}
                    <button 
                      onClick={() => deleteOrder(row.id)}
                      className="p-1.5 text-text-secondary hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-200"
                      title="Delete Order"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-text-secondary">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <p>{t("no_orders")}</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
