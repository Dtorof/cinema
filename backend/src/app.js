import express from "express"
import morgan from "morgan"
import cors from 'cors'
import  multer  from 'multer'
import bodyParser  from 'body-parser';
import { errorRouter } from "./routes/error404.route.js"

const app = express()
const upload = multer()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(express.urlencoded({  extended: true }))
app.use(upload.none())

app.use('*', errorRouter)

export default app