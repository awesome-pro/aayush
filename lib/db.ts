import { Db, MongoClient } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db = {} as Db;

export async function dbConnect(dbName: string) {
  if (cachedClient && cachedDb) {
    console.log("Using cached database instance :)");
    return { client: cachedClient, db: cachedDb };
  }

  try {
    const mongoClient = new MongoClient(process.env.MONGODB_URI as string);
    await mongoClient.connect();

    const db: Db = mongoClient.db(dbName);
    console.log("New database instance created");
    cachedClient = mongoClient;
    cachedDb = db;

    return { client: mongoClient, db };
  } catch (error) {
    console.error("Failed to connect to the database", error);
    throw new Error("Failed to connect to the database");
  }
}