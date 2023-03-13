import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(process.env.mongodb_database, {
    useUnifiedTopology: true,
  });

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllComments(client, collection) {
  const db = client.db();

  const comments = await db.collection(collection).find().sort({ _id: -1 }).toArray();
  return comments;
}
