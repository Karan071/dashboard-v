import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";


const data = {
  user: {
    name: "Karan",
    email: "karan@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Admin Dashboard",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],

  navMain: [
    {
      title: "Explorers",
      url: "/explorers",
      isSingleLink: true,
      isActive: true,
      icon: Map,
    },
    {
      title: "Coaches",
      url: "/coaches",
      isSingleLink: true,
      isActive: true,
      icon: Bot,
    },
    {
      title: "Organisations",
      url: "/organisations",
      isSingleLink: true,
      isActive: true,
      icon: Frame,
    },
    {
      title: "Approvals",
      url: "/approvals",
      isSingleLink: true,
      isActive: true,
      icon: Settings2,
    },
    {
      title: "Products",
      items: [
        { content: "Assessments", url: "/assessments", icon: BookOpen },
        { content: "Sessions", url: "/sessions", icon: SquareTerminal },
        { content: "Sessions Pool", url: "/sessions-pool", icon: PieChart },
      ],
      isActive: true,
      icon: GalleryVerticalEnd,
    },
    {
      title: "Access Code",
      url: "/access-code",
      isSingleLink: true,
      isActive: false,
      icon: Command,
    },
    {
      title: "CMS",
      items: [
        { content: "Insights", url: "/insights", icon: PieChart },
        {
          content: "Videos Library",
          url: "/videoLibrary",
          icon: AudioWaveform,
        },
        { content: "In the News", url: "/inTheNews", icon: BookOpen },
        { content: "Testimonials", url: "/testimonials", icon: SquareTerminal },
        { content: "Libraries", url: "/libraries", icon: Frame },
        { content: "Online Surveys", url: "/surveys", icon: Settings2 },
        { content: "Help Articles", url: "/helpArticles", icon: Bot },
        { content: "FAQs", url: "/faqspages", icon: Map },
        {
          content: "Team Members",
          url: "/teamDirectory",
          icon: GalleryVerticalEnd,
        },
      ],
      isActive: true,
      icon: BookOpen,
    },
    {
      title: "Enquiries",
      items: [
        { content: "Callback", url: "/callback", icon: AudioWaveform },
        {
          content: "Chat Requests",
          url: "/chat-requests",
          icon: SquareTerminal,
        },
        { content: "Career Enquiries", url: "/career-enquiries", icon: Bot },
        { content: "CareerLabs", url: "/careerlabs", icon: Frame },
        { content: "Partners", url: "/partners", icon: PieChart },
      ],
      isActive: false,
      icon: Settings2,
    },
    {
      title: "User Reports",
      items: [
        { content: "Reviews", url: "/reviews", icon: BookOpen },
        { content: "Feedbacks", url: "/feedbacks", icon: SquareTerminal },
        { content: "Problems", url: "/problems", icon: Bot },
        { content: "Bugs", url: "/bugs", icon: Frame },
        { content: "Abuses", url: "/abuses", icon: PieChart },
      ],
      isActive: true,
      icon: Map,
    },
    {
      title: "Finance",
      items: [
        { content: "Payments", url: "/financePayments", icon: AudioWaveform },
        { content: "Payout", url: "/financePayouts", icon: SquareTerminal },
        { content: "Commissions", url: "/financeCommissions", icon: Bot },
      ],
      isActive: true,
      icon: Settings2,
    },
    {
      title: "Notifications",
      items: [
        { content: "Web / App", url: "/notifications-web", icon: BookOpen },
        {
          content: "WhatsApp",
          url: "/notifications-whatsapp",
          icon: SquareTerminal,
        },
        { content: "Email", url: "/notifications-email", icon: Bot },
      ],
      isActive: false,
      icon: Frame,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
