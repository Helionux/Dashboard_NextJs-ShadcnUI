import { Home, Inbox, Search, Settings } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import Link from "next/link"

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
     {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
     {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Calendar",
        url: "/",
        icon: Home,
    },
     {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
     
]

const AppSidebar = () => {
    return (
        <Sidebar className="">
            <SidebarHeader>

            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>

            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar