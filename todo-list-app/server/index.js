import express from 'express';
import router from './routes/todos.js'; // Import the router

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api", router); // Mount the router to the express app

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
