const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

app.use(cors({ origin: "http://localhost:8081" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the database!"))
  .catch(err => {
    console.error("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => res.json({ message: "Welcome to crud api." }));

require("./app/routes/approutes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
