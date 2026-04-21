import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "dashboard_overview": "Dashboard Overview",
      "dashboard_desc": "Here's what's happening in KitchenX today.",
      "total_sales": "Total Sales",
      "active_chefs": "Active Chefs",
      "pending_orders": "Pending Orders",
      "total_customers": "Total Customers",
      "recent_order_activity": "Recent Order Activity",
      "simulate_order": "+ Simulate Order",
      "view_all": "View All",
      "order_id": "Order ID",
      "customer": "Customer",
      "chef": "Chef",
      "status": "Status",
      "amount": "Amount",
      "date": "Date",
      "actions": "Actions",
      "no_orders": "No orders tracking today.",
      
      "nav_dashboard": "Dashboard",
      "nav_chefs": "Chef Management",
      "nav_drivers": "Driver Management",
      "nav_customers": "Customer Management",
      "nav_coupons": "Coupons & Offers",
      "nav_reports": "Reports",
      "nav_settings": "System Settings",
      "sign_out": "Sign out",

      "search_placeholder": "Search chefs, customers, or orders...",
      "admin_name": "Lana Admin",

      "welcome_back": "Welcome back",
      "login_subtitle": "Enter your credentials to securely access your KitchenX admin operations.",
      "email_label": "Email",
      "password_label": "Password",
      "forgot_password": "Forgot password?",
      "sign_in": "Sign in to Dashboard",
      "validation_email_invalid": "Please enter a valid email address.",
      "validation_password_min": "Password must be at least {{count}} characters.",
      
      "elevate_business": "Elevate your home culinary business.",
      "join_marketplace": "Join the premium marketplace connecting talented home chefs with local food enthusiasts.",
      "trusted_chefs": "Trusted by 2,000+ local chefs"
    }
  },
  ar: {
    translation: {
      "dashboard_overview": "الرئيسية",
      "dashboard_desc": "ملخص النشاط اليومي في منصة KitchenX.",
      "total_sales": "إجمالي المبيعات",
      "active_chefs": "الطهاة النشطون",
      "pending_orders": "الطلبات قيد الانتظار",
      "total_customers": "العملاء المسجلون",
      "recent_order_activity": "أحدث الطلبات",
      "simulate_order": "+ إضافة طلب افتراضي",
      "view_all": "عرض الكل",
      "order_id": "رقم الطلب",
      "customer": "العميل",
      "chef": "الطاهي",
      "status": "الحالة",
      "amount": "المبلغ",
      "date": "التاريخ",
      "actions": "الإجراءات",
      "no_orders": "لا توجد طلبات في الوقت الحالي.",
      
      "nav_dashboard": "الرئيسية",
      "nav_chefs": "إدارة الطهاة",
      "nav_drivers": "إدارة المناديب",
      "nav_customers": "إدارة العملاء",
      "nav_coupons": "الكوبونات والعروض",
      "nav_reports": "التقارير",
      "nav_settings": "إعدادات النظام",
      "sign_out": "تسجيل الخروج",

      "search_placeholder": "ابحث عن طاهٍ، عميل، أو طلب...",
      "admin_name": "لانا (مدير)",

      "welcome_back": "مرحباً بك مجدداً",
      "login_subtitle": "أدخل بيانات الدخول للوصول الآمن إلى لوحة تحكم KitchenX.",
      "email_label": "البريد الإلكتروني",
      "password_label": "كلمة المرور",
      "forgot_password": "نسيت كلمة المرور؟",
      "sign_in": "تسجيل الدخول",
      "validation_email_invalid": "يرجى إدخال بريد إلكتروني صالح.",
      "validation_password_min": "يجب أن تتكون كلمة المرور من {{count}} أحرف على الأقل.",
      
      "elevate_business": "ارتقِ بأعمال الطهي المنزلية إلى مستوى آخر.",
      "join_marketplace": "انضم إلى المنصة الرائدة التي تربط أمهر الطهاة بعشاق الطعام.",
      "trusted_chefs": "يثق بنا أكثر من 2000 طاهٍ محلي"
    }
  }
};

const hasStorage = typeof window !== "undefined" && typeof window.localStorage !== "undefined";
const storedData = hasStorage ? window.localStorage.getItem('kitchenx-storage') : null;
let defaultLng = 'en';
if (storedData) {
  try {
    const parsed = JSON.parse(storedData);
    if (parsed?.state?.language) {
      defaultLng = parsed.state.language;
    }
  } catch {
    defaultLng = "en";
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLng,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
