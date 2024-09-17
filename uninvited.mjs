import { createServer } from 'http';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const PORT = 5000;

const server = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const guestName = req.url?.substring(1);

  if (req.method === 'GET') {
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
  } else if (req.method === 'POST') {
    if (!guestName) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: 'guest name is required' }));
      return;
    }

    const filePath = join('guests', `${guestName}.json`);
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const parsedBody = JSON.parse(body);
        await writeFile(filePath, JSON.stringify(parsedBody, null, 2), 'utf8');
        res.writeHead(201);
        res.end(JSON.stringify(parsedBody));
      } catch (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    });
  } else {
    res.writeHead(405);
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
