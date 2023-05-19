import mongoose from "mongoose";

 export const connectDB =async()=>{
    try {
        const conn = await mongoose.connect(process.env.DB_MONGO);
        console.log("connecting to datbase")
    } catch (error) {
        console.log(error)
    }
}
export default connectDB;