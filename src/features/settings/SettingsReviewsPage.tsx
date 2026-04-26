import { Star, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SettingsReviewsPage() {
  const mockData = [
    { id: "REV-101", customer: "Sarah Connor", target: "Ahmed Grill (Chef)", rating: 5, comment: "Amazing food, highly recommended!", date: "Oct 1, 2026", status: "Published" },
    { id: "REV-102", customer: "John Doe", target: "Omar Youssef (Driver)", rating: 2, comment: "Delivery was very late.", date: "Sep 29, 2026", status: "Flagged" },
    { id: "REV-103", customer: "Jane Smith", target: "Sweet Treats (Chef)", rating: 4, comment: "Good taste but portion was small.", date: "Sep 28, 2026", status: "Published" },
  ];

  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{t("reviews_ratings_title")}</h1>
        <p className="text-text-secondary mt-1">{t("reviews_ratings_desc")}</p>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-start border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-background text-text-secondary text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">{t("customer")}</th>
              <th className="px-6 py-4 font-medium">{t("target")}</th>
              <th className="px-6 py-4 font-medium">{t("rating")}</th>
              <th className="px-6 py-4 font-medium w-1/3">{t("comment")}</th>
              <th className="px-6 py-4 font-medium">{t("status")}</th>
              <th className="px-6 py-4 font-medium text-end">{t("actions")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            {mockData.map((row) => (
              <tr key={row.id} className="hover:bg-background/50 transition-colors">
                <td className="px-6 py-4 text-text-primary font-medium">{row.customer}</td>
                <td className="px-6 py-4 text-text-secondary">{row.target}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    <span className="font-medium text-text-primary ml-1">{row.rating}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-text-secondary truncate max-w-xs" title={row.comment}>{row.comment}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.status === "Published" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-end">
                  <button className="p-1.5 text-text-secondary hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
