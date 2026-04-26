export function SettingsAuditLogsPage() {
  const mockData = [
    { id: 1, action: "User Login", user: "Lana Admin", ip: "192.168.1.100", time: "Oct 2, 2026 - 09:14 AM" },
    { id: 2, action: "Approved Document (DOC-002)", user: "Lana Admin", ip: "192.168.1.100", time: "Oct 2, 2026 - 10:30 AM" },
    { id: 3, action: "System Backup", user: "System", ip: "localhost", time: "Oct 2, 2026 - 03:00 AM" },
    { id: 4, action: "Deleted Review (REV-104)", user: "Super Admin", ip: "10.0.0.5", time: "Oct 1, 2026 - 14:22 PM" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">Audit Logs</h1>
        <p className="text-text-secondary mt-1">Track administrative actions and system events.</p>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Timestamp</th>
              <th className="px-6 py-4 font-medium">Action</th>
              <th className="px-6 py-4 font-medium">User</th>
              <th className="px-6 py-4 font-medium">IP Address</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm font-mono">
            {mockData.map((row) => (
              <tr key={row.id} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 text-text-secondary text-xs">{row.time}</td>
                <td className="px-6 py-4 text-text-primary">{row.action}</td>
                <td className="px-6 py-4 text-primary">{row.user}</td>
                <td className="px-6 py-4 text-text-secondary text-xs">{row.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
