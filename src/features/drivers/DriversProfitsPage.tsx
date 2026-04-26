import { Download } from "lucide-react";

export function DriversProfitsPage() {
  const mockData = [
    { driver: "Omar Youssef", deliveries: 145, earned: "3,200 AED", tips: "350 AED", total: "3,550 AED", status: "Paid" },
    { driver: "Khalid Ali", deliveries: 98, earned: "2,100 AED", tips: "120 AED", total: "2,220 AED", status: "Pending" },
    { driver: "Tariq Mansour", deliveries: 210, earned: "4,600 AED", tips: "500 AED", total: "5,100 AED", status: "Paid" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">Driver Profits</h1>
          <p className="text-text-secondary mt-1">Review driver earnings and tips.</p>
        </div>
        <button className="bg-surface border border-border text-text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-background transition-colors flex items-center gap-2">
          <Download size={16} /> Export CSV
        </button>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Driver Name</th>
              <th className="px-6 py-4 font-medium">Completed Deliveries</th>
              <th className="px-6 py-4 font-medium">Delivery Earnings</th>
              <th className="px-6 py-4 font-medium">Tips Collected</th>
              <th className="px-6 py-4 font-medium">Total Payout</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row, idx) => (
              <tr key={idx} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 text-text-primary font-medium">{row.driver}</td>
                <td className="px-6 py-4 text-text-secondary">{row.deliveries}</td>
                <td className="px-6 py-4 text-text-secondary">{row.earned}</td>
                <td className="px-6 py-4 text-green-600 font-medium">+{row.tips}</td>
                <td className="px-6 py-4 text-primary font-bold">{row.total}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
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
