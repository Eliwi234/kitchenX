import { ShoppingCart } from "lucide-react";

export function CustomersCartsPage() {
  const mockData = [
    { customer: "Sarah Connor", items: 3, total: "125.00 AED", lastUpdated: "10 mins ago", status: "Active" },
    { customer: "John Doe", items: 1, total: "45.00 AED", lastUpdated: "2 days ago", status: "Abandoned" },
    { customer: "Jane Smith", items: 5, total: "310.00 AED", lastUpdated: "Just now", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">Active Carts</h1>
        <p className="text-text-secondary mt-1">Monitor user carts and abandoned checkouts.</p>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Customer Name</th>
              <th className="px-6 py-4 font-medium">Items in Cart</th>
              <th className="px-6 py-4 font-medium">Cart Total</th>
              <th className="px-6 py-4 font-medium">Last Updated</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row, idx) => (
              <tr key={idx} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 text-text-primary font-medium">{row.customer}</td>
                <td className="px-6 py-4 text-text-primary flex items-center gap-2">
                  <ShoppingCart size={16} className="text-text-secondary"/> {row.items} items
                </td>
                <td className="px-6 py-4 text-primary font-semibold">{row.total}</td>
                <td className="px-6 py-4 text-text-secondary">{row.lastUpdated}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
