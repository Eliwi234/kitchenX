import * as z from "zod";
import type { TFunction } from "i18next";

export const getLoginSchema = (t: TFunction) =>
  z.object({
    email: z.string().email(t("validation_email_invalid")),
    password: z
      .string()
      .min(8, t("validation_password_min", { count: 8 })),
  });
