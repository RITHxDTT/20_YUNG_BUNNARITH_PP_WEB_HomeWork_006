import { DataTable } from "@/components/data-table"; 
import { columns } from "./columns";
import { Search } from "lucide-react";

import getAllCustomer from "../_Service/customer";

export default async function CustomerPage() {
  const customer = await getAllCustomer();
  return (
    <div className="p-10 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#1e293b]">List of All Customer</h1>
          
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search/>
            </span>
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-2xl w-72 bg-[#f8fafc] focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
            />
          </div>
        </div>
       
        <DataTable columns={columns} data={customer} />
      </div>
    </div>
  );
}