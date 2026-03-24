import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import { AppSidebar } from "../components/app-sidebar"
import { TooltipProvider } from "../components/ui/tooltip"
import "./globals.css"

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}