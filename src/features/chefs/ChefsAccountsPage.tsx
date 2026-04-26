import { Edit, Trash2, Eye } from "lucide-react";

export function ChefsAccountsPage() {
  const mockData = [
    { id: "CHF-101", name: "Ahmed Grill", email: "ahmed@grill.com", phone: "+971 50 123 4567", status: "Active" },
    { id: "CHF-102", name: "Lana's Kitchen", email: "lana@kitchen.com", phone: "+971 50 987 6543", status: "Active" },
    { id: "CHF-103", name: "Sweet Treats", email: "sweet@treats.com", phone: "+971 55 555 5555", status: "Suspended" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">Chef Accounts</h1>
          <p className="text-text-secondary mt-1">Manage chef profiles and access.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">+ Add Chef</button>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">ID</th>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Contact</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-end">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row) => (
              <tr key={row.id} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 font-medium text-text-primary">{row.id}</td>
                <td className="px-6 py-4 text-text-primary font-medium">{row.name}</td>
                <td className="px-6 py-4 text-text-secondary">
                  <div>{row.email}</div>
                  <div className="text-xs">{row.phone}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-end">
                  <div className="flex justify-end gap-2">
                    <button className="p-1.5 text-text-secondary hover:text-primary transition-colors"><Eye size={16} /></button>
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
