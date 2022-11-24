import { Router } from 'express'
import multer  from 'multer'
const upload = multer()
import { 
    getResponses,
    responseById,
    createResponse,
    deleteResponse,
    editResponse
 } from '../controllers/sell.controller.js'

export const sellRouter = Router()

sellRouter.get('/', getResponses)
sellRouter.get('/:id', responseById)
sellRouter.post('/', createResponse)
sellRouter.delete('/:id', deleteResponse)
sellRouter.put('/:id', editResponse)