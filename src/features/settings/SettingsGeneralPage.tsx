import { Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SettingsGeneralPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{t("general_settings_title")}</h1>
        <p className="text-text-secondary mt-1">{t("general_settings_desc")}</p>
      </div>

      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden p-6 max-w-2xl">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">{t("platform_name")}</label>
              <input type="text" defaultValue="KitchenX" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">{t("support_email")}</label>
              <input type="email" defaultValue="support@kitchenx.com" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">{t("chef_platform_fee")}</label>
              <input type="number" defaultValue="10" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">{t("driver_base_fee")}</label>
              <input type="number" defaultValue="15" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-text-primary">{t("maintenance_mode")}</label>
            <div className="flex items-center gap-3 mt-1">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
              <span className="text-sm text-text-secondary">{t("disable_customer_access")}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex justify-end">
            <button className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors flex items-center gap-2">
              <Save size={16} /> {t("save_changes")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
