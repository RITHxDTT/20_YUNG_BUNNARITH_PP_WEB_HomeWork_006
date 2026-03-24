import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
} from "./ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div class="flex w-[100%] border-[1px] gap-5">
          <div class="w-[40px] h-[40px] bg-[#8ff5f8] rounded-[10px]">

          </div>
          <div class="flex flex-col">
            <p class="font-[700] text-[17px] text-[#18f4fc]">HRD SHOP</p>
            <p className="text-[12px] text-[gray]">ADMIN V2.0</p>
          </div>

        </div>
      </SidebarHeader>
      
        <SidebarContent class=" flex justify-center items-center">
        <p class="text-[gray]">Main menu</p>
      </SidebarContent>
      <SidebarMenuItem>
        product
      </SidebarMenuItem>
      {/* <SidebarContent>
       
        <SidebarGroup />
        
      </SidebarContent>
      <SidebarFooter /> */}
    </Sidebar>
  )
}