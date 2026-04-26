import { ShieldAlert, Check } from "lucide-react";

export function SettingsDisputesPage() {
  const mockData = [
    { id: "DSP-001", reporter: "Sarah Connor (Customer)", target: "Ahmed Grill (Chef)", issue: "Missing Items", status: "Open", date: "Oct 2, 2026" },
    { id: "DSP-002", reporter: "Lana's Kitchen (Chef)", target: "Omar Youssef (Driver)", issue: "Food Damaged in Transit", status: "Resolved", date: "Sep 28, 2026" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">Disputes & Resolutions</h1>
        <p className="text-text-secondary mt-1">Handle conflicts between customers, chefs, and drivers.</p>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Dispute ID</th>
              <th className="px-6 py-4 font-medium">Reporter</th>
              <th className="px-6 py-4 font-medium">Target</th>
              <th className="px-6 py-4 font-medium">Issue</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-end">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row) => (
              <tr key={row.id} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 font-medium text-text-primary">{row.id}</td>
                <td className="px-6 py-4 text-text-primary">{row.reporter}</td>
                <td className="px-6 py-4 text-text-secondary">{row.target}</td>
                <td className="px-6 py-4 text-text-primary font-medium">{row.issue}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === "Resolved" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-end">
                  <div className="flex justify-end gap-2">
                    {row.status === "Open" && (
                      <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Resolve"><Check size={16} /></button>
                    )}
                    <button className="p-1.5 text-text-secondary hover:text-primary transition-colors" title="View Details"><ShieldAlert size={16} /></button>
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
