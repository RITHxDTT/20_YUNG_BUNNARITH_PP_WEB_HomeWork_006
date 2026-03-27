import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
} from "./ui/sidebar"
import { ShoppingBag, LayoutList, Users, Layers, Settings } from "lucide-react"
import { SidebarMenu } from "./ui/sidebar"
import { SidebarMenuButton } from "./ui/sidebar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
export function AppSidebar({ className }) {
  return (
    <div className={className}>
      <Sidebar className="pl-[15px] flex flex-col mt-[10px] " >
      <SidebarHeader >
        <div className="flex w-[100%] gap-5 ">
          <div className="w-[40px] h-[40px] bg-[#8ff5f8] rounded-[10px] flex justify-center items-center text-white">
            <ShoppingBag />
          </div>
          <div className="flex flex-col">
            <p className="font-[700] text-[17px] text-[#18f4fc]">HRD SHOP</p>
            <p className="text-[12px] text-[gray]">ADMIN V2.0</p>
          </div>

        </div>
      </SidebarHeader>

      <SidebarGroup className=" h-[850px] mt-[20px]">
        <SidebarContent className="  flex flex-col gap-2 w-100% ">
          <p className="text-[gray]">Main menu</p>
          <div className="  flex flex-col gap-5 w-100% text-[20px] font-bold text-[#575353]">
            <div className=" hover:bg-[#c7f5f7] hover:cursor-pointer hover:text-[black] flex gap-2  items-center w-[95%] h-[50px]  rounded-2xl p-[5px]"> <LayoutList className= " text-[#18f4fc]"> </LayoutList>Product</div>
            <div className="hover:bg-[#c7f5f7] hover:cursor-pointer hover:text-[black] flex gap-2  items-center w-[95%] h-[50px]  rounded-2xl p-[5px]"> <Users className="text-[#18f4fc]" /> customer</div>
            <div className="hover:bg-[#c7f5f7] hover:cursor-pointer hover:text-[black] flex gap-2  items-center w-[95%] h-[50px]  rounded-2xl p-[5px]"> <Layers className="text-[#18f4fc]" /> Categories</div>
            <div className="hover:bg-[#c7f5f7] hover:cursor-pointer hover:text-[black] flex gap-2  items-center w-[95%] h-[50px]  rounded-2xl p-[5px]"><Settings className="text-[#18f4fc]" /> Setting</div>
          </div>
        </SidebarContent>


      </SidebarGroup >

      <SidebarFooter >
        <div className="text-[red] font-bold ">
          Sign Out
        </div>
      </SidebarFooter>
    </Sidebar>
    
    </div>
  )
}