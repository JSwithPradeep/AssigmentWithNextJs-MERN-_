import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import UserRoute from "./routes/UserRoute.js"
import cors from 'cors';

const app = express();
dotenv.config()



mongoose.connect(process.env.MONGO_DB, 
    { 
        useNewUrlParser: true,
         useUnifiedTopology: true 
        })

    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.error('Error connecting to the database', err);
    });

    app.use(express.json());
    app.use(cors());

app.use("/user", UserRoute)

const port = process.env.PORT || 9500
app.listen(port, ()=>{
    console.log(`Your applcation is run on ${port}`)
})