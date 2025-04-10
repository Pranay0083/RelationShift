import { activateAutomation } from "@/actions/automations";
import { Button } from "@/components/ui/button";
import { useMutationData } from "@/hooks/use-mutation-data";
import { useQueryAutomation } from "@/hooks/use-queries";
import { BookTemplateIcon, Loader, Loader2, SignalHighIcon } from "lucide-react";
import React from "react";

type Props = {
  id: string
};

const ActivateAutomationButton = ({id}: Props) => {
  const { data } = useQueryAutomation(id);
  const {mutate, isPending} = useMutationData(
    ['activate'],
    (data : {state: boolean}) => activateAutomation(id, data.state ),
  )

  return (
    <Button 
    disabled={isPending}
    onClick={() => mutate({state: !data?.data?.active})}
    className="lg:px-10 bg-gradient-to-br hover: opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4">
      {isPending ? <Loader2 className="animate-spin" /> : <SignalHighIcon />}
      <p className="lg:inline hidden">
        {data?.data?.active ? 'Deactivate' : 'Activate'}
      </p>
    </Button>
  );
};
export default ActivateAutomationButton;
