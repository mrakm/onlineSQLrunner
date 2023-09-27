import { IQuerryState, IQurryProps, selectId } from "@/redux/feature/history";
import clsx from "clsx";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

export function SideBar(): React.JSX.Element {
  const { history, selectedQuerry } = useSelector(
    (state: { querry: IQuerryState }) => state.querry
  );
  const dispatch = useDispatch();
  const handleQuerrySelector = React.useCallback((querry: IQurryProps) => {
    dispatch(selectId(querry));
  }, []);
  return (
    <div className="flex flex-col min-w-[203px] max-w-[203px] border border-border border-solid h-full gap-6 py-4">
      {!!history &&
        history?.map((singleHistory) => {
          return (
            <div
              className={clsx(
                "border border-solid border-border px-3 py-2 hover:bg-border cursor-pointer",
                selectedQuerry?.id === singleHistory.id ? "!bg-border" : ""
              )}
              key={singleHistory.id}
              onClick={() => handleQuerrySelector(singleHistory)}
            >
              <p>{singleHistory.querryName}</p>
              <div className="w-full h-3  overflow-hidden whitespace-nowrap text-ellipsis text-xs">
                {singleHistory.query}
              </div>
            </div>
          );
        })}
    </div>
  );
}
