

import React from "react";
// import UserCardDetail from "../_component/UserCardDetail";
import { notFound } from "next/navigation";
import UserCardDetail from "@/app/_component/UserCardDetail";
import { getCustomerById } from "@/app/_Service/customer";

export default async function CustomerDetailPage({ params }) {
  const { id } = await params;

  const customer = await getCustomerById(id);

  if (!customer) {
    notFound();
  }

  return <UserCardDetail customer={customer} />;
}