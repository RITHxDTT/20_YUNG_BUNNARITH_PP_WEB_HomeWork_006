import React from 'react'
import { BellDot, ShoppingCart } from 'lucide-react'
// import { AvatarBadge } from '@/components/ui/avatar'
import { PopoverBasic } from './PopoverBasic'

export default function TopBar() {
    return (
        <div className='w-full  justify-end h-[80px] flex mt-[15px] pe-[15px] '>
            <div className='flex justify-between items-center  w-[400px] '>
                {/* icon */}
                <div className='flex w-[120px] justify-around '>
                    <BellDot size={30}/>
                    <ShoppingCart size={30} />
                </div>
                <div className='border-r-2 h-[60px]'>

                </div>
                <div className=' w-[200px] flex  items-center-safe gap-5 rounded-[25px] bg-[#ece5e5]'>

                    <PopoverBasic className="hover:cursor-pointer"/>
                    <div className='flex flex-col'>
                        <p className='font-bold text-[18px]'>
                            Admin User
                        </p>
                        <p className='text-[#b3aeae]'>
                            KSHRD
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
