import { Users, Activity, ArrowUpRight } from "lucide-react";

export function CustomersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">Customers Overview</h1>
        <p className="text-text-secondary mt-1">High-level summary of customer engagement.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface p-6 rounded-2xl shadow-sm border border-border">
          <div className="flex items-center gap-3 text-primary mb-2">
            <Users size={24} />
            <h3 className="font-semibold text-text-primary">Total Customers</h3>
          </div>
          <p className="text-3xl font-bold text-text-primary mt-2">12,450</p>
          <p className="text-sm text-green-600 flex items-center gap-1 mt-1"><ArrowUpRight size={16}/> +450 this month</p>
        </div>
        <div className="bg-surface p-6 rounded-2xl shadow-sm border border-border">
          <div className="flex items-center gap-3 text-purple-500 mb-2">
            <Activity size={24} />
            <h3 className="font-semibold text-text-primary">Active Weekly Users</h3>
          </div>
          <p className="text-3xl font-bold text-text-primary mt-2">3,200</p>
          <p className="text-sm text-text-secondary mt-1">25% engagement rate</p>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-text-primary">Recent Registrations</h2>
        </div>
        <table className="w-full text-start border-collapse">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Customer Name</th>
              <th className="px-6 py-4 font-medium">Source</th>
              <th className="px-6 py-4 font-medium">Joined Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            <tr className="hover:bg-background/50 transition-colors">
              <td className="px-6 py-4 font-medium text-text-primary">Hassan Ali</td>
              <td className="px-6 py-4 text-text-secondary">Organic Search</td>
              <td className="px-6 py-4 text-text-secondary">Today, 10:45 AM</td>
            </tr>
            <tr className="hover:bg-background/50 transition-colors">
              <td className="px-6 py-4 font-medium text-text-primary">Fatima Said</td>
              <td className="px-6 py-4 text-text-secondary">Referral Program</td>
              <td className="px-6 py-4 text-text-secondary">Today, 09:12 AM</td>
            </tr>
            <tr className="hover:bg-background/50 transition-colors">
              <td className="px-6 py-4 font-medium text-text-primary">John Miller</td>
              <td className="px-6 py-4 text-text-secondary">Instagram Ad</td>
              <td className="px-6 py-4 text-text-secondary">Yesterday, 18:30 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
