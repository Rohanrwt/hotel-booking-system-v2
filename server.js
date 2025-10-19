require("dotenv").config(); //Load .env variables
const express = require("express"); //Import the express framework

const app = express(); //Create your application instance

//a simple test route
app.get("/", (req, res) => {
  //Define a route for get request
  res.send(`Hello Rohan, your server is live`); //Send a response back to server
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  //Start the server on that PORT
  console.log(`Server Running -> http://localhost:${PORT}`)
);
