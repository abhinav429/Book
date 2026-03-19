import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error('Please define the MONGODB_URI environment variable');

declare global {
    var mongooseCache: {
        conn: typeof mongoose | null
        promise: Promise<typeof mongoose> | null
    }
}

let cached = global.mongooseCache || (global.mongooseCache = { conn: null, promise: null });

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        const msg = e instanceof Error ? e.message : String(e);
        if (msg.includes('MongooseServerSelectionError') || msg.includes('Could not connect')) {
            console.error('MongoDB Atlas: add this machine\'s IP in Network Access. https://cloud.mongodb.com → Network Access → Add IP Address.', e);
        } else {
            console.error('MongoDB connection error. ' + e);
        }
        throw e;
    }

    console.info('Connected to MongoDB');
    return cached.conn;
}
