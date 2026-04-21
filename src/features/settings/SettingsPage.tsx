import { useTranslation } from "react-i18next";

export function SettingsPage() {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{t("nav_settings")}</h1>
        <p className="text-text-secondary mt-1">Configure global application parameters.</p>
      </div>
      <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
        <p className="text-text-secondary">Settings form goes here.</p>
      </div>
    </div>
  );
}
