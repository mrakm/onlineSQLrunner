import * as React from "react";
import { TabeContainer } from "../AllTableContainer/TabeContainer";
import { EditContainer } from "../EditContainer/EditContainer";
import { SideBar } from "../SideBar/SideBar";

export interface IBodyProps {}

export function Body(props: IBodyProps) {
  return (
    <div className="flex flex-1 border border-border border-solid flex-row  h-[calc(100vh_-_50px)]">
      <SideBar/>
      <EditContainer/>
      <TabeContainer/>
    </div>
  );
}

