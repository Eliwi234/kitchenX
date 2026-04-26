import { Edit, Trash2, Eye } from "lucide-react";

export function CustomersAccountsPage() {
  const mockData = [
    { id: "CUST-001", name: "Sarah Connor", email: "sarah@example.com", orders: 24, ltv: "1,450 AED", status: "Active" },
    { id: "CUST-002", name: "John Doe", email: "john.d@example.com", orders: 5, ltv: "320 AED", status: "Active" },
    { id: "CUST-003", name: "Jane Smith", email: "jane.s@example.com", orders: 0, ltv: "0 AED", status: "Inactive" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">Customer Accounts</h1>
          <p className="text-text-secondary mt-1">Manage platform users and view lifetime value.</p>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Customer ID</th>
              <th className="px-6 py-4 font-medium">Name & Email</th>
              <th className="px-6 py-4 font-medium">Total Orders</th>
              <th className="px-6 py-4 font-medium">Lifetime Value</th>
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
                  <div className="text-xs text-text-secondary">{row.email}</div>
                </td>
                <td className="px-6 py-4 text-text-secondary">{row.orders}</td>
                <td className="px-6 py-4 text-primary font-semibold">{row.ltv}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
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
