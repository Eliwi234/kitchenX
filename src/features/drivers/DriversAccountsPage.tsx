import { Edit, Trash2, Eye } from "lucide-react";

export function DriversAccountsPage() {
  const mockData = [
    { id: "DRV-501", name: "Omar Youssef", phone: "+971 50 111 2222", vehicle: "Honda City - DXB 12345", status: "Active" },
    { id: "DRV-502", name: "Khalid Ali", phone: "+971 50 333 4444", vehicle: "Nissan Sunny - SHJ 67890", status: "Active" },
    { id: "DRV-503", name: "Tariq Mansour", phone: "+971 55 999 8888", vehicle: "Toyota Yaris - AUH 54321", status: "Suspended" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">Driver Accounts</h1>
          <p className="text-text-secondary mt-1">Manage delivery personnel and vehicle details.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">+ Add Driver</button>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Driver ID</th>
              <th className="px-6 py-4 font-medium">Name & Contact</th>
              <th className="px-6 py-4 font-medium">Vehicle</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-end">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row) => (
              <tr key={row.id} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 font-medium text-text-primary">{row.id}</td>
                <td className="px-6 py-4 text-text-primary">
                  <div className="font-medium">{row.name}</div>
                  <div className="text-xs text-text-secondary">{row.phone}</div>
                </td>
                <td className="px-6 py-4 text-text-secondary">{row.vehicle}</td>
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
