import fs from 'fs';
import csv from 'csv-parser';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const filename = req.query.filename;
    if (typeof filename !== 'string' || filename === '') {
        res.status(400).json({ error: 'Invalid filename' });
        return;
    }
    const results: Array<{ [key: string]: string }> = [];
    fs.createReadStream(filename)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.status(200).json(results);
        })
        .on('error', (error) => {
            res.status(500).json({ error: error.toString() });
        });
}