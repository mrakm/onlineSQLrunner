import { NextApiRequest, NextApiResponse } from "next";

const FILE_PATH = 'https://raw.githubusercontent.com/mrakm/onlineSQLrunner/main/src/data/';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filenamee = req.query.filename as string;
  const filename = `${FILE_PATH}${filenamee}`;
  try {
    if (!filename) {
      throw "e";
    }
    const response = await fetch(filename);
    const csvData = (await response.text()) as string;

    const jsonData: any[] = [];
    const lines = csvData.split("\n");
    const headers = lines[0].split(","); // Assuming the first line contains headers

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",");
      const data: any = {};
      for (let j = 0; j < headers.length; j++) {
        data[headers[j]] = values[j];
      }
      jsonData.push(data);
    }

    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch and parse CSV file" });
  }
}