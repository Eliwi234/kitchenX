import { useTranslation } from "react-i18next";

export function CustomersPage() {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{t("nav_customers")}</h1>
        <p className="text-text-secondary mt-1">Review end-user accounts and feedback.</p>
      </div>
      <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
        <p className="text-text-secondary">Customer accounts module coming soon...</p>
      </div>
    </div>
  );
}
