const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express()
dotenv.config()

const port = process.env.PORT || process.env.LOCALPORT

app.use(cors())

require('./db/mongoose')

const usersRouter = require('./routers/users');
const tasksRouter = require('./routers/tasks') 


app.use(express.json())
app.use('/users', usersRouter)
app.use('/tasks', tasksRouter)

app.listen(port, () => console.log(`Connected and running on ${port}`))
