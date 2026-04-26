import { MapPin } from "lucide-react";

export function DriversTrackingPage() {
  const mockData = [
    { driver: "Omar Youssef", location: "Downtown Dubai", orderId: "ORD-9302", status: "On Delivery", eta: "10 mins" },
    { driver: "Khalid Ali", location: "Business Bay", orderId: "N/A", status: "Available", eta: "-" },
    { driver: "Tariq Mansour", location: "JLT", orderId: "ORD-9299", status: "Heading to Kitchen", eta: "5 mins" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">Live Tracking</h1>
        <p className="text-text-secondary mt-1">Monitor driver locations and current assignments.</p>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Driver Name</th>
              <th className="px-6 py-4 font-medium">Current Location</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Active Order</th>
              <th className="px-6 py-4 font-medium">ETA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row, idx) => (
              <tr key={idx} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 text-text-primary font-medium">{row.driver}</td>
                <td className="px-6 py-4 text-text-secondary flex items-center gap-1">
                  <MapPin size={14} className="text-primary"/> {row.location}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-primary-light text-primary-dark'}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-text-primary font-medium">{row.orderId}</td>
                <td className="px-6 py-4 text-text-secondary">{row.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
