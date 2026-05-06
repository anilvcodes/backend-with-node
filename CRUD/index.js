const express = require("express");
const { z } = require("zod");

const app = express();
app.use(express.json());

let data = [];

// Schema
const userSchema = z.object({
  name: z.string().min(1, "Name required"),
  age: z.number().min(1, "Age must be > 0")
});

// CREATE
app.post("/add", (req, res, next) => {
  try {
    const parsed = userSchema.parse(req.body); // throws error
    data.push(parsed);
    res.json({ msg: "Added", data: parsed });
  } catch (err) {
    next(err); // send to global handler
  }
});

// READ
app.get("/get", (req, res) => {
  res.json(data);
});

// UPDATE
app.put("/update/:i", (req, res, next) => {
  try {
    const parsed = userSchema.parse(req.body);

    if (!data[req.params.i]) {
      return res.status(404).json({ msg: "Not found" });
    }

    data[req.params.i] = parsed;
    res.json({ msg: "Updated" });
  } catch (err) {
    next(err);
  }
});

// DELETE
app.delete("/delete/:i", (req, res) => {
  if (!data[req.params.i]) {
    return res.status(404).json({ msg: "Not found" });
  }

  data.splice(req.params.i, 1);
  res.json({ msg: "Deleted" });
});


// 🔥 GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  if (err instanceof z.ZodError) {
    return res.status(400).json({
      error: err.errors.map(e => e.message)
    });
  }

  res.status(500).json({
    error: "Something went wrong"
  });
});

app.listen(3000, () => console.log("Server running"));