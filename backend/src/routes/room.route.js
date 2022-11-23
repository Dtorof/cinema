import { Router } from 'express'
import { 
    getResponses,
    responseById,
    createResponse,
    deleteResponse,
    editResponse
 } from '../controllers/room.controller.js'

export const roomRouter = Router()

roomRouter.get('/', getResponses)
roomRouter.get('/:id', responseById)
roomRouter.post('/', createResponse)
roomRouter.delete('/:id', deleteResponse)
roomRouter.put('/:id', editResponse)