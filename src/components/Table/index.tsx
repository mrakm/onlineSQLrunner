import { NO_DATA_FOUND } from "@/constant/constant";
import clsx from "clsx";
import { TableVirtuoso } from "react-virtuoso";
import { Loader } from "../Loader/Loader";
import { TableRow } from "./TableRow";
import { TableRowHeader } from "./TableRowHeader";

interface ITableProps {
  isloading: boolean;
  data:
    | {
        [key: string]: string;
      }[]
    | null;
  className?:string;
  tableName?:string;
}

export function Table(props: ITableProps) {
  const { isloading, data,className,tableName } = props;
  if(isloading){
    return <div className={clsx("h-full overflow-auto p-8 infinitetable flex items-center justify-center",className)}>
    <Loader className="w-20 h-20" />
  </div>
  }
  return ( <>
    {(data && data?.length) ? (
      <div className={clsx("h-full overflow-auto p-8",className)}>
        {!!tableName && <div className="uppercase">{tableName}</div>}
        <TableVirtuoso
          className="rounded-lg border border-border border-solid infinitetable"
          data={data ?? []}
          fixedHeaderContent={() =>
            data && (
              <TableRowHeader tableColumn={Object.keys(data[0])} />
            )
          }
          itemContent={(index, data) => (
            <>
              <TableRow tableColumn={Object.values(data)} index={index} />
            </>
          )}
        />
      </div>
    ):<div className={clsx("h-full overflow-auto p-8 infinitetable flex items-center justify-center",className)}>
       {NO_DATA_FOUND}
  </div>}
  </>);
}
