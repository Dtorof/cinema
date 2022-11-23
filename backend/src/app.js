import express from "express"
import morgan from "morgan"
import cors from 'cors'

import { errorRouter } from "./routes/error404.route.js"

const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({  extended: false }))


app.use('*', errorRouter)

export default app