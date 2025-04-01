const express = require('express');
const mongoDbConnection = require('./db/mongoConnection');
const err = require('./middleware/errorHandler')
const userRouter = require('./router/userRouter');
const taskRouter = require('./router/taskRouter')
const cookieParser = require('cookie-parser');
require('dotenv').config();


const app = express()
mongoDbConnection();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser(  ))

const port = process.env.PORT
app.use("/api", userRouter)
app.use("/api", taskRouter)

app.use(err)
app.listen(port, ()=>console.log(`Listening on port ${port}`))