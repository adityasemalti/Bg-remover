import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import { connectDb } from './configs/mongoDb.js';
import userRouter from './routes/userRoutes.js';

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Api working")
})
app.use('/api/user',userRouter)

connectDb()
app.listen(PORT,()=>{console.log(`Server running on ${PORT}`)})