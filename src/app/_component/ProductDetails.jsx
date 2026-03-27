import React from 'react'
import { Heart } from 'lucide-react'
import { Tag } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'
import { GitFork } from 'lucide-react'
import { Plus } from 'lucide-react'
import { Minus } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'

export default function ProductDetails() {
    return (
        <div className='flex justify-center items-center w-[1500px] h-500px]'>
            <div className='flex justify-between w-[1000px] h-[700px] bg-[#f1efef] shadow-[1px_1px_3px_0.2px] rounded-2xl'>
                {/* img side */}
                <div className='rounded-l-2xl w-[450px] h-full flex flex-col p-[20px] bg-[#ebe8e8]'>
                    {/* tag ler */}
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-3'>
                            <div className='text-[white] font-[800] px-4 py-2 rounded-[15px] bg-black'>
                                NEW ARRIVAL
                            </div>
                            <div className='flex justify-center items-center text-[#3838fc] font-[800] px-3 py-1 rounded-[15px] bg-[#9bcdfe] text-[12px] '>
                                <p>FREE SHIPPING</p>
                            </div>
                        </div >
                        {/* icon */}
                        <div className='flex flex-col gap-3'>
                            <div className='p-[10px] rounded-full bg-[#c4c3c3] text-[white]'>
                                <Heart />
                            </div>
                            <div className='p-[10px] rounded-full bg-[#c4c3c3] text-[white]'>
                                <GitFork />
                            </div>
                        </div>
                    </div>
                    {/* img */}
                    <div className='mt-[20%] '>
                        <img src="./computer.jpg" alt="" className='rounded-2xl shadow-2xl' />
                    </div>
                </div>

                <div className=' p-[55px] w-[550px] rounded-r-2xl flex justify-between  flex-col bg-[white]'>
                    <div className='flex hover:text-[gray] hover:cursor-pointer'>
                        <ArrowLeft /> <p>BACK TO PRODUCT</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#32ffff] font-extrabold'>
                            PREMIUM EXPERIENCE
                        </p>
                        <div className='text-[50px] font-[1000] text-[#00005b]'>
                            MacBookPro M5 Pro
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='flex  gap-3 items-center'>
                                <div className='text-[30px] font-extrabold text-[#00005b]'>
                                    $1,500
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-[12px] line-through '>
                                        $1800
                                    </p>
                                    <p className='text-[12px] font-bold text-[#35ff46]'>
                                        SAVE 20% TODAY
                                    </p>
                                </div>

                            </div>
                            <div className='flex gap-5 items-center'>
                                <div className='h-[40px] border-l-2 border-[#30f0fa]'>

                                </div>
                                <div className='text-[gray] text-[20px]'>
                                    String
                                </div>
                            </div>

                            <div className='flex flex-col gap-3 '>
                                <div className='text-[gray] font-bold'>
                                    SELECT QUANTITY
                                </div>
                                <div className='text-[gray]  justify-center items-center gap-5 flex justify-around w-[120px] h-[50px] bg-[#cbc7c7] rounded-2xl'>
                                    <Plus/> 
                                    <p className='text-[25px] text-[#545050] font-extrabold'>1</p>
                                    <Minus/>
                                </div>
                            </div>

                            <div className='flex gap-2 w-full justify-between '>
                                <button className=' px-8 py-2 bg-[black] flex items-center justify-center rounded-[10px] gap-2'>
                                    <ShoppingCart className='text-[white]'/>
                                    <p className='text-[white] text-[20px] font-extrabold'>Add to Cart</p>
                                </button>

                                <button className='border-2 px-3 py-4 bg-[white] flex items-center justify-center rounded-[10px] gap-2'>
                                    <p className=' text-[#03032f] text-[20px] font-extrabold'>Buy Now</p>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
