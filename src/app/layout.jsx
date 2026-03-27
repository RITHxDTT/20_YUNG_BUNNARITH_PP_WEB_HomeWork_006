import {  SidebarTrigger, SidebarProvider } from "../components/ui/sidebar"
import { AppSidebar,  } from "../components/app-sidebar"
import "./globals.css"
import {Noto_Sans} from "next/font/google"
import TopBar from "./_component/TopBar"

const notoSan = Noto_Sans({
  subsets: ["latin"],
  weight: ['400', '700']
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={notoSan.className}>
        <TopBar/> 
      
          <SidebarProvider>
            <AppSidebar  />
            <main>
              <SidebarTrigger className="hover:cursor-pointer text-[50px]" />
              {children}
            </main>
          </SidebarProvider>
     
      </body>
    </html>
  )
}