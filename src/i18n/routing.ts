import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ja", "es", "ko"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
