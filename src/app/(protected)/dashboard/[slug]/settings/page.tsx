import PaymentCard from "@/components/global/billing/payment-card";
import React from "react";

type Props = {};

const Billing = (props: Props) => {
  //WIP: Fetch billing infomation for the customer
  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container">
      <PaymentCard />
    </div>
  );
};
export default Billing;
