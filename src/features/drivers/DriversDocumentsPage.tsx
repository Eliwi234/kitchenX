import { FileText, Check, X } from "lucide-react";

export function DriversDocumentsPage() {
  const mockData = [
    { id: "DDOC-10", driver: "Omar Youssef", type: "Driving License", expiry: "Dec 12, 2026", status: "Approved" },
    { id: "DDOC-11", driver: "Khalid Ali", type: "Vehicle Registration", expiry: "Jan 05, 2026", status: "Expiring Soon" },
    { id: "DDOC-12", driver: "Tariq Mansour", type: "Emirates ID", expiry: "Mar 20, 2027", status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">Driver Documents</h1>
        <p className="text-text-secondary mt-1">Review licenses, registrations, and IDs.</p>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Doc ID</th>
              <th className="px-6 py-4 font-medium">Driver Name</th>
              <th className="px-6 py-4 font-medium">Document Type</th>
              <th className="px-6 py-4 font-medium">Expiry Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-end">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row) => (
              <tr key={row.id} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 font-medium text-text-primary">{row.id}</td>
                <td className="px-6 py-4 text-text-primary font-medium">{row.driver}</td>
                <td className="px-6 py-4 text-text-primary flex items-center gap-2">
                  <FileText size={16} className="text-primary"/> {row.type}
                </td>
                <td className="px-6 py-4 text-text-secondary">{row.expiry}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === "Approved" ? "bg-green-100 text-green-700" : row.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-orange-100 text-orange-700"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-end">
                  <div className="flex justify-end gap-2">
                    {row.status === "Pending" && (
                      <>
                        <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors"><Check size={16} /></button>
                        <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><X size={16} /></button>
                      </>
                    )}
                    <button className="text-sm font-medium text-primary hover:underline ml-2">View File</button>
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
