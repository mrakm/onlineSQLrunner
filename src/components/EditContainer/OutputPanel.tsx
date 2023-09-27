
import { Table } from "../Table";

export interface IOutputProps {
  tableData:
    | {
        [key: string]: string;
      }[]
    | null;
  isTableDataLoading?: boolean;
  tableDataName?: string;
}

export function Output(props: IOutputProps) {
  const { tableData, isTableDataLoading, tableDataName } = props;
  return (
    <div className="flex-1 flex flex-col bg-outputbg py-3">
      <HeaderOutput />
      <div className="flex flex-col  flex-1">
        <Table
          data={tableData}
          isloading={!!isTableDataLoading}
          tableName={tableDataName}
        />
      </div>
    </div>
  );
}

function HeaderOutput() {
  return (
    <div className="flex justify-between border-b border-border border-solid">
      <div className="py-3 px-6 -mb-1 mt-0 "> Output</div>
    </div>
  );
}
