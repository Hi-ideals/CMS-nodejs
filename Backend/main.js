import express from 'express'
import cors from 'cors'
const app=express()
import dbConnect from './db/connection.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import router from './Routes/loginRoute.js'

dotenv.config()
let port=process.env.PORT

dbConnect(process.env.DBURL,process.env.DBNAME)

app.use(bodyParser.urlencoded({extended:false}))

const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, PATCH, DELETE",
    credentials:true
}

app.use(cors(corsOptions))

app.use(express.json())

// app.use('',router)
app.use('/signup',router)


app.listen(port,()=>{
    console.log(`the server started at port number ${port}`);
    
})