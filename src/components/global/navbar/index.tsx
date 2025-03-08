"use client";
import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePaths } from "@/hooks/use-nav";
import React from "react";
import Sheet from "../sheet";
import { HelpCircle, Menu } from "lucide-react";
import UpgradeCard from "../sidebar/upgrade";
import { SubscriptionPlan } from "../subscription-plan";
import ClerkAuthState from "../clerk-auth-state";
import { Separator } from "@/components/ui/separator";
import Items from "../sidebar/items";
import { LogoSmall } from "@/svgs/logo-small";
import CreateAutomation from "../create-automations";
import Search from "./search";
import Notifications from "./notification";
import MainBreadCrumb from "../bread-crumbs/main-bread-crumb";

type Props = {
  slug: string;
};

const Navbar = ({ slug }: Props) => {
  const { page } = usePaths();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;

  return (
    currentPage && (
      <div className="flex flex-col ">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
          <span className="lg:hidden flex items-center flex-1 gap-x-2">
            <Sheet trigger={<Menu />} className="lg:hidden" side="left">
              <div
                className="flex flex-col w-full h-full p-3 bg-[#0e0e0e] 
        bg-opacity-90 bg-clip-padding backdrop-filter 
        backdrop-blur-safari backdrop-blur-3xl"
              >
                <div className="flex gap-x-2 items-center p-5 justify-center">
                  <div className="flex items-center gap-4">
                    <LogoSmall size={32} />
                    <div>
                      <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                        RelationShift
                      </h1>
                      <p className="text-slate-400 text-xs">
                        Automated DM Management
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col gap-y-2 py-3">
                  <Items page={page} slug={slug} />
                </div>

                <div className="px-16 mt-4">
                  <Separator
                    orientation="horizontal"
                    className="bg-[#333336]"
                  />
                </div>

                {/* Profile section */}
                <div className="px-3 flex flex-col gap-y-5 mt-4">
                  <div className="flex gap-x-2">
                    <ClerkAuthState />
                    <p className="text-[#9B9CA0]">Profile</p>
                  </div>
                  <div className="flex gap-x-3">
                    <HelpCircle />
                    <p className="text-[#9B9CA0]">Help</p>
                  </div>
                </div>

                {/* Spacer to push subscription to bottom */}
                <div className="flex-grow"></div>

                {/* Subscription Plan at bottom */}
                <div className="mt-auto">
                  <SubscriptionPlan type="FREE">
                    <UpgradeCard />
                  </SubscriptionPlan>
                </div>
              </div>
            </Sheet>
          </span>
          <Search />
          <CreateAutomation />
          <Notifications />
        </div>
        <MainBreadCrumb 
          page={page === slug ? "Home" : page}
          slug={slug}
        />
      </div>
    )
  );
};

export default Navbar;
