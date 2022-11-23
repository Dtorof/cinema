import { Router } from 'express'
import { 
    getResponses,
    responseById,
    createResponse,
    deleteResponse,
    editResponse
 } from '../controllers/movie.controller.js'

export const movieRouter = Router()

movieRouter.get('/', getResponses)
movieRouter.get('/:id', responseById)
movieRouter.post('/', createResponse)
movieRouter.delete('/:id', deleteResponse)
movieRouter.put('/:id', editResponse)