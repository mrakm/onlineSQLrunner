
const OUTPUT_FILE_PATH='src/data/categories.csv'
export const getDummyCategories = async () => {
    const response = await fetch(`/api/readCSV?filename=${OUTPUT_FILE_PATH}`);
    const data = await response.json() as Array<{[key: string]: string}>;
    return data;
  };