import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";
import process from 'node:process';

if(!DB_URI){
    throw new Error('Please define the MONGODB_URI environmental variable inside .env')
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('Connected to Database Successfully')
    } catch (error) {
        console.error('Error connecting to database: ', error)
        process.exit(1);
    }
}

export default connectToDatabase;