
import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
// import { connect } from 'mongoose';
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";

const PORT = process.env.PORT || 4000;

dotenv.config();
const app = express();
await connectDB();


// Middleware

app.use(cors());
app.use(express.json());


// API ROUTES
app.get('/', (req, res) => {
  console.log("Received request at root endpoint");
  
  res.send('Welcome to the fasjlkknsakjdf API');
});


app.use('/api/user', userRouter);

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});