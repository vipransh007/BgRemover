
import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
// import { connect } from 'mongoose';
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;

dotenv.config();
const app = express();
const startServer = async () => {
  await connectDB();

  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    console.log("Received request at root endpoint");
    res.send('Welcome to the fasjlkknsakjdf API');
  });

  app.use('/api/user', userRouter);
  app.use('/api/image', imageRouter);

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
