import { Bell, Search, Globe, Moon, Sun, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store/useAppStore";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { theme, toggleTheme, language, toggleLanguage } = useAppStore();
  const { t } = useTranslation();

  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-8 bg-surface border-b border-border transition-colors duration-300">
      <div className="flex items-center gap-2 flex-1 max-w-xl relative">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 -ms-2 text-text-secondary hover:text-text-primary transition-colors"
        >
          <Menu size={24} />
        </button>
        <div className="hidden sm:block relative w-full h-full">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
          <input
            type="text"
            placeholder={t("search_placeholder")}
            className="w-full ps-10 pe-4 py-2 bg-background border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-text-secondary"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6 ms-4">
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-semibold"
          title="Toggle Language"
        >
          <Globe size={20} />
          <span className="hidden sm:inline">{language === "en" ? "العربية" : "English"}</span>
        </button>

        <button 
          onClick={toggleTheme}
          className="text-text-secondary hover:text-text-primary transition-colors"
          title="Toggle Theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <button className="relative text-text-secondary hover:text-text-primary transition-colors">
          <Bell size={20} />
          <span className="absolute top-0 end-0 w-2 h-2 bg-red-500 rounded-full border border-surface"></span>
        </button>
        
        <div className="flex items-center gap-3 ps-6 border-s border-border">
          <div className="text-end hidden md:block">
            <p className="text-sm font-semibold text-text-primary leading-none">{t("admin_name")}</p>
            <p className="text-xs text-text-secondary mt-1">lana@kitchenx.com</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-primary-light flex items-center justify-center text-primary-dark font-bold border border-primary-light">
            L
          </div>
        </div>
      </div>
    </header>
  );
}
