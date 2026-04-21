import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    navigate("/dashboard");
  };

  return (
    <div className="w-full animate-fade-in">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-text-primary tracking-tight mb-3">
          {t("welcome_back")}
        </h2>
        <p className="text-text-secondary text-base">
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
          className="w-full h-12 text-[15px] font-semibold bg-gradient-to-r from-primary-dark to-primary hover:from-primary hover:to-primary-light shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5" 
          isLoading={isSubmitting}
        >
          {t("sign_in")}
        </Button>
      </form>
      
    </div>
  );
}
