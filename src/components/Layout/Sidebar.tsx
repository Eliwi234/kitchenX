import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  LayoutDashboard, 
  ChefHat, 
  Car, 
  Users, 
  Tag, 
  BarChart3, 
  Settings,
  LogOut,
  ChevronDown
} from "lucide-react";
import { cn } from "../../utils/cn";
import logo from "../../assets/logo.png";

interface SidebarProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

export function Sidebar({ isOpen = false, setIsOpen }: SidebarProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isRtl = i18n.dir() === "rtl";

  const navigation = useMemo(
    () => [
      { name: t("nav_dashboard"), href: "/dashboard", icon: LayoutDashboard },
      {
        name: t("nav_chefs"),
        href: "/dashboard/chefs",
        icon: ChefHat,
        children: [
          { name: t("nav_overview"), href: "/dashboard/chefs", end: true },
          { name: t("nav_chefs_accounts"), href: "/dashboard/chefs/accounts" },
          { name: t("nav_chefs_documents"), href: "/dashboard/chefs/documents" },
          { name: t("nav_chefs_kitchen_status"), href: "/dashboard/chefs/kitchen-status" },
          { name: t("nav_chefs_meals"), href: "/dashboard/chefs/meals" },
          { name: t("nav_chefs_settlements"), href: "/dashboard/chefs/settlements" },
        ],
      },
      {
        name: t("nav_drivers"),
        href: "/dashboard/drivers",
        icon: Car,
        children: [
          { name: t("nav_overview"), href: "/dashboard/drivers", end: true },
          { name: t("nav_drivers_accounts"), href: "/dashboard/drivers/accounts" },
          { name: t("nav_drivers_documents"), href: "/dashboard/drivers/documents" },
          { name: t("nav_drivers_tracking"), href: "/dashboard/drivers/tracking" },
          { name: t("nav_drivers_profits"), href: "/dashboard/drivers/profits" },
        ],
      },
      {
        name: t("nav_customers"),
        href: "/dashboard/customers",
        icon: Users,
        children: [
          { name: t("nav_overview"), href: "/dashboard/customers", end: true },
          { name: t("nav_customers_accounts"), href: "/dashboard/customers/accounts" },
          { name: t("nav_customers_coupons"), href: "/dashboard/customers/coupons" },
          { name: t("nav_customers_carts"), href: "/dashboard/customers/carts" },
        ],
      },
      { name: t("nav_coupons"), href: "/dashboard/coupons", icon: Tag },
      { name: t("nav_reports"), href: "/dashboard/reports", icon: BarChart3 },
      {
        name: t("nav_settings"),
        href: "/dashboard/settings",
        icon: Settings,
        children: [
          { name: t("nav_overview"), href: "/dashboard/settings", end: true },
          { name: t("nav_settings_reviews"), href: "/dashboard/settings/reviews" },
          { name: t("nav_settings_performance"), href: "/dashboard/settings/performance" },
          { name: t("nav_settings_audit_logs"), href: "/dashboard/settings/audit-logs" },
          { name: t("nav_settings_disputes"), href: "/dashboard/settings/disputes" },
          { name: t("nav_settings_general"), href: "/dashboard/settings/general" },
        ],
      },
    ],
    [t]
  );

  const [expandedParents, setExpandedParents] = useState<Record<string, boolean>>({});

  const isParentActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(`${href}/`);

  const handleLinkClick = () => {
    if (window.innerWidth < 768 && setIsOpen) {
      setIsOpen(false);
    }
  };

  const toggleParent = (href: string) => {
    setExpandedParents((prev) => ({ ...prev, [href]: !prev[href] }));
  };

  return (
    <div className={cn(
      "fixed inset-y-0 start-0 z-50 flex h-full w-64 shrink-0 flex-col bg-charcoal text-white transition-transform duration-300 md:relative md:translate-x-0 shadow-2xl md:shadow-none",
      !isOpen && (isRtl ? "translate-x-full md:translate-x-0" : "-translate-x-full md:translate-x-0"),
      isOpen && "translate-x-0"
    )}>


      <div className="flex h-16 shrink-0 items-center justify-center gap-2 px-6 bg-charcoal-900 border-b border-charcoal-700 relative">
        <img src={logo} alt="KitchenX Logo" className="h-10 w-auto" />
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-4 py-6 gap-1 focus:outline-none">
        {navigation.map((item) => {
          const hasChildren = !!item.children?.length;
          const parentActive = isParentActive(item.href);
          const isExpanded = hasChildren && (expandedParents[item.href] ?? parentActive);

          return (
            <div key={item.href} className="space-y-1">
              {hasChildren ? (
                <button
                  type="button"
                  onClick={() => toggleParent(item.href)}
                  className={cn(
                    "group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    parentActive
                      ? "bg-charcoal-800 text-white shadow-md shadow-black/10"
                      : "text-charcoal-200 hover:bg-charcoal-800 hover:text-white"
                  )}
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} className="shrink-0" />
                    {item.name}
                  </div>
                  <ChevronDown
                    size={16}
                    className={cn("transition-transform duration-200", isExpanded && "rotate-180")}
                  />
                </button>
              ) : (
                <NavLink
                  to={item.href}
                  onClick={handleLinkClick}
                  end={item.href === "/dashboard"}
                  className={({ isActive }) =>
                    cn(
                      "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "text-charcoal-200 hover:bg-charcoal-800 hover:text-white"
                    )
                  }
                >
                  <item.icon size={20} className="shrink-0" />
                  {item.name}
                </NavLink>
              )}

              {hasChildren && isExpanded && (
                <div className="ms-7 space-y-1 border-s border-charcoal-700 ps-3">
                  {item.children?.map((child) => (
                    <NavLink
                      key={child.href}
                      to={child.href}
                      onClick={handleLinkClick}
                      end={(child as any).end}
                      className={({ isActive }) =>
                        cn(
                          "block rounded-lg px-3 py-2 text-sm transition-all duration-200",
                          isActive
                            ? "bg-charcoal-700 text-white"
                            : "text-charcoal-300 hover:bg-charcoal-800 hover:text-white"
                        )
                      }
                    >
                      {child.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="p-4 border-t border-charcoal-700">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-400 hover:bg-charcoal-800 hover:text-red-300 transition-colors">
          <LogOut size={20} className="shrink-0" />
          {t("sign_out")}
        </button>
      </div>
    </div>
  );
}

