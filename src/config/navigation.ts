import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
}

// 导航将在后续阶段按 MR. RECORDS 内容重建，本阶段清空。
export const NAVIGATION_CONFIG: readonly NavigationItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
