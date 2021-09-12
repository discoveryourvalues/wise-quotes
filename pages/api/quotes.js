import dbConnect from '../../lib/dbConnect'
import Quotes from '../../models/quote'

export default async function handler (req, res) {
  const { method } = req

  try {
    await dbConnect()

  } catch(err) {
    console.log(err)
  }

  switch (method) {
    case 'GET':
      try {
        const quotes = await Quotes.find({}).limit(100)
        res.status(200).json({ success: true, data: quotes })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}