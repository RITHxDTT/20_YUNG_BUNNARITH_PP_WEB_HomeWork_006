"use client";
import { Eye, Calendar } from "lucide-react";
import Link from "next/link";

export const columns = [
  {
    header: "Customer Name",
    accessorFn: row => `${row.firstName} ${row.lastName}`,
    cell: ({ row }) => (
      <div className="py-2">
        <div className="font-bold text-[#1e293b] text-base">
          {row.original.firstName} {row.original.lastName}
        </div>
        <div className="text-[11px] text-gray-400 uppercase tracking-tighter">
          ID: {row.original.customerId}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "birthDate",
    header: "Birthdate",
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-gray-500">
        <span className="text-xs"><Calendar /></span>
        <span className="text-sm">{row.original.birthDate}</span>
      </div>
    ),
  },
  {
    accessorKey: "moneySpent",
    header: "Amount Spent",
    cell: ({ row }) => (
      <div className="font-bold text-[#10b981] text-lg">
        ${row.original.moneySpent}
      </div>
    ),
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => ( 
      <Link
        href={`/customer/${row.original.customerId}`}
        className="border border-gray-300 px-5 py-1.5 rounded-full flex items-center gap-2 text-sm text-[#1e293b] hover:bg-gray-50 transition-all shadow-sm"
      >
        <Eye /> View Profile
      </Link>
    ),
  },
];