import { readdir, writeFile, readFile } from 'node:fs/promises';
import path from 'path';

// Get the directory path from command-line arguments
const directoryPath = process.argv[2] || process.argv[1];

try {
  // Read the contents of the directory
  const files = await readdir(directoryPath, 'utf8');
  const vipNames = [];

  for (const file of files) {
    // Check if the file indicates a 'yes' response
    if (await isVipResponse(path.join(directoryPath, file))) {
      // Extract name parts from the filename
      const baseName = file.replace(/\.json$/, '');
      const [lastName, firstName] = baseName.split('_');
      vipNames.push(`${firstName} ${lastName}`);
    }
  }

  // Sort the names alphabetically
  vipNames.sort();

  // Format the names with numbering
  const formattedNames = vipNames.map((name, index) => `${index + 1}. ${name}`).join('\n');

  // Write the formatted names to a file
  await writeFile('vip.txt', formattedNames);
  console.log(formattedNames);
} catch (error) {
  console.error('Error:', error);
}

// Function to determine if a file contains a 'yes' response
async function isVipResponse(filePath) {
  try {
    const fileContent = await readFile(filePath, 'utf8');
    const jsonData = JSON.parse(fileContent);
    return jsonData.answer === 'yes';
  } catch (error) {
    console.error('Error reading or parsing file:', filePath, error);
    return false;
  }
}
