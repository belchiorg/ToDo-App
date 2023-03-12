const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Handle CORS + middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, HEAD, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, auth-token");
  next();
})  

// Database 
const password = process.env.MONGODB_PASSWORD;
const uri = "mongodb+srv://belchior:" + password + "@cluster0.ehl6apn.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected");
})
.catch(err => console.log(err));

app.use(bodyParse.json());

//  routes
app.get("/", (req, res) => {
  res.send("Yay home page");
});

const TodosRoute = require('./routes/Todos');
app.use('/todos', TodosRoute)

// start server

app.listen(8000, () => {
console.log("Listening on port 8000...");
})