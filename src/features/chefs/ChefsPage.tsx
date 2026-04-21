import { useTranslation } from "react-i18next";

export function ChefsPage() {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{t("nav_chefs")}</h1>
        <p className="text-text-secondary mt-1">Manage all participating home chefs.</p>
      </div>
      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-start border-collapse">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Chef Name</th>
              <th className="px-6 py-4 font-medium">Rating</th>
              <th className="px-6 py-4 font-medium">Joined Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            <tr className="hover:bg-background/50 transition-colors">
              <td className="px-6 py-4 font-medium text-text-primary">Ahmed's Grill</td>
              <td className="px-6 py-4 text-text-primary">4.9 / 5</td>
              <td className="px-6 py-4 text-text-secondary">Jan 12, 2026</td>
            </tr>
            <tr className="hover:bg-background/50 transition-colors">
              <td className="px-6 py-4 font-medium text-text-primary">Lana's Kitchen</td>
              <td className="px-6 py-4 text-text-primary">4.7 / 5</td>
              <td className="px-6 py-4 text-text-secondary">Feb 01, 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
