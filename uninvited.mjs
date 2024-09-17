import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = 5000;

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const guestName = req.url.slice(1); // Remove the leading '/'
        const guestData = JSON.parse(body);
        
        // Ensure the directory exists
        await fs.mkdir('guests', { recursive: true });
        
        // Write the guest data to a file
        const filePath = path.join('guests', `${guestName}.json`);
        await fs.writeFile(filePath, JSON.stringify(guestData, null, 2));

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(guestData));
      } catch (error) {
        console.error('Error:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
