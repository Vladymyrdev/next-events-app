import { connectDatabase, insertDocument, getAllComments } from '../../../helpers/db-util';

async function handler(req, res) {
  const eventId = req.query.eventId;

  try {
    const client = await connectDatabase();

    if (req.method === 'POST') {
      const { email, name, text } = req.body;

      if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
        res.status(422).json({ message: 'Invalid input' });
        return;
      }

      const newComment = {
        email,
        name,
        text,
        eventId,
      };

      const result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;

      res.status(201).json({ message: 'Added comment', comment: newComment });
    }

    if (req.method === 'GET') {
      const comments = await getAllComments(client, 'comments');
      res.status(200).json({ comments });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export default handler;
