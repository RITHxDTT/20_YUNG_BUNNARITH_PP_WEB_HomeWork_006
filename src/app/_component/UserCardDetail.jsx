import React from 'react';
import { User, Calendar, Wallet, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const UserCardDetail = () => {
    return (
        <div className="flex items-center justify-center min-h-screen  p-[24px]">

  
            <div className="flex bg-white shadow-2xl w-[850px] h-[500px] rounded-[40px]">

            
                <div className="w-[300px] border-r border-[#f1f5f9] flex flex-col items-center justify-center bg-[#fcfdfe] rounded-l-[40px]">

                    <div className="w-[140px] h-[140px] mb-[24px] bg-[#e2e8f0] rounded-full flex items-center justify-center shadow-inner">
                        <User size={70} className="text-gray-400" />
                    </div>

                    <h2 className="text-[28px] font-[900] text-[#1e293b]">
                        Kok Daro
                    </h2>
                </div>

       
                <div className="flex-1 p-[48px]">

             
                    <Link href="/customer" className="text-[11px] font-bold flex items-center gap-[8px] tracking-[2px] text-[#94a3b8] uppercase mb-[40px] hover:text-slate-600 transition-colors">
                        <ArrowLeft size={14} /> BACK TO CUSTOMER TABLE
                    </Link>

               
                    <div className="flex flex-wrap gap-y-[40px] mb-[48px]">

                
                        <div className="w-[220px]">
                            <p className="text-[10px] font-bold tracking-[1px] text-[#94a3b8] uppercase mb-[10px]">Full Name</p>
                            <div className="flex items-center gap-[8px]">
                                <User size={18} className="text-orange-400" />
                                <span className="font-[800] text-[#334155]">Kok Daro</span>
                            </div>
                        </div>

                        {/* Total Spent */}
                        <div className="w-[220px]">
                            <p className="text-[10px] font-bold tracking-[1px] text-[#94a3b8] uppercase mb-[10px]">Total Spent</p>
                            <div className="flex items-center gap-[8px]">
                                <div className="p-[4px] bg-[#ecfdf5] rounded-[4px] text-[#10b981] flex">
                                    <Wallet size={16} />
                                </div>
                                <span className="text-[24px] font-[900] text-[#1e293b]">$75</span>
                            </div>
                        </div>

                        {/* Birthdate */}
                        <div className="w-[220px]">
                            <p className="text-[10px] font-bold tracking-[1px] text-[#94a3b8] uppercase mb-[10px]">Birthdate</p>
                            <div className="flex items-center gap-[8px]">
                                <Calendar size={18} className="text-orange-400" />
                                <span className="font-[800] text-[#334155]">2000-03-21</span>
                            </div>
                        </div>

                    
                        <div className="w-[220px]">
                            <p className="text-[10px] font-bold tracking-[1px] text-[#94a3b8] uppercase mb-[10px]">Account ID</p>
                            <div className="bg-[#f8fafc] border border-[#f1f5f9] rounded-[12px] p-[12px] text-[11px] text-[#94a3b8] break-all leading-[1.5]">
                                e74455a8-e0c9-49ac-8960-c9b965555c79
                            </div>
                        </div>
                    </div>

               
                    <div className="flex gap-[16px]">
                        <button className="flex-1 bg-[#0f172a] text-white font-bold py-[16px] rounded-[16px] text-[14px] cursor-pointer hover:bg-slate-800 transition-colors">
                            Edit Profile
                        </button>
                        <button className="flex-1 bg-[#fff1f2] text-[#f43f5e] font-bold py-[16px] rounded-[16px] border border-[#ffe4e6] text-[14px] cursor-pointer hover:bg-[#ffe4e6] transition-colors">
                            Delete This User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCardDetail;