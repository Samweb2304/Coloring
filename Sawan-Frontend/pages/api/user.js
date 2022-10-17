// import dbConnect from '../../lib/dbConnect';
// import User from '../../models/User';

// //   @param {import('next').NextApiRequest} req
// //   @param {import('next').NextApiResponse} res
 
// export default async function handler (req, res) {
//   const { method } = req

//   await dbConnect()
//   console.log("Connected to DataBase")
//   switch (method) {
//     case 'GET':
//       try {
//         const user = await User.find({})
//         res.status(200).json({ success: true, data: user })
//         console.log("Get API Successfully Connected")
//       } catch (error) {
//         res.status(400).json({ success: false })
//         console.log("Get API Not Connected")
//       }
//       break
//     case 'POST':
//       try {
//         const user = await User.create(req.body)
//         res.status(200).json({ success: true, data:user })
//         console.log("Post API Successfully Connected")
//       } catch (error) {
//         res.status(400).json({ success: false })
//         console.log("Post API Not Connected")
//       }
//       break
//     default:
//       res.status(400).json({ success: false })
//       break
//   }
// }
