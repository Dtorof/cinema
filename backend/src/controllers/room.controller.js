import  { Room } from '../models/room.model.js'


export const getResponses = async (req,res) => {
    try{
        const list = await Room.findAll({ include: { all: true }})
        res.status(200).json(list)
    }catch(err){
        console.log(err);
    }
}

export const responseById = async (req,res) => {
    const { id } = req.params
    try{
        const itemId = await Room.findOne({
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
    
    const { name, capacity, seats_distribution, desc_location  } = req.body

    const createRegister = await Room.create({
        name, capacity, seats_distribution, desc_location
    })

    res.status(200).json({message: "Register was created succesfully", createRegister})

    } catch (error) {
        console.error(error)
    }
    
}

export const deleteResponse = async (req,res) => {
    const { id } = req.params
    try{
        const deleteOne =  await Room.destroy({
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
    try {

        const { name, capacity, seats_distribution, desc_location } = req.body
    
        const editRegister = await Room.findByPk(id)

        if (editRegister) {

            editRegister.name = name
            editRegister.capacity = capacity
            editRegister.seats_distribution = seats_distribution
            editRegister.desc_location = desc_location
            await editRegister.save()
        
            res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
        } else {
            res.status(404).json({error: "No existen registros con ese ID"})
        }
       
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
