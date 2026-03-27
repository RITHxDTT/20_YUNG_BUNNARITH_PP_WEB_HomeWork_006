"use client";
import { SidebarTrigger, SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import TopBar from "./_component/TopBar";
import { usePathname } from "next/navigation";

const notoSan = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Layout({ children }) {
  const pathname = usePathname();


  const isProductDetail =
    pathname?.startsWith("/product/") && pathname.split("/").length === 3;


  const isCustomerDetail =
    pathname?.startsWith("/customer/") && pathname.split("/").length === 3;

  const hideSidebar = isProductDetail || isCustomerDetail;

  return (
    <html lang="en">
      <body className={notoSan.className}>
        {!hideSidebar && (
          <>
            <TopBar />
            <SidebarProvider>
              <AppSidebar />
              <SidebarTrigger className="hover:cursor-pointer text-[50px]" />
            </SidebarProvider>
          </>
        )}

        {/* Main content */}
        <div className="w-full flex justify-center items-center">
          <main className="w-[1200px]">{children}</main>
        </div>
      </body>
    </html>
  );
}