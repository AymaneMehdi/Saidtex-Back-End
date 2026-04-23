const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();
app.use(cors());

mongoose.connect(url)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));
  
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
