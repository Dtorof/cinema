import { Router } from 'express'
import { 
    getResponses,
    responseById,
    createResponse,
    deleteResponse,
    editResponse
 } from '../controllers/category.controller.js'

export const categoryRouter = Router()

categoryRouter.get('/', getResponses)
categoryRouter.get('/:id', responseById)
categoryRouter.post('/', createResponse)
categoryRouter.delete('/:id', deleteResponse)
categoryRouter.put('/:id', editResponse)