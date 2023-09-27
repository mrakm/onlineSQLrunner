import { getDummyCategories } from "@/api/getDummyCategories";
import { getDummyCustomers } from "@/api/getDummyCustomers";
import { getDummyEmployeeTerritories } from "@/api/getDummyEmployeeTerritories";
import { getDummyEmployees } from "@/api/getDummyEmployees";
import { getDummyOrder } from "@/api/getDummyOrder";
import { INSERT_QUERRY_ID, SELECT_QUERRY_ID } from "@/constant/constant";
import { useApi } from "@/hooks/useAPi";
import { IQuerryState, addHistory, selectId } from "@/redux/feature/history";
import { getRandomElement } from "@/utils/getRandomElement";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "./Editor";
import { Output } from "./OutputPanel";
import { generateRandomUUID } from "@/utils/randomUUID";

export interface IEditContainerProps {}

const DUMMY_API_FUNCTIONS = [
  getDummyCategories,
  getDummyCustomers,
  getDummyOrder,
  getDummyEmployeeTerritories,
  getDummyEmployees,
];
export function EditContainer(props: IEditContainerProps) {
  const [dataOutput, isloading, fetchData, clearData] = useApi();
  const [tableName, setTableName] = useState<string>();
  const selectedQuerry = useSelector(
    (state: { querry: IQuerryState }) => state.querry.selectedQuerry
  );
  const [code, setCode] = useState<string>("");
  const [isCodeEdited, setIsCodeEdited] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setCode(selectedQuerry?.query ?? "");
    setIsCodeEdited(false);
    clearData();
  }, [selectedQuerry?.query]);

  const handleEditChange = (inp: string) => {
    setCode(inp);
    setIsCodeEdited(true);
  };

  const addQuerry = (code: string) => {
    const randomUUID = generateRandomUUID();
    const querry = { id: randomUUID, querryName: "custom", query: code };
    dispatch(addHistory(querry));
    dispatch(selectId(querry));
  };

  const getAPItoCallDummy = (querryName?: string) => {
    if (querryName === SELECT_QUERRY_ID) {
      setTableName("OUTPUT TABLE");
      return getDummyOrder;
    } else if (querryName === INSERT_QUERRY_ID) {
      setTableName("OUTPUT TABLE");
      return getDummyCustomers;
    }
    setTableName("RANDOM OUTPUT TABLE");
    return getRandomElement(DUMMY_API_FUNCTIONS);
  };

  const handleOnRunButtonClick = useCallback(async () => {
    // if is not edited
    if (!isCodeEdited) {
      if (!selectedQuerry) {
        return;
      }
      const fetchDataFunction = getAPItoCallDummy(selectedQuerry?.id);
      !isloading && fetchData(fetchDataFunction);

      return;
    }
    addQuerry(code);
    const fetchDataFunction = getAPItoCallDummy();
    !isloading && fetchData(fetchDataFunction);
  }, [isloading, fetchData, selectedQuerry, isCodeEdited]);

  return (
    <div className="flex flex-1 border border-border border-solid h-full bg-codebg flex-col">
      <Editor
        onRunSQL1Click={handleOnRunButtonClick}
        isLoadingSQL1Click={isloading}
        code={code}
        setCode={handleEditChange}
        isRunButtonDisabled={selectedQuerry === null}
      />
      <Output
        tableData={dataOutput}
        isTableDataLoading={isloading}
        tableDataName={tableName}
      />
    </div>
  );
}
