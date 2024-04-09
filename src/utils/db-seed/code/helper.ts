import fs from 'node:fs';

const prefix: string = './src/utils/db-seed/data';
export const readFile = (path: string): any => {
  // Define the path to the JSON file containing question data
  const file: string = `${prefix}/${path}`;
  // Read the content of the JSON file
  const content: string = fs.readFileSync(file, 'utf8');

  return JSON.parse(content);
};
