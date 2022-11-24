import  { Sell } from '../models/sell.model.js'
import { getResponses as room} from './room.controller.js'
import { Room } from '../models/room.model.js'
export const getResponses = async (req,res) => {
    try{
        const list = await Sell.findAll({ include: { all: true }})
        res.status(200).json(list)
    }catch(err){
        console.log(err);
    }
}

export const responseById = async (req,res) => {
    const { id } = req.params
    try{
        const itemId = await Sell.findOne({
            where: {
              id,
            },
          });
          
        if (itemId) {
            res.status(200).json(itemId);
        } else {
            res.status(404).json({message: "No existen registros con ese ID"});
        }
        
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createResponse = async  (req,res) => {

    try {
      
     
       
    let { billboard_id, amount, user_id, total,price,seats} = req.body

    const createRegister = await Sell.create({
        billboard_id, amount, user_id, total,price,seats, 
    })

    res.status(200).json({message: "Register was created succesfully", createRegister})

    } catch (error) {
        console.error(error)
    }
    
}

export const deleteResponse = async (req,res) => {
    const { id } = req.params
    try{
        const deleteOne =  await Sell.destroy({
            where: {
                id
            }
        })
        
         if (deleteOne) {
            res.status(200).json({message: `Register with id:${id} was succesfully removed`})
        } else {
            res.status(404).json({message: "No existen registros con ese ID"});
        }
       }catch(err){
            console.error(err)
       }
}

export const editResponse = async (req,res) => {
    
    const { id } = req.params
    console.log(id)
    try {

        let { billboard_id, amount, user_id, total,price} = req.body
    
        const editRegister = await Sell.findByPk(id)
       
    
        if (editRegister) {

            editRegister.billboard_id = billboard_id
            editRegister.amount = amount
            editRegister.user_id = user_id
            editRegister.total = total
            editRegister.price = price
       
            await editRegister.save()
        
            res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
        } else {
            res.status(404).json({error: "No existen registros con ese ID"})
        }
       
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
