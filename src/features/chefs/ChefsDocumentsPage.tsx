import { FileText, Check, X } from "lucide-react";

export function ChefsDocumentsPage() {
  const mockData = [
    { id: "DOC-001", chef: "Ahmed Grill", type: "Health Certificate", date: "Oct 12, 2025", status: "Pending" },
    { id: "DOC-002", chef: "Lana's Kitchen", type: "Emirates ID", date: "Sep 01, 2025", status: "Approved" },
    { id: "DOC-003", chef: "Sweet Treats", type: "Trade License", date: "Nov 20, 2025", status: "Rejected" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">Chef Documents</h1>
        <p className="text-text-secondary mt-1">Review and approve legal/health documents.</p>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Doc ID</th>
              <th className="px-6 py-4 font-medium">Chef Name</th>
              <th className="px-6 py-4 font-medium">Document Type</th>
              <th className="px-6 py-4 font-medium">Uploaded Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-end">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row) => (
              <tr key={row.id} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 font-medium text-text-primary">{row.id}</td>
                <td className="px-6 py-4 text-text-primary">{row.chef}</td>
                <td className="px-6 py-4 text-text-primary flex items-center gap-2">
                  <FileText size={16} className="text-primary"/> {row.type}
                </td>
                <td className="px-6 py-4 text-text-secondary">{row.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === "Approved" ? "bg-green-100 text-green-700" : row.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
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
