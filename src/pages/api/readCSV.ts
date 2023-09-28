import { NextApiRequest, NextApiResponse } from "next";

import csvParser, { Options } from "csv-parser";
const FILE_PATH='https://raw.githubusercontent.com/mrakm/onlineSQLrunner/main/src/pages/api/data/';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filenamee = req.query.filename as string;
  const filename=`${FILE_PATH}${filenamee}`
  try {
    if (!filename) {
      throw "e";
    }
    const response = await fetch(filename);
    const csvData = (await response.text()) as any;

    const jsonData: any[] = [];
    csvParser(csvData)
      .on("data", (data) => jsonData.push(data))
      .on("end", () => {
        res.status(200).json(jsonData);
      });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch and parse CSV file" });
  }
}
