import express from "express"
import morgan from "morgan"
import cors from 'cors'
import  multer  from 'multer'
import bodyParser  from 'body-parser';
import { errorRouter } from "./routes/error404.route.js"
import { userRouter } from "./routes/users.route.js";
import { roomRouter } from "./routes/room.route.js";
import { movieRouter } from "./routes/movie.route.js";
import { categoryRouter } from "./routes/category.route.js";

const app = express()
const upload = multer()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(express.urlencoded({  extended: true }))
app.use(upload.none())

app.use('/api/v1/movie', movieRouter)
app.use('/api/v1/category', categoryRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/room', roomRouter)
app.use('*', errorRouter)

export default app