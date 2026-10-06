import type { LucideIcon } from "lucide-react";
import { BookOpen, Disc3, Clapperboard, Users, MonitorPlay, CalendarDays } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

// 导航分类来自关键词聚类产物（关键词.json 的 categories），
// 与 content/<locale>/ 下的文章子目录名、content.ts 的 GROUP_TITLES / GROUP_ORDER 一一对应。
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Disc3, isContentType: true },
  { key: "features", path: "/features", icon: Clapperboard, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "platforms", path: "/platforms", icon: MonitorPlay, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
