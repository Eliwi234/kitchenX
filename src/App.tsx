import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { AuthLayout } from "./features/auth/AuthLayout";
import { LoginPage } from "./features/auth/LoginPage";
import { MainLayout } from "./components/Layout/MainLayout";
import { DashboardPage } from "./features/dashboard/DashboardPage";
import { useUIStore } from "./store/useUIStore";

import { ChefsPage } from "./features/chefs/ChefsPage";
import { ChefsAccountsPage } from "./features/chefs/ChefsAccountsPage";
import { ChefsDocumentsPage } from "./features/chefs/ChefsDocumentsPage";
import { ChefsKitchenStatusPage } from "./features/chefs/ChefsKitchenStatusPage";
import { ChefsMealsPage } from "./features/chefs/ChefsMealsPage";
import { ChefsSettlementsPage } from "./features/chefs/ChefsSettlementsPage";
import { DriversPage } from "./features/drivers/DriversPage";
import { DriversAccountsPage } from "./features/drivers/DriversAccountsPage";
import { DriversDocumentsPage } from "./features/drivers/DriversDocumentsPage";
import { DriversTrackingPage } from "./features/drivers/DriversTrackingPage";
import { DriversProfitsPage } from "./features/drivers/DriversProfitsPage";
import { CustomersPage } from "./features/customers/CustomersPage";
import { CustomersAccountsPage } from "./features/customers/CustomersAccountsPage";
import { CustomersCouponsPage } from "./features/customers/CustomersCouponsPage";
import { CustomersCartsPage } from "./features/customers/CustomersCartsPage";
import { CouponsPage } from "./features/coupons/CouponsPage";
import { ReportsPage } from "./features/reports/ReportsPage";
import { SettingsPage } from "./features/settings/SettingsPage";
import { SettingsReviewsPage } from "./features/settings/SettingsReviewsPage";
import { SettingsPerformancePage } from "./features/settings/SettingsPerformancePage";
import { SettingsAuditLogsPage } from "./features/settings/SettingsAuditLogsPage";
import { SettingsDisputesPage } from "./features/settings/SettingsDisputesPage";
import { SettingsGeneralPage } from "./features/settings/SettingsGeneralPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      { path: "chefs", element: <ChefsPage /> },
      { path: "chefs/accounts", element: <ChefsAccountsPage /> },
      { path: "chefs/documents", element: <ChefsDocumentsPage /> },
      { path: "chefs/kitchen-status", element: <ChefsKitchenStatusPage /> },
      { path: "chefs/meals", element: <ChefsMealsPage /> },
      { path: "chefs/settlements", element: <ChefsSettlementsPage /> },
      { path: "drivers", element: <DriversPage /> },
      { path: "drivers/accounts", element: <DriversAccountsPage /> },
      { path: "drivers/documents", element: <DriversDocumentsPage /> },
      { path: "drivers/tracking", element: <DriversTrackingPage /> },
      { path: "drivers/profits", element: <DriversProfitsPage /> },
      { path: "customers", element: <CustomersPage /> },
      { path: "customers/accounts", element: <CustomersAccountsPage /> },
      { path: "customers/coupons", element: <CustomersCouponsPage /> },
      { path: "customers/carts", element: <CustomersCartsPage /> },
      { path: "coupons", element: <CouponsPage /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "settings/reviews", element: <SettingsReviewsPage /> },
      { path: "settings/performance", element: <SettingsPerformancePage /> },
      { path: "settings/audit-logs", element: <SettingsAuditLogsPage /> },
      { path: "settings/disputes", element: <SettingsDisputesPage /> },
      { path: "settings/general", element: <SettingsGeneralPage /> },
    ],
  },
]);

import i18next from "i18next";

export default function App() {
  const { theme, language } = useUIStore();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;


    root.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    root.setAttribute("lang", language);
    body.setAttribute("dir", language === "ar" ? "rtl" : "ltr");


    i18next.changeLanguage(language);

  }, [language]);

  return <RouterProvider router={router} />;
}
