const express = require('express');
const cors = require('cors');
const authRouter = require('./src/routers/authRouter');
const connectDB = require('./src/configs/connectDB');
const errMiddlewareHandler = require('./src/middlewares/errorMiddleware');
require('dotenv').config;

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;
// pVX8B83o3NDskVAm

app.use('/auth', authRouter);

connectDB();

app.use(errMiddlewareHandler);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server starting at http://localhost:${PORT}`);
});
