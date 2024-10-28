import express from "express"; // Import express
import router from "./routes/todos.js"; // Import the todos router

const app = express(); // Create an express application

// Define the port
const port = 3000;

// Middleware to parse JSON requests (if needed for POST and PUT requests)
app.use(express.json()); 

// Define a root route
app.get("/", (req, res) => {
  res.send("Hello Todo App!!!");
});

// Mount the router with the /api prefix
app.use("/api", router);

// Start the server
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
