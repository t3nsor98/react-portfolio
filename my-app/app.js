const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.json());

// sample API endpoint
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend" });
});


// api / endpoint to handle post request
app.post("/api/data", (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({ message: "Data received successfully" });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});