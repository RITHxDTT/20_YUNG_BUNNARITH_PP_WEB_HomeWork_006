import React from 'react'
import CustomerHomepageCardComponent from './_component/CustomerHomepageCardComponent'
import ProductHomepageCardComponent from './_component/ProductHomepageCardComponent'
import { AppSidebar } from '@/components/app-sidebar'

export default function page() {
  return (
    <div className="flex w-[1600px] h-[1000px] gap-10 border-2 justify-center items-center">

      {/* <div className="p-10 flex gap-10 justify-center">
        <CustomerHomepageCardComponent />
        <ProductHomepageCardComponent />
        
      </div> */}
      {/* <Button/> */}
   
      <CustomerHomepageCardComponent/>
      <ProductHomepageCardComponent/>
    </div>

  )
}
