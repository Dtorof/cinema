import { Router } from 'express'
import { 
    user,
    userById,
    createUser,
    deleteUSer,
    editUser
 } from '../controllers/user.controller.js'

export const userRouter = Router()

userRouter.get('/', user)
userRouter.get('/:id', userById)
userRouter.post('/', createUser)
userRouter.delete('/:id', deleteUSer)
userRouter.put('/:id', editUser)