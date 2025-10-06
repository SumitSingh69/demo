import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if(!uri) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }
        await mongoose.connect(uri);
        console.log('Database connected successfully');
    }catch(err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
}
export default connectDB;