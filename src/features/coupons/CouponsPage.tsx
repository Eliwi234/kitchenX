import { useTranslation } from "react-i18next";

export function CouponsPage() {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{t("nav_coupons")}</h1>
        <p className="text-text-secondary mt-1">Create and manage marketing promotions.</p>
      </div>
      <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
        <p className="text-text-secondary">Coupons generation interface coming soon...</p>
      </div>
    </div>
  );
}
