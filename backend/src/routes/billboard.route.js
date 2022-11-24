import { Router } from 'express'
import multer  from 'multer'
const upload = multer()
import { 
    getResponses,
    responseById,
    createResponse,
    deleteResponse,
    editResponse
 } from '../controllers/billboard.controller.js'

export const billboardRouter = Router()

billboardRouter.get('/', getResponses)
billboardRouter.get('/:id', responseById)
billboardRouter.post('/', createResponse)
billboardRouter.delete('/:id', deleteResponse)
billboardRouter.put('/:id', editResponse)