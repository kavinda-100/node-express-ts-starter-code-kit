import app from "./app";
require("dotenv").config();

const port = process.env.PORT || 8080;

// connect to database here

// Start the server
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
