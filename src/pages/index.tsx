import Table from "@/components/Table";
import React from "react";

function Home() {
  return (
    <>
      <div className="flex w-[100vw] justify-between px-10 pr-32 items-center mt-10 mb-5">
        <div>
          <p className="text-sm">Reading Sheet Department:</p>
          <p className="text-sm">Reader:</p>
        </div>
        <div>
          <p className="text-sm">Created Date:</p>
          <p className="text-sm">Read Route:</p>
        </div>
        <div>
          <p className="text-sm">Itinerary:</p>
          <p className="text-sm">Cycle:</p>
        </div>
        <div>
          <p className="text-sm">Page:</p>
          <p className="text-sm">Year:</p>
        </div>
      </div>
      <div className="h-[2px] w-[100vw]  flex justify-center items-center bg-gray-300"></div>
      <div className="ml-10 mt-10 flex flex-col gap-y-4 mb-10">
        <p className="text-sm">District: Agboba</p>
        <p className="text-sm">Block: Biden Men Town</p>
        <p className="text-sm">Street: Gopher Street 14</p>
      </div>
      <div className="h-[2px] w-[100vw]  flex justify-center items-center bg-gray-300"></div>
      <div className="mb-40">
        <Table />
      </div>
      <div className="flex justify-end gap-x-8 mr-10 mb-20">
        <div className="">
          <p className="text-sm">
            Reading Date:
            <span className="text-gray-500">
              _________________________________
            </span>
          </p>
        </div>
        <div>
          <p className="text-sm">
            Reading Signature:
            <span className="text-gray-500">
              _________________________________
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
