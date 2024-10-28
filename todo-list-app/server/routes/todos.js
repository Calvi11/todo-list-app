import express from "express";

const router = express.Router();

// GET all todos
router.get("/todos", (req, res) => {
  res.send("All Todos");
});

// GET a specific todo by id
router.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Getting TODO with id ${id}`);
});

// POST a new todo
router.post("/todos", (req, res) => {
  res.json({ id: 1, title: "Todo", description: "My todo" });
});

// PUT (update) a todo by id
router.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Updating TODO with id ${id}`);
});

// DELETE a todo by id
router.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Deleting TODO with id ${id}`);
});

// Export the router object as the default export
export default router;
