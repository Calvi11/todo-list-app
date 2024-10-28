// todos.js
import express from 'express';

const router = express.Router();

// GET /api/todos - Retrieve all todos
router.get('/todos', (req, res) => {
    res.send('All Todos'); // You can replace this with actual data in the future
});

// GET /api/todos/:id - Retrieve a specific todo by ID
router.get('/todos/:id', (req, res) => {
    const { id } = req.params; // Get the ID from the route
    res.send( `Getting TODO with id ${id}` ); // Send a pretty JSON response
});

// POST /api/todos - Create a new todo
router.post('/todos', (req, res) => {
    const newTodo = {
        id: 1,
        title: "Todo",
        description: "My todo"
    };
    res.json(newTodo); // Send the created todo as a pretty JSON response
});

// PUT /api/todos/:id - Update a specific todo by ID
router.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    res.send( `Updating TODO with id ${id}` ); // Pretty JSON response
});

// DELETE /api/todos/:id - Delete a specific todo by ID
router.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    res.send( `Deleting TODO with id ${id}`); // Pretty JSON response
});

// Export the router
export default router;
