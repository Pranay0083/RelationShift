"use client";
import { ChevronRight, PencilIcon } from "lucide-react";
import ActivateAutomationButton from "../../activate-automation-button";
import { useQueryAutomation, useQueryAutomations } from "@/hooks/use-queries";
import { useEditAutomation } from "@/hooks/use-automation";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { Input } from "@/components/ui/input";

type Props = {
  id: string;
};

const AutomationsBreadCrumb = ({ id }: Props) => {
  //WIP: get the automation data
  const { data } = useQueryAutomation(id);
  const { isPending, edit, inputRef, enableEdit } = useEditAutomation(id);

  const { latestVariable } = useMutationDataState(["update-automation"]);
  // mutation
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9B9CA0] truncate">Automations</p>
        <ChevronRight color="#9B9CA0" className="flex-shrink-0" />
        <span className="flex gap-x-3 items-center min-w-0">
          {/* WIP: Show the editing data */}
          {edit ? (
            <Input
              ref={inputRef}
              placeholder={
                isPending ? latestVariable.variables : "Add a new name"
              }
              className="bg-transparent h-auto outline-none text-base border-none p-0"
            />
          ) : (
            <p className="text=[#9b9ca0] truncate">
              {latestVariable?.variables
                ? latestVariable.variables.name
                : data?.data?.name}
            </p>
          )}
          {/* <span className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4">
            <PencilIcon size={14} />
          </span> */}
          {edit ? (
            <></>
          ) : (
            <span className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4" onClick={enableEdit}>
              <PencilIcon size={14} />
            </span>
          )}
        </span>
      </div>
      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          All psates are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
          {/* <p className="text-text-secondary text-sm truncate min-w-0">
            Undo | Redo
          </p> */}
        </div>
      </div>
      <ActivateAutomationButton id={id} />
    </div>
  );
};

export default AutomationsBreadCrumb;
