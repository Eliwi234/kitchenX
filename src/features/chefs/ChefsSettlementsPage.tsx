import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ChefsSettlementsPage() {
  const mockData = [
    { chef: "Ahmed Grill", totalEarned: "12,500 AED", platformFee: "1,250 AED", netPayout: "11,250 AED", status: "Paid", date: "Oct 1, 2026" },
    { chef: "Lana's Kitchen", totalEarned: "8,300 AED", platformFee: "830 AED", netPayout: "7,470 AED", status: "Pending", date: "Oct 15, 2026" },
    { chef: "Sweet Treats", totalEarned: "4,100 AED", platformFee: "410 AED", netPayout: "3,690 AED", status: "Paid", date: "Oct 1, 2026" },
  ];

  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">{t("settlements_payouts_title")}</h1>
          <p className="text-text-secondary mt-1">{t("settlements_payouts_desc")}</p>
        </div>
        <button className="bg-surface border border-border text-text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-background transition-colors flex items-center gap-2">
          <Download size={16} /> {t("export_csv")}
        </button>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">{t("chef_name")}</th>
              <th className="px-6 py-4 font-medium">{t("total_earned")}</th>
              <th className="px-6 py-4 font-medium">{t("platform_fee_col")}</th>
              <th className="px-6 py-4 font-medium">{t("net_payout")}</th>
              <th className="px-6 py-4 font-medium">{t("status")}</th>
              <th className="px-6 py-4 font-medium">{t("date")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row, idx) => (
              <tr key={idx} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 text-text-primary font-medium">{row.chef}</td>
                <td className="px-6 py-4 text-text-secondary">{row.totalEarned}</td>
                <td className="px-6 py-4 text-red-500 font-medium">-{row.platformFee}</td>
                <td className="px-6 py-4 text-green-600 font-bold">{row.netPayout}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-text-secondary">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
