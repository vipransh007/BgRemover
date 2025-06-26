import { Webhook } from 'svix';
import userModel from '../models/userModel.js'
;

// http://localhost:4000/api/user/webhooks


const clerkWebHooks =  async (req, res) => {

  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body),{
    "svix-id": req.headers['svix-id'],
    "svix-timestamp": req.headers['svix-timestamp'],
    "svix-signature": req.headers['svix-signature'],
  });



const {data , type} = req.body;

    switch (type) {
      case 'user.created':{

        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        }

        await userModel.create(userData);
        res.json({});

        console.log('New user created:', newUser);
        break;
    }

      case 'user.updated':{

        const userData = {
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        }

        const updatedUser = await userModel.findOneAndUpdate(
          { clerkId: data.id },
          userData,
          { new: true}
        );
        res.json({});

        console.log('User updated:', updatedUser);
        break;
    }

      case 'user.deleted':{


        await userModel.deleteOne({ clerkId: data.id });
        res.json({});
        console.log('User deleted:', data.id);
        break;
      }
      
      default:{
        console.log('Unhandled event type:', type);
    }
}
    
} catch (error) {
    console.error('Webhook verification failed:', error);
    return res.status(400).json({ error: 'Invalid webhook signature' });
  }
}



const userCredits = async (req, res) => {
  try {
    const clerkId = req.clerkId;
    const userData = await userModel.findOne({clerkId});
    res.json({success:true,  credits:userData.creditBalance});
  } catch (error) {
    console.error('Credit fetch failed:', error);
    return res.status(400).json({ error: 'Invalid request' });
  }
}



export {clerkWebHooks , userCredits};