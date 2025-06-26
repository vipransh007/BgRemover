import axios from 'axios';
import fs from 'fs'
import FormData from 'form-data';
import userModel from '../models/userModel.js'

// controller function to remove image background;

const removeBgImage = async (req, res) => {
    try {
        const clerkId = req.clerkId;
        const user = await userModel.findOne({ clerkId })

        if (!user) {
            return res.json({ success: false, message: 'User Not found' })
        }

        if (user.creditBalance == 0) {
            return res.json({ success: false, message: 'Not Enough Credits', creditBalance: user.creditBalance })
        }

        const imagePath = req.file.path;

        // reading the image file
        const imageFile = fs.createReadStream(imagePath);

        const formData = new FormData()
        formData.append('image_file', imageFile)

        console.log("Calling ClipDrop API with image:", imagePath);
        console.log("API Key present:", !!process.env.CLIPDRPOP_API_KEY);

        const response = await axios.post('https://clipdrop-api.co/remove-background/v1', formData, {
            headers: {
                ...formData.getHeaders(),
                'x-api-key': process.env.CLIPDRPOP_API_KEY
            },
            responseType: 'arraybuffer'
        });

        const { data, headers } = response;
        console.log("ClipDrop response headers:", headers);
        console.log("ClipDrop response data length:", data.length);

        if (headers['content-type'] && !headers['content-type'].startsWith('image/')) {
            console.log("ClipDrop API did not return an image. Content-Type:", headers['content-type']);
            // Try to print the first few bytes as string for debugging
            const errorSnippet = Buffer.from(data).toString('utf8', 0, 200);
            console.log("ClipDrop API error snippet:", errorSnippet);
            return res.json({ success: false, message: 'ClipDrop API failed to return an image.', error: errorSnippet });
        }

        const base64Image = Buffer.from(data, 'binary').toString('base64')
        const resultImage = `data:${req.file.mimetype};base64,${base64Image}`

        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })

        res.json({success: true, resultImage, creditBalance:user.creditBalance-1, message:'Background Removed Succesfully'})

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

export { removeBgImage }