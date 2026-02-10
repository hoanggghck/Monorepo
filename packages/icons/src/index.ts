import {
  Plus,
  LayoutDashboard,
  Building2,
  Users,
  ClipboardList,
  Settings,
  Mail,
  BookMarked,
  LogOut,
  Menu,
  X,
  AlertCircle,
  DollarSign,
  TrendingUp,
  FileText,
  CheckCircle,
  Clock,
  Shield,
  Edit2,
  Send,
  Search,
  CheckSquare2,
  Calendar,
  Bell,
  MessageCircle,
  LogIn,
  ArrowUpRight,
  TrendingDown,
  ArrowDownRight,
  Filter,
  Download,
  Briefcase,
  BarChart3,
  Zap,
  Eye,
} from "lucide-react"

import type { LucideIcon, LucideProps } from "lucide-react"
import React from "react";

const withIcon = (Icon: LucideIcon) => {
  return ({ size = 20, ...props }: LucideProps) =>
    React.createElement(Icon, { size, ...props });
}

export const IconPlus = withIcon(Plus)
export const IconLayoutDashboard = withIcon(LayoutDashboard)
export const IconBuilding2 = withIcon(Building2)
export const IconUsers = withIcon(Users)
export const IconClipboardList = withIcon(ClipboardList)
export const IconSettings = withIcon(Settings)
export const IconMail = withIcon(Mail)
export const IconBookMarked = withIcon(BookMarked)
export const IconLogOut = withIcon(LogOut)
export const IconMenu = withIcon(Menu)
export const IconX = withIcon(X)
export const IconAlertCircle = withIcon(AlertCircle)
export const IconDollarSign = withIcon(DollarSign)
export const IconTrendingUp = withIcon(TrendingUp)
export const IconFileText = withIcon(FileText)
export const IconCheckCircle = withIcon(CheckCircle)
export const IconClock = withIcon(Clock)
export const IconShield = withIcon(Shield)
export const IconEdit2 = withIcon(Edit2)
export const IconSend = withIcon(Send)
export const IconSearch = withIcon(Search)
export const IconCheckSquare = withIcon(CheckSquare2)
export const IconCalendar = withIcon(Calendar)
export const IconBell = withIcon(Bell)
export const IconMessageCircle = withIcon(MessageCircle);
export const IconLogIn = withIcon(LogIn);
export const IconArrowUpRight = withIcon(ArrowUpRight);
export const IconTrendingDown = withIcon(TrendingDown);
export const IconArrowDownRight = withIcon(ArrowDownRight);
export const IconFilter = withIcon(Filter);
export const IconDownload = withIcon(Download);
export const IconBriefcase = withIcon(Briefcase);
export const IconBarChart3 = withIcon(BarChart3);
export const IconZap = withIcon(Zap);
export const IconEye = withIcon(Eye);