"use client"

import * as React from "react"
import {
    Calendar,
    Home,
    MessageCircle,
    Settings,
    User,
    LogOut,
    BrainCircuit
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarSeparator,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Overview",
        id: "overview",
        icon: Home,
    },
    {
        title: "Book Therapy",
        id: "booking",
        icon: Calendar,
    },
    {
        title: "Peer Network",
        id: "network",
        icon: MessageCircle,
    },
    {
        title: "Profile",
        id: "profile",
        icon: User,
    },
    {
        title: "Settings",
        id: "settings",
        icon: Settings,
    },
]

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    currentView: string
    onViewChange: (view: string) => void
}

export function AppSidebar({ currentView, onViewChange, ...props }: AppSidebarProps) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" onClick={() => onViewChange("overview")}>
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                <BrainCircuit className="size-4" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">MindWell</span>
                                <span className="truncate text-xs">Mental Health Hub</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        isActive={currentView === item.id}
                                        onClick={() => onViewChange(item.id)}
                                        tooltip={item.title}
                                    >
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="text-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20">
                            <LogOut />
                            <span>Sign Out</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
