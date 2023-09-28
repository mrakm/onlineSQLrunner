import { readCSVToJSON } from "@/utils/readCSVToJSON";

const OUTPUT_FILE_PATH='employee_territories.csv'
export const getDummyEmployeeTerritories = async () => {
  const response = await readCSVToJSON(OUTPUT_FILE_PATH);
  const data = response as Array<{[key: string]: string}>;
  return data;
  };