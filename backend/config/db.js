import mongoose from "mongoose";

export const connectDB = async () =>{

    await mongoose.connect('mongodb+srv://Deligroo:7483171841@cluster1.u5dhc.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}