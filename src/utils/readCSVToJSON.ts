import { CSV_PATH } from "@/constant/constant";

export function readCSVToJSON(urlInp: string): Promise<object[]> {
    const url=CSV_PATH+urlInp
    return fetch(url)
      .then(response => response.text())
      .then(csvData => {
        const lines = csvData.split('\n');
        const headers = lines[0].split(',');
        const jsonData: object[] = [];
  
        for (let i = 1; i < lines.length; i++) {
          const currentLine = lines[i].split(',');
          const row: { [key: string]: string } = {};
  
          for (let j = 0; j < headers.length; j++) {
            row[headers[j]] = currentLine[j];
          }
  
          jsonData.push(row);
        }
  
        return jsonData;
      });
  }