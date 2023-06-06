import fsPromises from 'fs/promises';
import path from 'path';
var promises_1 = require('fs/promises');
export async function staticdata() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'json/data.json');
  // Read the json file
  const jsonData = await promises_1.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);
  console.log(objectData);
  return objectData;
}
