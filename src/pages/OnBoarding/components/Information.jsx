import React, { useState } from "react";


const Information = () => {
  return (
    <div className="relative w-full">
      <div className="border shadow border-[#E4E7EC] p-4  rounded mt-6 ">
        <div className="flex justify-between items-center mb-5">
          <div className="bg-[#FFEAD4] flex gap-2 items-center rounded-md px-3 py-0.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FE982A]"></span>
            <span className="text-[#FE982A]">Pending</span>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="basis-2/3">
            <div className="flex gap-6 mb-4">
              <div className="mr-16">
                <h4 className="text-[#020202] font-semibold mb-2">
                  Tolu Araba Landed Property
                </h4>
                <p className="text-[#333]">Property Name</p>
              </div>
              <div className="mr-20">
                <h4 className="text-[#020202] font-semibold mb-2">5</h4>
                <p className="text-[#333]">Properties <br></br> Owned</p>
              </div>
              <div className="mr-6">
                <h4 className="text-[#020202] font-semibold mb-2">
                  09012059519
                </h4>
                <p className="text-[#333]">Phone Contact</p>
              </div>
              <div>
                <h4 className="text-[#020202] font-semibold mb-2">
                  22920022002
                </h4>
                <p className="text-[#333]">BVN</p>
              </div>
            </div>

            <div className="flex gap-6 mb-2">
              <div className="basis-1/3 mr-6">
                <h4 className="text-[#020202] font-semibold mb-2">
                  8 Olalusi Street, Owode Onirin, <br></br>Ikorodu Bus Stop, Lagos,
                  Nigeria
                </h4>
                <p className="text-[#333] ">House Address</p>
              </div>
              <div className="mr-20">
                <h4 className="text-[#020202] font-semibold mb-2">Lagos</h4>
                <p className="text-[#333]">State</p>
              </div>
              <div className="ml-7 mr-20">
                <h4 className="text-[#020202] font-semibold mb-2">Ikeja</h4>
                <p className="text-[#333]">City</p>
              </div>
              <div className="ml-3">
                <h4 className="text-[#020202] font-semibold mb-2">
                  22920022002
                </h4>
                <p className="text-[#333]">
                  UBA Bank<br></br>Allen Evwidonor
                </p>
              </div>
            </div>

            <div className="flex gap-6 mb-14 mr-20"></div>
          </div>
          <div className="basis-28 flex flex-row justify-between space-x-5 ml-[-20]">
            <button className="bg-primary w-full flex px-7 rounded-md text-white justify-between py-1.5">
              Approve
            </button>

            <button className="bg-[#FF2730] w-full flex px-8 rounded-md text-white justify-between py-1.5">
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
