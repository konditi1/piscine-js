import { createServer } from 'node:http';
import { writeFile } from 'node:fs/promises';  // Use promises for better async handling

const port = 5000;

const server = createServer(async (request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const guestName = url.pathname.slice(1);
    response.setHeader('Content-Type', 'application/json');

    if (request.method === 'POST') {
        let body = '';
        request.on('data', chunk => body += chunk);
        request.on('end', async () => {
            try {
                const jsonContent = JSON.parse(body);  // Parse the JSON content
                await writeFile(`guests/${guestName}.json`, JSON.stringify(jsonContent, null, 2), 'utf8');  // Write file using promises
                response.statusCode = 201;
                response.end(JSON.stringify(jsonContent));  // Send back the JSON content
            } catch (error) {
                if (error instanceof SyntaxError) {
                    response.statusCode = 400;
                    response.end(JSON.stringify({ error: "Invalid JSON" }));
                } else {
                    console.error('Error writing file:', error);
                    response.statusCode = 500;
                    response.end(JSON.stringify({ error: "Server failed" }));
                }
            }
        });
    } else {
        response.statusCode = 405;
        response.end(JSON.stringify({ error: "Method Not Allowed" }));
    }
});

server.listen(port, () => {
    console.log(`Server started on localhost:${port}!`);
});
