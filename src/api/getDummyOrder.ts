
const OUTPUT_FILE_PATH='orders.csv'
export const getDummyOrder = async () => {
    const response = await fetch(`/api/readCSV?filename=${OUTPUT_FILE_PATH}`);
    const data = await response.json() as Array<{[key: string]: string}>;
    return data;
  };