import React from "react";
import { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { Route } from "@/routers/types";

export interface CommonLayoutProps {
  children: React.ReactNode;
  params: {
    stepIndex: string;
  };
}

const CommonLayout: FC<CommonLayoutProps> = ({ children, params }) => {
  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
    >
      <div className="space-y-11">

        {/* --------------------- */}
        <div className="listingSection__wrap ">{children}</div>

      </div>
    </div>
  );
};

export default CommonLayout;
