import { Router } from 'express'
import { 
    getResponses,
    responseById,
    createResponse,
   
 } from '../controllers/lol.js'

export const lolRouter = Router()

lolRouter.get('/', getResponses)
lolRouter.get('/:id', responseById)
lolRouter.post('/', createResponse)
