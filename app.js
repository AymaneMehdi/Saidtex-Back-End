const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const url = process.env.URL;
const port = process.env.PORT;

const app = express();
app.use(cors());

mongoose.connect(`${process.env.URL}`)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));
  
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
