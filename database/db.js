import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async () => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@quizz.kalhpzm.mongodb.net/?retryWrites=true&w=majority&appName=quizz`;
    try{
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch(error){
        console.log('Error while connecting to the database', error);
    }
}

export default Connection;