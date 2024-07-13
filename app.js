const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()
const connectDB = require('./db/connect')
const notFound = require('./middlewares/notFound')
//middleware
app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks', tasks)

app.use(notFound)

/*
 app.get('/api/v1/tasks')     -> get all the tasks
 app.post('/api/v1/tasks')    -> create new task
 app.post('/api/v1/tasks/:id')    -> get a single task
 app.patch('/api/v1/tasks/:id')    -> update task
 app.delete('/api/v1/tasks/:id')    -> delete task


*/


const port = process.env.PORT || 3000


const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`))
    }catch(err){
        console.log(err);
    }
}

start()


