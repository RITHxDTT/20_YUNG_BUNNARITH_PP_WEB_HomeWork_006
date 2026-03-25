import React from 'react'
import { Star, MoveUpRight } from 'lucide-react'

export default function Productcomponent({product}) {
    return (
        <div className="   w-[350px] h-[600px] flex flex-col rounded-2xl border-1 border-[gray] justify-between">
            {/* img */}
            <div className="w-[100%] h-[300px] rounded-t-2xl flex flex-col bg-[black] bg-cover bg-center">
                <div className='flex flex-col p-[15px] gap-4'>
                    <div className='text-[white] font-bold '>
                        NEW
                    </div>
                    <div className='flex gap-2 bg-[white] w-[70px] justify-center items-center rounded-[15px] p-[5px]'>
                        <Star className='text-[yellow] fill-[yellow]' /> <p className='text-[gray] font-bold'>4.5</p>
                    </div>
                </div>
            </div>

            <div className='p-[15px] flex flex-col gap-3'>
                <div className='w-[100%] flex justify-between '>
                    <p className='text-[blue] font-bold'> FLAGSHIP SERIES</p>
                    <p className='font-bold text-[18px]'>
                        ${product.price}
                    </p>
                </div>
                {/* prod name */}
                <div className='font-bold text-[23px]'>
                    {product.name}
                </div>

                <div>
                   {product.title}
                </div>

                <div className=' hover:cursor-pointer w-[100%] text-white font-bold h-[45px] flex justify-center items-center bg-[#0a023d] rounded-2xl'>
                    <p className='flex items-center justify-center gap-3'>
                        View Product <MoveUpRight />
                    </p>
                </div>
            </div>
        </div>
    )
}
