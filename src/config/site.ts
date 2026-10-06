export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "MR. RECORDS Wiki",
  shortName: "MR. RECORDS",
  logoText: "MR",
  tagline: "Levels, Music & Rhythm Guide",
  description: "Discover MR. RECORDS guides, levels, music, record shop tips, gameplay mechanics, characters, platforms, release updates, and everything you need to know.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mr-records.wiki",
  supportEmail: "support@mr-records.wiki",
  gameUrl: "https://store.steampowered.com/app/3053470/MR_RECORDS/",
  heroVideoId: "4fVut9TBncY", // MR. RECORDS | Steam Next Fest Demo Trailer (Wired Productions)
  social: {
    discord: "https://discord.gg/DwTqJRqcJD",
    youtube: "https://www.youtube.com/c/WiredP",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
