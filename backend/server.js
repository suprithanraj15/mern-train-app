import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT
const DB = process.env.MONGO_URL

mongoose.connect(DB)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

const TrainerSchema = new mongoose.Schema({
    name:String,
    skills:String
})

const Trainer = mongoose.model("Trainer",TrainerSchema)

async function seedData(){

    const count = await Trainer.countDocuments()

    if(count===0){

        await Trainer.insertMany([
            {name:"Mahesh",skills:"React"},
            {name:"Arun",skills:"Node"},
            {name:"Divya",skills:"MongoDB"}
        ])

        console.log("Demo trainers inserted")
    }
}

seedData()

app.get("/trainers", async(req,res)=>{

    const data = await Trainer.find()
    res.json(data)

})

app.post("/trainer", async(req,res)=>{

    const trainer = new Trainer(req.body)
    await trainer.save()

    res.json({message:"Trainer Added"})

})

app.listen(PORT,()=>{
    console.log("Server running on",PORT)
})