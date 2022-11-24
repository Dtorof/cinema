import express from "express"
import morgan from "morgan"
import cors from 'cors'
//import  multer  from 'multer'
import bodyParser  from 'body-parser';
import { errorRouter } from "./routes/error404.route.js"
import { scheduleRouter } from './routes/schedule.route.js'
import { userRouter } from './routes/users.route.js'
import { billboardRouter } from './routes/billboard.route.js'
const app = express()
//const upload = multer()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(express.urlencoded({  extended: true }))
//app.use(upload.none())


app.use('/api/v1/schedule', scheduleRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/billboard', billboardRouter)
app.use('*', errorRouter)


export default app