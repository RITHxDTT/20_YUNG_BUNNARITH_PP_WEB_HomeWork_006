import React from 'react'
import CustomerHomepageCardComponent from './_component/CustomerHomepageCardComponent'
import ProductHomepageCardComponent from './_component/ProductHomepageCardComponent'
import { AppSidebar } from '@/components/app-sidebar'
import Link from "next/link";
import ProductDetails from './_component/ProductDetails';
import UserCardDetail from './_component/UserCardDetail';

export default function page() {
  return (
    <div className="flex w-[1600px] h-[1000px] gap-10  justify-center items-center">


      <Link href="/product"> <ProductHomepageCardComponent /> </Link>
      <Link href="/customer">   <CustomerHomepageCardComponent /> </Link>


    </div>

  )

  // return (
  //   <div>
  //     <ProductDetails/>
  //   </div>
  // )

  // return(
  //   <div>
  //     <UserCardDetail/>
  //   </div>
  // )
}
