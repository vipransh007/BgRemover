import express from 'express';
import { removeBgImage } from '../controllers/imageController.js';
import upload from '../controllers/middleware/multer.js';
import authUser from '../authentication/auth.js'

const imageRouter = express.Router();

imageRouter.post('/remove-bg' , upload.single('image'), authUser , removeBgImage)


export default imageRouter