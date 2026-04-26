import { Edit, Trash2 } from "lucide-react";

export function CouponsPage() {
  const mockData = [
    { code: "WELCOME50", discount: "50 AED", maxUses: "1000", used: 342, expiry: "Dec 31, 2026", status: "Active" },
    { code: "WINTER10", discount: "10%", maxUses: "500", used: 12, expiry: "Feb 28, 2027", status: "Active" },
    { code: "SUMMER20", discount: "20%", maxUses: "200", used: 200, expiry: "Aug 31, 2025", status: "Expired" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">Coupons & Offers</h1>
          <p className="text-text-secondary mt-1">Manage global promo codes and discounts.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">+ Create Coupon</button>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Coupon Code</th>
              <th className="px-6 py-4 font-medium">Discount</th>
              <th className="px-6 py-4 font-medium">Usage</th>
              <th className="px-6 py-4 font-medium">Expiry Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-end">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row, idx) => (
              <tr key={idx} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 font-mono text-primary font-bold">{row.code}</td>
                <td className="px-6 py-4 text-text-primary font-medium">{row.discount}</td>
                <td className="px-6 py-4 text-text-secondary">{row.used} / {row.maxUses}</td>
                <td className="px-6 py-4 text-text-secondary">{row.expiry}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-end">
                  <div className="flex justify-end gap-2">
                    <button className="p-1.5 text-text-secondary hover:text-primary transition-colors"><Edit size={16} /></button>
                    <button className="p-1.5 text-text-secondary hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
