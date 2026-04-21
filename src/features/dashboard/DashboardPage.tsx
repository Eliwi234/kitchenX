import { ChefHat, DollarSign, ShoppingBag, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { StatCard } from "./components/StatCard";
import { ActivityTable } from "./components/ActivityTable";

export function DashboardPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{t("dashboard_overview")}</h1>
        <p className="text-text-secondary mt-1">{t("dashboard_desc")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title={t("total_sales")}
          value="$24,592.50"
          icon={DollarSign}
          trend="up"
          trendValue="12.5%"
        />
        <StatCard
          title={t("active_chefs")}
          value="142"
          icon={ChefHat}
          trend="up"
          trendValue="3.2%"
        />
        <StatCard
          title={t("pending_orders")}
          value="38"
          icon={ShoppingBag}
          trend="down"
          trendValue="1.5%"
        />
        <StatCard
          title={t("total_customers")}
          value="8,942"
          icon={Users}
          trend="up"
          trendValue="8.1%"
        />
      </div>

      <div className="mt-8">
        <ActivityTable />
      </div>
    </div>
  );
}
