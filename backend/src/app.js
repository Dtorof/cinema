import express from "express"
import morgan from "morgan"
import cors from 'cors'
import bodyParser  from 'body-parser';
import { errorRouter } from "./routes/error404.route.js"
import { scheduleRouter } from './routes/schedule.route.js'
import { billboardRouter } from './routes/billboard.route.js'
import { userRouter } from "./routes/users.route.js";
import { roomRouter } from "./routes/room.route.js";
import { movieRouter } from "./routes/movie.route.js";
import { categoryRouter } from "./routes/category.route.js";
import { sellRouter } from "./routes/sell.route.js";
const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(express.urlencoded({  extended: true }))


app.use('/api/v1/schedule', scheduleRouter)
app.use('/api/v1/billboard', billboardRouter)
app.use('/api/v1/movie', movieRouter)
app.use('/api/v1/category', categoryRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/room', roomRouter)
app.use('/api/v1/sell', sellRouter)
app.use('*', errorRouter)


export default app