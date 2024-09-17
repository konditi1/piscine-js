import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join } from 'path';

const PORT = 5000;

const server = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const guestName = req.url?.substring(1);
  
  if (!guestName) {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'guest not found' }));
    return;
  }
  
  const filePath = join('guests', `${guestName}.json`);
  
  try {
    const data = await readFile(filePath, 'utf8');
    res.writeHead(200);
    res.end(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'guest not found' }));
    } else {
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'server failed' }));
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
