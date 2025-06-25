import express from 'express';
import { clerkWebHooks } from '../controllers/UserController.js';

const userRouter = express.Router();

// // Use express.raw() middleware to access raw body for Svix verification
userRouter.post('/webhooks', clerkWebHooks);
// userRouter.post('/webhooks');

export default userRouter;