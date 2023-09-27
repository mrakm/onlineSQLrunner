import { getDummyOrder } from "@/api/getDummyOrder";
import * as React from "react";
import { useApi } from "@/hooks/useAPi";
import { Table } from "../Table";
import { getDummyCategories } from "@/api/getDummyCategories";
import { getDummyEmployees } from "@/api/getDummyEmployees";
import { getDummyEmployeeTerritories } from "@/api/getDummyEmployeeTerritories";

export function TabeContainer() {
  const [dataCategory, isloadingCategory, fetchDataCategory] = useApi();
  const [dataEmployee, isloadingEmployee, fetchDataEmployee] = useApi();
  const [
    dataEmployeeTerritories,
    isloadingEmployeeTerritories,
    fetchDataEmployeeTerritories,
  ] = useApi();

  React.useEffect(() => {
    !isloadingCategory && fetchDataCategory(getDummyCategories);
    !isloadingEmployee && fetchDataEmployee(getDummyEmployees);
    !isloadingEmployeeTerritories &&
      fetchDataEmployeeTerritories(getDummyEmployeeTerritories);
  }, []);
  return (
    <div className="flex flex-1 border border-border border-solid  flex-col bg-white ">
      <Header />
      <div className="overflow-y-auto">
        <Table
          tableName="Category"
          isloading={isloadingCategory}
          data={dataCategory}
          className="!h-[400px]"
        />

        <Table
          tableName="Employee"
          isloading={isloadingEmployee}
          data={dataEmployee}
          className="!h-[400px]"
        />

        <Table
          tableName="EmployeeTerritories"
          isloading={isloadingEmployeeTerritories}
          data={dataEmployeeTerritories}
          className="!h-[400px]  !max-w-[350px]"
        />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-between border-b border-border border-solid">
      <div className="py-[15px] px-6  pb-[15px]"> Available Tables</div>
    </div>
  );
}
