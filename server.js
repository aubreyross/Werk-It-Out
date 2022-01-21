//Dependencies 
  //web framework for node.js
const express = require("express");
//mongoose is a schema based solution to model our apps data
const mongoose = require("mongoose");

//which port the server will listen on
const PORT = process.env.PORT || 3000;

const app = express();

//express middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connects to mongoDB with the correct environment variable and connection string
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/werk-it-out", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// api endpiont routes , added as middleware
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

//starts server 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
