import { readFile, writeFile } from 'fs/promises';

const inputFilePath = process.argv[2];
const operation = process.argv[3];
let outputFilePath = process.argv[4];

const inputFileContent = await readFile(inputFilePath, 'utf8');

try {
  if (operation === 'encode') {
    outputFilePath = outputFilePath || 'cypher.txt';
    const encodedContent = Buffer.from(inputFileContent).toString('base64');
    await writeFile(outputFilePath, encodedContent);
  } else if (operation === 'decode') {
    outputFilePath = outputFilePath || 'clear.txt';
    const decodedContent = Buffer.from(inputFileContent, 'base64').toString('utf8');
    await writeFile(outputFilePath, decodedContent);
  } else {
    console.error('Invalid operation. Use "encode" or "decode".');
  }
} catch (error) {
  console.error('Error:', error);
}
