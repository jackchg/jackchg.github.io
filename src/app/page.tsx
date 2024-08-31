import { Introduction } from "@/components/Introduction";
import { TopBar } from "@/components/TopBar";
import { Separator } from "@/components/ui/separator";
import React, { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <TopBar />
      <div className="m-[5%]" />
      <div className="mx-auto w-10/12">
        <Introduction />
      </div>
      <Separator className="mx-auto w-11/12 my-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 w-10/12">
        <Introduction />
        <Introduction />
      </div>
    </Fragment>
  );
}
