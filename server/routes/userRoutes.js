import express from 'express';
import { clerkWebhooks } from '../controllers/UserController.js';

const userRouter = express.Router();

// Use express.raw() middleware to access raw body for Svix verification
userRouter.post('/webhooks', express.raw({ type: 'application/json' }), clerkWebhooks);

export default userRouter;