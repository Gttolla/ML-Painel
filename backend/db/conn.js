import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connection() {
    try{
        mongoose.set('strictQuery', true);
        
        await mongoose.connect(
            process.env.MONGODB_URI,
        );

        console.log('conectado com o banco!')
    }
    catch (error){
        console.log(`Erro: ${error}`)
    }
}

export default connection;

