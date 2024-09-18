import http from "http";
import { writeFile } from "fs/promises";
import { Buffer } from "node:buffer";

const serverHost = "localhost";
const serverPort = 5000;
const guestsDirectory = `guests`;
const authorizedUsers = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];
const authorizedPassword = "abracadabra";

const handleGuestData = (request, response) => {
	let responseStatusCode = 201;
	response.setHeader("Content-Type", "application/json");
	const guestFileName = `${request.url.slice(1)}.json`;

	const sendErrorResponse = (statusCode, message) => {
		const errorResponseBody = JSON.stringify({ error: message });
		response
			.writeHead(statusCode, {
				"Content-Length": Buffer.byteLength(errorResponseBody),
			})
			.end(errorResponseBody);
	};

	// Check authorization header
	const authorizationHeader = request.headers["authorization"];
	if (!authorizationHeader) {
		sendErrorResponse(401, "No credentials found");
		return;
	}

	// Decode base64 credentials
	const credentials = Buffer.from(authorizationHeader.slice(6), "base64")
		.toString()
		.split(":");

	// Validate credentials
	if (
		!authorizedUsers.includes(credentials[0]) ||
		credentials[1] !== authorizedPassword
	) {
		sendErrorResponse(401, "Authorization Required");
		return;
	}

	// Only accept POST requests
	if (request.method !== "POST") {
		sendErrorResponse(405, "Method Not Allowed");
		return;
	}

	// Collect request body
	let requestBody = "";
	request.on("data", (chunk) => {
		requestBody += chunk;
	});

	request.on("end", () => {
		// Write the body to a file in guests directory
		writeFile(`${guestsDirectory}/${guestFileName}`, requestBody)
			.then(() => {
				response
					.writeHead(responseStatusCode, {
						"Content-Length": Buffer.byteLength(requestBody),
					})
					.end(requestBody);
			})
			.catch((error) => {
				console.error("Error writing file:", error);
				sendErrorResponse(500, "Failed to write file");
			});
	});

	request.on("error", (error) => {
		console.error("Request error:", error);
		sendErrorResponse(500, "Server error occurred");
	});
};

const httpServer = http.createServer(handleGuestData);
httpServer.listen(serverPort, serverHost, () => {
	console.log(`Server is running at http://${serverHost}:${serverPort}`);
});
