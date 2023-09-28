import { readCSVToJSON } from "@/utils/readCSVToJSON";

const OUTPUT_FILE_PATH='orders.csv'
export const getDummyOrder = async () => {
  const response = await readCSVToJSON(OUTPUT_FILE_PATH);
  const data = response as Array<{[key: string]: string}>;
  return data;
  };