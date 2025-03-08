import { Button } from "@/components/ui/button";
import { BookTemplateIcon, Loader } from "lucide-react";
import React from "react";
type Props = {};
const ActivateAutomationButton = (props: Props) => {
  //WIP: Setup optimistic ui
  // WIP: Getch some automation data
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover: opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-2">
      <Loader state={false}>
        <BookTemplateIcon />
        <p className="lg:inline hidden">Activate</p>
      </Loader>
    </Button>
  );
};
export default ActivateAutomationButton;
