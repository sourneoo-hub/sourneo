import {
  Globe,
  QrCode,
  FileText,
  PenTool,
  IdCard,
  Images,
  PencilLine,
  Headset,
  Smartphone,
  Zap,
  Sparkles,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import type { ReasonIconName, ServiceIconName } from "@/lib/constants";

export const SERVICE_ICONS: Record<ServiceIconName, LucideIcon> = {
  globe: Globe,
  qr: QrCode,
  cv: FileText,
  logo: PenTool,
  card: IdCard,
  social: Images,
  content: PencilLine,
  support: Headset,
};

export const REASON_ICONS: Record<ReasonIconName, LucideIcon> = {
  mobile: Smartphone,
  fast: Zap,
  design: Sparkles,
  contact: MessageCircle,
};
