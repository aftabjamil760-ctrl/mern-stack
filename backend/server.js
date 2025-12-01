const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aftabjamil793:ZWQoZPTs3HcMd6eZ@cluster0.5ooaiii.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
app.use(cors())
app.use(express.json());
db.on('error', (error) => {
 console.log(error);
});

db.once('open', () => {
 console.log('Connected to database');
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});
app.get("/hello", (req, res) => {
  res.json({ message: "Hello world" });
});

const port = 5000;

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});
