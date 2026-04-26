export function CustomersCouponsPage() {
  const mockData = [
    { customer: "Sarah Connor", email: "sarah@example.com", coupon: "WELCOME50", discount: "50 AED", status: "Used", date: "Oct 1, 2026" },
    { customer: "John Doe", email: "john.d@example.com", coupon: "WINTER10", discount: "10%", status: "Available", date: "-" },
    { customer: "Jane Smith", email: "jane.s@example.com", coupon: "FREEDELIVERY", discount: "Free Delivery", status: "Used", date: "Sep 20, 2026" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">Customer Coupons</h1>
        <p className="text-text-secondary mt-1">Track coupon usage per customer.</p>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Coupon Code</th>
              <th className="px-6 py-4 font-medium">Discount</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Used Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row, idx) => (
              <tr key={idx} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 text-text-primary">
                  <div className="font-medium">{row.customer}</div>
                  <div className="text-xs text-text-secondary">{row.email}</div>
                </td>
                <td className="px-6 py-4 font-mono text-primary font-semibold">{row.coupon}</td>
                <td className="px-6 py-4 text-text-secondary">{row.discount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === "Used" ? "bg-gray-100 text-gray-700" : "bg-green-100 text-green-700"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-text-secondary">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
