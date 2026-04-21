import { useTranslation } from "react-i18next";

export function DriversPage() {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{t("nav_drivers")}</h1>
        <p className="text-text-secondary mt-1">Manage delivery network drivers.</p>
      </div>
      <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
        <p className="text-text-secondary">Driver tracking and activation portal.</p>
      </div>
    </div>
  );
}
