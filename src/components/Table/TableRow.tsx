import * as React from "react";

export interface ITableRowProps {
  tableColumn: string[];
  index?:number
}

export function TableRow(props: ITableRowProps) {
  return (
    <>
    <td className=" py-2 text-center text-sm " >{props.index}</td>
      {props.tableColumn.map((inp, i) => {
        return <td className="px-2 py-2 whitespace-nowrap text-center text-sm" key={`${inp}_${i}`}>{inp}</td>;
      })}
    </>
  );
}