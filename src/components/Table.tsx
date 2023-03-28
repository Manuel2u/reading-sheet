import React from "react";
import items from "@/data";

function Table() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex mb-2 px-10 pt-5 gap-x-10">
          <div className="">
            <p className="text-sm">No</p>
          </div>
          <div className="w-[20vw]">
            <p className="text-sm">Building</p>
            <p className="text-sm text-blue-800">Customer Name</p>
          </div>
          <div className="w-[20vw]">
            <p className="text-sm">Access Description - Building</p>
            <p className="text-sm text-blue-800">GEO CODE</p>
          </div>
          <div className="w-[15vw]">
            <p className="text-sm">Reading</p>
            <p className="text-sm text-blue-800">Reading Date</p>
          </div>
          <div className="w-[15vw]">
            <p className="text-sm">Meter No</p>
            <p className="text-sm text-blue-800">No. Of Digits</p>
          </div>
          <div className="w-[15vw]">
            <p className="text-sm">Energy Type</p>
            <p className="text-sm text-blue-800">Anomaly</p>
          </div>
          <div className="w-[30vw]">
            <p className="text-sm">Note</p>
          </div>
        </div>
        <div className="h-[2px] w-[100vw]  bg-gray-300"></div>

        {items.map((item, index) => (
          <div className="flex mb-5 px-10 pt-5">
            <div className="flex flex-col w-[85vw]">
              <div className="flex gap-x-12 w-[72vw]">
                <div className="">
                  <p className="text-sm">1</p>
                </div>
                <div className="w-[14vw]">
                  <p className="text-sm">{item.building}</p>
                </div>
                <div className="w-[14vw] pl-2">
                  <p className="text-sm">{item.acces}</p>
                </div>
                <div className="w-[11vw] pl-2">
                  <p className="text-sm">{item.reading}</p>
                </div>
                <div className="w-[10vw]">
                  <p className="text-sm">{item.geocode}</p>
                </div>
                <div className="w-[12vw]">
                  <p className="text-sm">{item.energyType}</p>
                </div>
              </div>
              <div className="flex gap-x-12 bg-gray-300 w-[71vw] py-3 mt-1">
                <div className="w-2"></div>
                <div className="w-[14vw]">
                  <p className="text-sm">{item.customerName}</p>
                </div>
                <div className="w-[14vw] pl-2">
                  <p className="text-sm">{item.readDate}</p>
                </div>
                <div className="w-[11vw] pl-3">
                  <p className="text-sm">{item.readDate}</p>
                </div>
                <div className="w-[10vw] pl-3">
                  <p className="text-sm">{item.noOfDigits}</p>
                </div>
                <div className="w-[12vw] pl-3">
                  <p className="text-sm">{item.anomaly}</p>
                </div>
              </div>
            </div>
            <div className="w-[30vw] pl-10 mr-2">
              <p className="text-sm">{item.note}</p>{" "}
            </div>
          </div>
        ))}
        {/* // <div className="flex mb-5 px-10 pt-5">
          //   <div className="flex flex-col w-[85vw]">
          //     <div className="flex gap-x-12 w-[72vw]">
          //       <div className="">
          //         <p className="text-sm">1</p>
          //       </div>
          //       <div className="w-[14vw]">
          //         <p className="text-sm">H/N0. 097</p>
          //       </div>
          //       <div className="w-[14vw] pl-2">
          //         <p className="text-sm">INSIDE</p>
          //       </div>
          //       <div className="w-[11vw] pl-2">
          //         <p className="text-sm">02-92-8989</p>
          //       </div>
          //       <div className="w-[10vw]">
          //         <p className="text-sm">0292029292</p>
          //       </div>
          //       <div className="w-[12vw]">
          //         <p className="text-sm">Active Energy(kWh)</p>
          //       </div>
          //     </div>
          //     <div className="flex gap-x-12 bg-gray-300 w-[71vw] py-3 mt-1">
          //       <div className="w-2"></div>
          //       <div className="w-[14vw]">
          //         <p className="text-sm">Nii Amartey George</p>
          //       </div>
          //       <div className="w-[14vw] pl-2">
          //         <p className="text-sm">0292029292</p>
          //       </div>
          //       <div className="w-[11vw] pl-3">
          //         <p className="text-sm">23/03/2023</p>
          //       </div>
          //       <div className="w-[10vw] pl-3">
          //         <p className="text-sm">6.0</p>
          //       </div>
          //       <div className="w-[12vw] pl-3">
          //         <p className="text-sm">Lorem ipsum</p>
          //       </div>
          //     </div>
          //   </div>
          //   <div className="w-[30vw] pl-10 mr-2">
          //     <p className="text-sm">
          //       Lorem ipsum dolor sit amet consectetur. In commodo proin neque
          //       non posuere mauris a nullam etiam. In risus sodales elit nisi
          //       amet tincidunt. Non enim tellus non diam ac. Turpis nisi ut mi
          //       ultricies gravida
          //     </p>{" "}
          //   </div>
          // </div> */}
      </div>

      <div className="h-[2px] w-[100vw]  bg-gray-300"></div>

      {/* <div className="flex px-16 pt-2 gap-x-20">
        <div>
          <p className="text-sm">1</p>
        </div>
        <div>
          <p className="text-sm">H/N0. 097</p>
          <p className="text-sm">Nii Amartey George</p>
        </div>
        <div>
          <p className="text-sm">INSIDE</p>
          <p className="text-sm">0292029292</p>
        </div>
        <div>
          <p className="text-sm">02-92-8989</p>
          <p className="text-sm">23/03/2023</p>
        </div>
        <div>
          <p className="text-sm">0292029292</p>
          <p className="text-sm">6.0</p>
        </div>
        <div>
          <p className="text-sm">Active Energy(kWh)</p>
          <p className="text-sm">Lorem ipsum</p>
        </div>
        <div>
          <p className="text-sm w-[60%]">
            Lorem ipsum dolor sit amet consectetur. In commodo proin neque non
            posuere mauris a nullam etiam. In risus sodales elit nisi amet
            tincidunt. Non enim tellus non diam ac. Turpis nisi ut mi ultricies
            gravida
          </p>
        </div>
      </div> */}
    </>
  );
}

export default Table;
