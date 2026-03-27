import React from 'react'
import CustomerHomepageCardComponent from './_component/CustomerHomepageCardComponent'
import ProductHomepageCardComponent from './_component/ProductHomepageCardComponent'
import { AppSidebar } from '@/components/app-sidebar'
import Link from "next/link";
import ProductDetails from './_component/ProductDetails';
import UserCardDetail from './_component/UserCardDetail';

export default function page() {
  return (
    <div className="flex mt-[-70%] gap-10 justify-center items-center">
      <Link href="/product"> <ProductHomepageCardComponent /> </Link>
      <Link href="/customer">   <CustomerHomepageCardComponent /> </Link>

    </div>

  )


}
