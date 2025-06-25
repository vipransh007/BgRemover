import express from 'express';
import { clerkWebHooks, userCredits } from '../controllers/UserController.js';
import authUser from '../authentication/auth.js';

const userRouter = express.Router();

// // Use express.raw() middleware to access raw body for Svix verification
userRouter.post('/webhooks', clerkWebHooks);
userRouter.get('/credits', authUser, userCredits)
// userRouter.post('/webhooks');

export default userRouter;