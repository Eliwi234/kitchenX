import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { login } from "../../services/authService";
import { getLoginSchema } from "./schemas/loginSchema";

type LoginFormValues = {
  email: string;
  password: string;
};

export function LoginPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const loginSchema = useMemo(() => getLoginSchema(t), [t]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async () => {
    await login();
    navigate("/dashboard");
  };

  return (
    <div className="w-full animate-fade-in px-1">
      <div className="mb-10 text-center lg:text-start">
        <h2 className="text-3xl font-extrabold text-text-primary tracking-tight mb-3">
          {t("welcome_back")}
        </h2>
        <p className="text-text-secondary text-base max-w-sm mx-auto lg:mx-0">
          {t("login_subtitle")}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-5">
          <Input
            label={t("email_label")}
            type="email"
            placeholder="admin@kitchenx.com"
            error={errors.email?.message}
            className="h-12 bg-background focus:bg-surface transition-colors duration-300"
            {...register("email")}
          />
          
          <div className="relative">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-text-primary">
                {t("password_label")}
              </label>
              <a href="#" className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                {t("forgot_password")}
              </a>
            </div>
            <Input
              type="password"
              placeholder="••••••••"
              error={errors.password?.message}
              className="h-12 bg-background focus:bg-surface transition-colors duration-300"
              {...register("password")}
            />
          </div>
        </div>

        <Button 
          className="w-full h-12 text-[15px] font-semibold bg-gradient-to-r from-primary-dark to-primary hover:from-primary hover:to-primary-light shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0" 
          isLoading={isSubmitting}
        >
          {t("sign_in")}
        </Button>
      </form>
    </div>
  );
}

