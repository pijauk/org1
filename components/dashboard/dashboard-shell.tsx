"use client"

import { useState } from "react"
import { AppSidebar } from "./app-sidebar"
import { OverviewView } from "./overview-view"
import { BookingView } from "./booking-view"
import { PeerNetworkView } from "./peer-network-view"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { ModeToggle } from "@/components/mode-toggle"

export function DashboardShell() {
    const [view, setView] = useState("overview")

    const renderView = () => {
        switch (view) {
            case "overview":
                return <OverviewView />
            case "booking":
                return <BookingView />
            case "network":
                return <PeerNetworkView />
            case "profile":
            case "settings":
                return (
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <div className="flex h-full items-center justify-center p-8 text-muted-foreground border-2 border-dashed rounded-lg">
                            <div className="text-center">
                                <h3 className="text-lg font-medium">Under Construction</h3>
                                <p>This section is coming soon.</p>
                            </div>
                        </div>
                    </div>
                )
            default:
                return <OverviewView />
        }
    }

    const getViewTitle = () => {
        switch (view) {
            case "overview": return "Overview"
            case "booking": return "Book Appointment"
            case "network": return "Peer Network"
            case "profile": return "Profile"
            case "settings": return "Settings"
            default: return "Dashboard"
        }
    }

    return (
        <SidebarProvider>
            <AppSidebar currentView={view} onViewChange={setView} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
                    <div className="flex items-center gap-2 px-4 w-full">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{getViewTitle()}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="ml-auto">
                            <ModeToggle />
                        </div>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-secondary/10 min-h-[calc(100vh-4rem)]">
                    {renderView()}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
