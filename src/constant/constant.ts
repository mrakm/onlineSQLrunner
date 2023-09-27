export const SELECT_QUERRY = `
SELECT first_name, age
FROM Customers;`;
export const INSERT_QUERRY = `
INSERT INTO Customers (first_name, age)
VALUES ('John', 25);
`;
export const PLACEHOLDER_QUERRY = `
-- Online SQL Editor to Run SQL Online.
-- Use the editor to create new tables, insert data and all other SQL operations.
-- To run the SQL query, you can select the desired query from the sidebar and press the "Run" button. You can also edit the query if needed. Please note that if you edit the query, it will run a random query out of the 5 dummy queries provided.
      
SELECT first_name, age
FROM Customers;`;
export const NO_DATA_FOUND = "No data, Please run querry to get data";

export const SELECT_QUERRY_ID="selectQuerry";
export const INSERT_QUERRY_ID="inserquerryId";

export const INNITIAL_HISTORY = [
  {
    id: SELECT_QUERRY_ID,
    querryName: "Select Querry",
    query: SELECT_QUERRY,
  },
  {
    id: INSERT_QUERRY_ID,
    querryName: "Insert Querry",
    query: INSERT_QUERRY,
  },
];