import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export function SettingsPerformancePage() {
  const mockData = [
    { metric: "Server Uptime", value: "99.98%", trend: "stable", change: "0.00%", lastUpdated: "Just now" },
    { metric: "API Response Time", value: "124ms", trend: "up", change: "-12ms", lastUpdated: "5 mins ago" },
    { metric: "Database Load", value: "42%", trend: "down", change: "+5%", lastUpdated: "10 mins ago" },
    { metric: "Active Connections", value: "1,432", trend: "up", change: "+142", lastUpdated: "Just now" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">System Performance</h1>
        <p className="text-text-secondary mt-1">Monitor technical health and infrastructure metrics.</p>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Metric</th>
              <th className="px-6 py-4 font-medium">Value</th>
              <th className="px-6 py-4 font-medium">Trend</th>
              <th className="px-6 py-4 font-medium">Last Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row, idx) => (
              <tr key={idx} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 text-text-primary font-medium">{row.metric}</td>
                <td className="px-6 py-4 text-text-primary font-bold text-lg">{row.value}</td>
                <td className="px-6 py-4">
                  <div className={`flex items-center gap-1 font-medium ${row.trend === 'up' ? 'text-green-600' : row.trend === 'down' ? 'text-red-500' : 'text-gray-500'}`}>
                    {row.trend === 'up' && <TrendingUp size={16} />}
                    {row.trend === 'down' && <TrendingDown size={16} />}
                    {row.trend === 'stable' && <Minus size={16} />}
                    {row.change}
                  </div>
                </td>
                <td className="px-6 py-4 text-text-secondary">{row.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
