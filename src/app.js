// Import the express library, which is used to create a web server.
import express from "express";

// Import the cors library, which is used to enable Cross-Origin Resource Sharing (CORS).
import cors from "cors";

// Import the cookie-parser library, which is used to parse Cookie header and populate req.cookies with an object keyed by the cookie names.
import cookieParser from "cookie-parser";

// Create an instance of an Express application.
const app = express();

// Use the express.json middleware. This parses incoming requests with JSON payloads.
// The limit option is set to "16kb", which means the maximum request body size is 16 kilobytes.
app.use(express.json({ limit: "16kb" }));

// Use the express.urlencoded middleware. This parses incoming requests with URL-encoded payloads.
// The extended option is set to true, which allows rich objects and arrays to be encoded into the URL-encoded format.
// The limit option is set to "16kb", which means the maximum request body size is 16 kilobytes.
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Use the express.static middleware to serve static files. Here, it's set to serve files from the "public" directory.
app.use(express.static("public"));

// Use the cors middleware to enable CORS.
// The credentials option is set to true, which means Access-Control-Allow-Credentials will be set to true.
// The origin option is set to the value of the ORIGIN environment variable, which is the origin to which the server will allow requests.
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);

// Use the cookie-parser middleware to parse cookies in the request.
app.use(cookieParser());

// Export the app instance for use in other modules.
export { app };
