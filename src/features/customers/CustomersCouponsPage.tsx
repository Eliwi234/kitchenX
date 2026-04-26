import { useTranslation } from "react-i18next";

export function CustomersCouponsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{t("customers_coupons_title")}</h1>
        <p className="text-text-secondary mt-1">{t("feature_under_development")}</p>
      </div>
    </div>
  );
}
