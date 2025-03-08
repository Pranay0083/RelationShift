import Trigger from "@/components/global/automations/trigger";
import AutomationsbreadCrumb from "@/components/global/bread-crumbs/automations";
import { FileWarning } from "lucide-react";
import React from "react";
type Props = {
  params: { id: string };
};
//WIP: Set some metadata
const Page = ({ params }: Props) => {
  //WIP: prefetch user automation data
  return (
    <div className=" flex flex-col items-center gap-y-20">
      <AutomationsbreadCrumb id={params.id} />
      <div
        className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
        <div className="flex gap-x-2">
          <FileWarning />
          When.. •
        </div>
        <Trigger id={params.id} />
      </div>
    </div>
  );
};
export default Page;
