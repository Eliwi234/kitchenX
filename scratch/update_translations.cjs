const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, '../src/locales/en.json');
const arPath = path.join(__dirname, '../src/locales/ar.json');

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const arData = JSON.parse(fs.readFileSync(arPath, 'utf8'));

const newTranslations = {
  chefs_overview_title: { en: "Chefs Overview", ar: "نظرة عامة على الطهاة" },
  chefs_overview_desc: { en: "High-level summary of home chefs.", ar: "ملخص عالي المستوى للطهاة المنزليين." },
  total_active_chefs: { en: "Total Active Chefs", ar: "إجمالي الطهاة النشطين" },
  average_rating: { en: "Average Rating", ar: "متوسط التقييم" },
  across_reviews: { en: "Across 12,000+ reviews", ar: "من خلال أكثر من 12000 مراجعة" },
  top_performing_chefs: { en: "Top Performing Chefs", ar: "أفضل الطهاة أداءً" },
  chef_name: { en: "Chef Name", ar: "اسم الطاهي" },
  rating: { en: "Rating", ar: "التقييم" },
  total_revenue: { en: "Total Revenue", ar: "إجمالي الإيرادات" },
  this_month: { en: "this month", ar: "هذا الشهر" },

  general_settings_title: { en: "General Settings", ar: "الإعدادات العامة" },
  general_settings_desc: { en: "Configure global platform settings and fees.", ar: "تكوين إعدادات ورسوم المنصة العالمية." },
  platform_name: { en: "Platform Name", ar: "اسم المنصة" },
  support_email: { en: "Support Email", ar: "البريد الإلكتروني للدعم" },
  chef_platform_fee: { en: "Chef Platform Fee (%)", ar: "رسوم منصة الطاهي (%)" },
  driver_base_fee: { en: "Driver Base Fee (AED)", ar: "الرسوم الأساسية للمندوب (درهم)" },
  maintenance_mode: { en: "Maintenance Mode", ar: "وضع الصيانة" },
  disable_customer_access: { en: "Disable customer app access", ar: "تعطيل وصول العملاء للتطبيق" },
  save_changes: { en: "Save Changes", ar: "حفظ التغييرات" },

  reviews_ratings_title: { en: "Reviews & Ratings", ar: "المراجعات والتقييمات" },
  reviews_ratings_desc: { en: "Moderate customer feedback across the platform.", ar: "مراقبة ملاحظات العملاء عبر المنصة." },
  target: { en: "Target", ar: "الهدف" },
  comment: { en: "Comment", ar: "التعليق" },

  settlements_payouts_title: { en: "Settlements & Payouts", ar: "التسويات والمدفوعات" },
  settlements_payouts_desc: { en: "Review chef earnings and manage bank transfers.", ar: "مراجعة أرباح الطهاة وإدارة التحويلات البنكية." },
  export_csv: { en: "Export CSV", ar: "تصدير CSV" },
  total_earned: { en: "Total Earned", ar: "إجمالي الأرباح" },
  platform_fee_col: { en: "Platform Fee", ar: "رسوم المنصة" },
  net_payout: { en: "Net Payout", ar: "الصافي المدفوع" },
};

for (const [key, val] of Object.entries(newTranslations)) {
  enData.translation[key] = val.en;
  arData.translation[key] = val.ar;
}

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
fs.writeFileSync(arPath, JSON.stringify(arData, null, 2));
console.log('Translations updated.');
