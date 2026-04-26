import { Car, Clock, ArrowUpRight } from "lucide-react";

export function DriversPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">Drivers Overview</h1>
        <p className="text-text-secondary mt-1">High-level summary of delivery operations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface p-6 rounded-2xl shadow-sm border border-border">
          <div className="flex items-center gap-3 text-primary mb-2">
            <Car size={24} />
            <h3 className="font-semibold text-text-primary">Active Drivers</h3>
          </div>
          <p className="text-3xl font-bold text-text-primary mt-2">84</p>
          <p className="text-sm text-green-600 flex items-center gap-1 mt-1"><ArrowUpRight size={16}/> +5 this week</p>
        </div>
        <div className="bg-surface p-6 rounded-2xl shadow-sm border border-border">
          <div className="flex items-center gap-3 text-blue-500 mb-2">
            <Clock size={24} />
            <h3 className="font-semibold text-text-primary">Avg Delivery Time</h3>
          </div>
          <p className="text-3xl font-bold text-text-primary mt-2">28 mins</p>
          <p className="text-sm text-text-secondary mt-1">-2 mins from last month</p>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-text-primary">Live Driver Status</h2>
        </div>
        <table className="w-full text-start border-collapse">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Count</th>
              <th className="px-6 py-4 font-medium">% of Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            <tr className="hover:bg-background/50 transition-colors">
              <td className="px-6 py-4 font-medium text-green-600">On Delivery</td>
              <td className="px-6 py-4 text-text-primary">52</td>
              <td className="px-6 py-4 text-text-secondary">62%</td>
            </tr>
            <tr className="hover:bg-background/50 transition-colors">
              <td className="px-6 py-4 font-medium text-blue-600">Available</td>
              <td className="px-6 py-4 text-text-primary">28</td>
              <td className="px-6 py-4 text-text-secondary">33%</td>
            </tr>
            <tr className="hover:bg-background/50 transition-colors">
              <td className="px-6 py-4 font-medium text-red-500">Offline / Break</td>
              <td className="px-6 py-4 text-text-primary">4</td>
              <td className="px-6 py-4 text-text-secondary">5%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
