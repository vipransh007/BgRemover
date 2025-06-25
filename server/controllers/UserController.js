// import { Webhook } from 'svix';
// import User from '../models/UserModel.js';

// http://localhost:4000/api/user/webhooks


// const clerkWebhooks = async (req, res) => {
//   const payload = req.body.toString();
//   console.log("📩 Raw Payload:", payload);

//   try {
//     const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
//     await whook.verify(payload, {
//       "svix-id": req.headers['svix-id'],
//       "svix-timestamp": req.headers['svix-timestamp'] || '',
//       "svix-signature": req.headers['svix-signature']
//     });

//     const { data, type } = JSON.parse(payload);
//     console.log("🔄 Processing:", type, "ID:", data.id);

//     // Defensive checks for required fields
//     const email = data.email_addresses?.[0]?.email_address || data.email_address || '';
//     const photo = data.image_url || '';
//     if (!data.id || !email || !photo) {
//       console.error("❌ Missing required user fields", { id: data.id, email, photo });
//       return res.status(400).json({ error: 'Missing required user fields', id: data.id, email, photo });
//     }

//     const userData = {
//       clerkId: data.id,
//       email,
//       firstName: data.first_name || '',
//       lastName: data.last_name || '',
//       photo,
//     };

//     switch (type) {
//       case "user.created":
//         // Only create if not exists
//         await User.create(userData)
//           .then(user => console.log("💾 Saved user:", user.email))
//           .catch(err => console.error("❌ Save failed:", err, payload));
//         break;
//       case "user.updated":
//         // Update if exists, otherwise do nothing
//         await User.findOneAndUpdate(
//           { clerkId: data.id },
//           { $set: userData },
//           { new: true }
//         )
//           .then(user => {
//             if (user) {
//               console.log(`🔄 Updated user: ${user.email}`);
//             } else {
//               console.log(`⚠️ User not found for update: ${data.id}`);
//             }
//           })
//           .catch(err => {
//             console.error("❌ Update failed:", err, payload);
//           });
//         break;
//       case "user.deleted":
//         await User.findOneAndDelete({ clerkId: data.id })
//           .then(user => {
//             if (user) {
//               console.log(`🗑️ Deleted user: ${user.email}`);
//             } else {
//               console.log(`🗑️ User not found for deletion: ${data.id}`);
//             }
//           })
//           .catch(err => {
//             console.error("❌ Delete failed:", err, payload);
//           });
//         break;
//       default:
//         console.log(`ℹ️ Unhandled webhook event type: ${type}`);
//     }

//     return res.json({ success: true });
//   } catch (err) {
//     console.error("💥 CRITICAL ERROR:", err, payload, err.stack);
//     return res.status(500).json({ error: err.message });
//   }
// };

// export { clerkWebhooks };