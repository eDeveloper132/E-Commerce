// lib/mongodb.ts
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

const options: mongoose.ConnectOptions = {
  appName: 'devrel.template.nextjs',
  // …any other mongoose options
};

interface MongooseGlobal {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose | null> | null;
}

// Augment globalThis to include our custom mongoose cache
declare global {
  // disable eslint here since TS requires var in declare global
  /* eslint-disable-next-line no-var */
  var mongoose: MongooseGlobal;
}

// Initialize cache on first import
global.mongoose ??= { conn: null, promise: null };

async function connectToDatabase(): Promise<typeof mongoose | null> {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose
      .connect(uri, options)
      .then((mongooseInstance) => {
        mongooseInstance.connection.on('error', (err) => {
          console.error('⚠️ Mongoose connection error:', err);
        });
        console.log('✅ MongoDB connected');
        return mongooseInstance;
      })
      .catch((err) => {
        console.error('❌ Failed to connect to MongoDB:', err);
        return null;
      });
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}

export default connectToDatabase;
