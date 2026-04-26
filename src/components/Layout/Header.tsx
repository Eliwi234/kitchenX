import { Bell, Search, Moon, Sun, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useUIStore } from "../../store/useUIStore";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { theme, toggleTheme, language, setLanguage } = useUIStore();
  const { t } = useTranslation();

  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-6 md:px-8 bg-surface border-b border-border transition-colors duration-300 sticky top-0 z-30">
      <div className="flex items-center gap-2 flex-1 max-w-xl relative">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 -ms-2 text-text-secondary hover:text-text-primary transition-colors focus:outline-none"
        >
          <Menu size={24} />
        </button>
        <div className="hidden sm:block relative w-full h-full">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
          <input
            type="text"
            placeholder={t("search_placeholder")}
            className="w-full ps-10 pe-4 py-2 bg-background border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-text-secondary"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-5 ms-4">
        <div className="inline-flex items-center rounded-lg border border-border bg-background p-1">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`px-2.5 py-1 text-xs sm:text-sm font-semibold rounded-md transition-colors ${
              language === "en"
                ? "bg-primary text-white"
                : "text-text-secondary hover:text-text-primary"
            }`}
            aria-pressed={language === "en"}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("ar")}
            className={`px-2.5 py-1 text-xs sm:text-sm font-semibold rounded-md transition-colors ${
              language === "ar"
                ? "bg-primary text-white"
                : "text-text-secondary hover:text-text-primary"
            }`}
            aria-pressed={language === "ar"}
          >
            AR
          </button>
        </div>

        <button 
          onClick={toggleTheme}
          className="p-2 text-text-secondary hover:text-text-primary transition-colors"
          title="Toggle Theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <button className="p-2 relative text-text-secondary hover:text-text-primary transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 end-2 w-2 h-2 bg-red-500 rounded-full border-2 border-surface"></span>
        </button>
        
        <div className="flex items-center gap-3 ps-3 sm:ps-5 border-s border-border">
          <div className="text-end hidden xl:block">
            <p className="text-sm font-semibold text-text-primary leading-none">{t("admin_name")}</p>
            <p className="text-[11px] text-text-secondary mt-1 opacity-80 italic">lana@kitchenx.com</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark font-bold border border-primary/20 shadow-sm transition-transform hover:scale-105 cursor-pointer">
            L
          </div>
        </div>
      </div>
    </header>
  );
}

