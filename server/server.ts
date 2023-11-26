import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => res.send("Weather API"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
