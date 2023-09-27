import * as React from "react";
import clsx from "clsx";
import { LOADING_SVG } from "./loading";

export interface IButtonProps {
  children: React.ReactNode;
  buttonType?: "primary" | "secoundary";
  onClick?: () => void;
  isLoading?: boolean;
  disabled?:boolean;
}

export function Button(props: IButtonProps) {
  return (
    <button
      className={clsx(
        "no-underline border  text-xs box-border rounded  font-medium mr-4 px-4 py-1.5 border-solid",
        "border-primary text-primary",
        "bg-primary/10",
        "font-medium text-sm ",
        props.disabled?"!border-black/10 !cursor-not-allowed  text-black/10":"",
      )}
      onClick={props.isLoading && !props.disabled?()=>{}:props.onClick}
    >
      {props.isLoading ? (
        <>
          <div role="status">
            {LOADING_SVG}
            <span className="sr-only">Loading...</span>
          </div>
        </>
      ) : (
        <>{props.children}</>
      )}
    </button>
  );
}
