import { Users, Star, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ChefsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{t("chefs_overview_title")}</h1>
        <p className="text-text-secondary mt-1">{t("chefs_overview_desc")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface p-6 rounded-2xl shadow-sm border border-border">
          <div className="flex items-center gap-3 text-primary mb-2">
            <Users size={24} />
            <h3 className="font-semibold text-text-primary">{t("total_active_chefs")}</h3>
          </div>
          <p className="text-3xl font-bold text-text-primary mt-2">142</p>
          <p className="text-sm text-green-600 flex items-center gap-1 mt-1"><ArrowUpRight size={16}/> +12 {t("this_month")}</p>
        </div>
        <div className="bg-surface p-6 rounded-2xl shadow-sm border border-border">
          <div className="flex items-center gap-3 text-yellow-500 mb-2">
            <Star size={24} />
            <h3 className="font-semibold text-text-primary">{t("average_rating")}</h3>
          </div>
          <p className="text-3xl font-bold text-text-primary mt-2">4.8</p>
          <p className="text-sm text-text-secondary mt-1">{t("across_reviews")}</p>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-text-primary">{t("top_performing_chefs")}</h2>
        </div>
        <table className="w-full text-start border-collapse">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">{t("chef_name")}</th>
              <th className="px-6 py-4 font-medium">{t("rating")}</th>
              <th className="px-6 py-4 font-medium">{t("total_revenue")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            <tr className="hover:bg-background/50 transition-colors">
              <td className="px-6 py-4 font-medium text-text-primary">Ahmed's Grill</td>
              <td className="px-6 py-4 text-text-primary">4.9 / 5</td>
              <td className="px-6 py-4 text-text-secondary">84,500 AED</td>
            </tr>
            <tr className="hover:bg-background/50 transition-colors">
              <td className="px-6 py-4 font-medium text-text-primary">Lana's Kitchen</td>
              <td className="px-6 py-4 text-text-primary">4.8 / 5</td>
              <td className="px-6 py-4 text-text-secondary">62,100 AED</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
