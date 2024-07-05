import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    const URL = process.env.DATABASE;
    // const URL = `mongodb+srv://mdhrbajpai:123abcd@quizz.kalhpzm.mongodb.net/?retryWrites=true&w=majority&appName=quizz`;
    try{
        console.log("yahan tak to thik hai");
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch(error){
        console.log('Error while connecting to the database', error);
    }
}

export default Connection;