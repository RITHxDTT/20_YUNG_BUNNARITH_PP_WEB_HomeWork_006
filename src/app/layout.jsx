import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import { AppSidebar } from "../components/app-sidebar"
import { TooltipProvider } from "../components/ui/tooltip"
import "./globals.css"
import {Noto_Sans} from "next/font/google"

const notoSan = Noto_Sans({
  subsets: ["latin"],
  weight: ['400', '700']
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={notoSan.className}>
        <TooltipProvider>
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger className="hover:cursor-pointer" />
              {children}
            </main>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}