
const OUTPUT_FILE_PATH='src/data/customers.csv'
export const getDummyCustomers = async () => {
    const response = await fetch(`/api/readCSV?filename=${OUTPUT_FILE_PATH}`);
    const data = await response.json() as Array<{[key: string]: string}>;
    return data;
  };