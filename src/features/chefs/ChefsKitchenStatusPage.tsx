export function ChefsKitchenStatusPage() {
  const mockData = [
    { chef: "Ahmed Grill", status: "Online", activeOrders: 4, nextAvailable: "Now" },
    { chef: "Lana's Kitchen", status: "Busy", activeOrders: 12, nextAvailable: "45 mins" },
    { chef: "Sweet Treats", status: "Offline", activeOrders: 0, nextAvailable: "Tomorrow 9:00 AM" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">Kitchen Status</h1>
        <p className="text-text-secondary mt-1">Monitor real-time kitchen loads and availability.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-surface border border-border p-4 rounded-xl shadow-sm">
          <p className="text-sm text-text-secondary">Online Kitchens</p>
          <p className="text-2xl font-bold text-green-600 mt-1">1</p>
        </div>
        <div className="bg-surface border border-border p-4 rounded-xl shadow-sm">
          <p className="text-sm text-text-secondary">Busy Kitchens</p>
          <p className="text-2xl font-bold text-yellow-600 mt-1">1</p>
        </div>
        <div className="bg-surface border border-border p-4 rounded-xl shadow-sm">
          <p className="text-sm text-text-secondary">Offline Kitchens</p>
          <p className="text-2xl font-bold text-red-500 mt-1">1</p>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Chef Name</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Active Orders</th>
              <th className="px-6 py-4 font-medium">Next Available</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row, idx) => (
              <tr key={idx} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 text-text-primary font-medium">{row.chef}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${row.status === 'Online' ? 'bg-green-500' : row.status === 'Busy' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
                    <span className="font-medium text-text-primary">{row.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-text-primary font-semibold">{row.activeOrders}</td>
                <td className="px-6 py-4 text-text-secondary">{row.nextAvailable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
