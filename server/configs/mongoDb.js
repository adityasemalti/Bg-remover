import mongoose from "mongoose";

export const connectDb =async ()=>{
        await mongoose.connect(process.env.MONGO,{
            dbName:"BgRemover",
        }).then(()=>{console.log("database connected")})
}