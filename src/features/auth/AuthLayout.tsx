import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";
import logo from "../../assets/logo.png";

export function AuthLayout() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex text-text-primary bg-background selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Left Pane - Image & Brand */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-charcoal-900 border-e border-border/10">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2670")' }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />

        <div className="relative z-20 flex flex-col justify-between p-16 w-full">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="KitchenX Logo" className="h-16 w-auto drop-shadow-md" />
            </div>
          </div>

          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              {t("elevate_business")}
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-12 font-medium">
              {t("join_marketplace")}
            </p>
            
            <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-charcoal-800 object-cover" src="https://i.pravatar.cc/150?img=32" alt="Chef avatar" />
                <img className="w-12 h-12 rounded-full border-2 border-charcoal-800 object-cover" src="https://i.pravatar.cc/150?img=44" alt="Chef avatar" />
                <img className="w-12 h-12 rounded-full border-2 border-charcoal-800 object-cover" src="https://i.pravatar.cc/150?img=60" alt="Chef avatar" />
              </div>
              <div className="ms-2">
                <div className="flex text-primary mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-white font-medium">{t("trusted_chefs")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-24 relative bg-surface overflow-hidden">
        {/* Subtle decorative background blur for form side */}
        <div className="absolute top-0 end-0 -me-32 -mt-32 w-[max(600px,80vw)] h-[max(600px,80vw)] bg-primary-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
        
        <div className="w-full max-w-md mx-auto relative z-10">
          <div className="flex lg:hidden items-center gap-2 mb-10 justify-center">
            <img src={logo} alt="KitchenX Logo" className="h-12 w-auto drop-shadow-sm" />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

