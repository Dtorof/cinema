import { Router } from 'express'
import multer  from 'multer'
const upload = multer()
import { 
    getResponses,
    scheduleById,
    createSchedule,
    deleteSchedule,
    editSchedule
 } from '../controllers/schedule.controller.js'

export const scheduleRouter = Router()

scheduleRouter.get('/', getResponses)
scheduleRouter.get('/:id', scheduleById)
scheduleRouter.post('/',upload.none(), createSchedule)
scheduleRouter.delete('/:id', deleteSchedule)
scheduleRouter.put('/:id', editSchedule)