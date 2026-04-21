import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { AuthLayout } from "./features/auth/AuthLayout";
import { LoginPage } from "./features/auth/LoginPage";
import { MainLayout } from "./components/Layout/MainLayout";
import { DashboardPage } from "./features/dashboard/DashboardPage";
import { useAppStore } from "./store/useAppStore";

import { ChefsPage } from "./features/chefs/ChefsPage";
import { DriversPage } from "./features/drivers/DriversPage";
import { CustomersPage } from "./features/customers/CustomersPage";
import { CouponsPage } from "./features/coupons/CouponsPage";
import { ReportsPage } from "./features/reports/ReportsPage";
import { SettingsPage } from "./features/settings/SettingsPage";

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
      { path: "drivers", element: <DriversPage /> },
      { path: "customers", element: <CustomersPage /> },
      { path: "coupons", element: <CouponsPage /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);

import i18next from "i18next";

export default function App() {
  const { theme, language } = useAppStore();

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
    
    // Set attributes on both for maximum compatibility
    root.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    root.setAttribute("lang", language);
    body.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    
    // Update i18n
    i18next.changeLanguage(language);
    
  }, [language]);

  return <RouterProvider router={router} />;
}
