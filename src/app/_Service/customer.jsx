import React from 'react'

export async function getAllCustomer() {
    const response = await fetch("https://homework-api.noevchanmakara.site/api/v1/customers");
    const data = await response.json();
    return data.payload;
}

export default getAllCustomer;


export async function getCustomerById(id) {
  const response = await fetch(
    `https://homework-api.noevchanmakara.site/api/v1/customers/${id}`
  );
  const data = await response.json();
  return data.payload;
}

