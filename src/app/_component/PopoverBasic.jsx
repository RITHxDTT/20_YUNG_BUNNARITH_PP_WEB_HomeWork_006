import { Button } from "@/components/ui/button"
import { AvatarDemo } from "./AvatarDemo"
import { User } from "lucide-react"
import Link from "next/link"
import { Settings, Receipt } from "lucide-react"

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverBasic({className}) {
  return (
    <div className={className}>
      <Popover>
      <PopoverTrigger asChild>
       
        <AvatarDemo />
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[200px] mt-[15%] shadow-[1px_3px_5px_0.5px]">
        <PopoverHeader>
          {/* <PopoverTitle>Dimensions</PopoverTitle> */}
          <PopoverDescription className="w-[170px]  flex flex-col justify-around">
            <div className=" ml-[20px] flex flex-col  h-[70px]  justify-center">
              <p className="text-[18px] font-bold">Admin User</p>
              <p>admin@hrdshop.com</p>
            </div>

            <Link href="/" className="hover:cursor-pointer flex items-center gap-2 p-[8px] w-[160px] hover:bg-[#cfcdcd] hover:text-[white] rounded-[10px]">
              <User /> My Profile
            </Link>
            <Link href="/" className="hover:cursor-pointer flex items-center gap-2 p-[8px] w-[160px] hover:bg-[#cfcdcd] hover:text-[white] rounded-[10px]">
              <Receipt /> Billing
            </Link>
            <Link href="/" className="hover:cursor-pointer flex items-center gap-2 p-[8px] w-[160px] hover:bg-[#cfcdcd] hover:text-[white] rounded-[10px]">
              <Settings /> Setting
            </Link>
          
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
    </div>
   
  )
}
