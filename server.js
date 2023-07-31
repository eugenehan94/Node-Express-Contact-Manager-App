const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");

// connectDb will not work - MongoDB is not setup - refer to .env
connectDb();
const app = express();

const port = process.env.PORT || 5000;

//NOTE: When sending data from client to server - you need a body parser or data will be undefined
// Thus, we use the express.json()
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
