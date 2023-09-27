import * as React from "react";

export interface ITableRowProps {
  tableColumn: string[];
}

export function TableRowHeader(props: ITableRowProps) {
  return (
     <tr className="uppercase bg-tableHeader text-sm">
      <th  className="px-6 py-3 text-center border border-solid border-border"># </th>
        {props.tableColumn.map((inp, i) => {
          return (
            <th className="px-2 py-2 text-center border border-solid border-border">
              {inp}
            </th>
          );
        })}
      </tr>
  );
}
