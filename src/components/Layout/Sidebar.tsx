import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  LayoutDashboard, 
  ChefHat, 
  Car, 
  Users, 
  Tag, 
  BarChart3, 
  Settings,
  LogOut
} from "lucide-react";
import { cn } from "../../utils/cn";
import logo from "../../assets/logo.png";

interface SidebarProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

export function Sidebar({ isOpen = false, setIsOpen }: SidebarProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

  const navigation = [
    { name: t("nav_dashboard"), href: "/dashboard", icon: LayoutDashboard },
    { name: t("nav_chefs"), href: "/dashboard/chefs", icon: ChefHat },
    { name: t("nav_drivers"), href: "/dashboard/drivers", icon: Car },
    { name: t("nav_customers"), href: "/dashboard/customers", icon: Users },
    { name: t("nav_coupons"), href: "/dashboard/coupons", icon: Tag },
    { name: t("nav_reports"), href: "/dashboard/reports", icon: BarChart3 },
    { name: t("nav_settings"), href: "/dashboard/settings", icon: Settings },
  ];

  const handleLinkClick = () => {
    if (window.innerWidth < 768 && setIsOpen) {
      setIsOpen(false);
    }
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
        {navigation.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={handleLinkClick}
            end={item.href === "/dashboard"}
            className={({ isActive }) =>
              cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-charcoal-200 hover:bg-charcoal-800 hover:text-white"
              )
            }
          >
            <item.icon size={20} className="shrink-0" />
            {item.name}
          </NavLink>
        ))}
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

