import  { Billboard } from '../models/billborad.model.js'


export const getResponses = async (req,res) => {
    try{
        const list = await Billboard.findAll({ include: { all: true }})
        res.status(200).json(list)
    }catch(err){
        console.log(err);
    }
}

export const responseById = async (req,res) => {
    const { id } = req.params
    try{
        const itemId = await Billboard.findOne({
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
     
      
      
     
       
    let { room_id, movie_id, start_date, end_date, price,schedule_id } = req.body
    let getAge = end_date => Math.floor((new Date() - new Date(end_date).getTime()) /(1000 * 60 * 60 * 24))
    let age =getAge(end_date)
    let state = ''
    if(age<1){
        state='Disponible' 
    }else{
        console.log('age')
        state='No Disponible'
    }
    const createRegister = await Billboard.create({
        room_id, movie_id, start_date, end_date, state, price,schedule_id
    })

    res.status(200).json({message: "Register was created succesfully", createRegister})

    } catch (error) {
        console.error(error)
    }
    
}

export const deleteResponse = async (req,res) => {
    const { id } = req.params
    try{
        const deleteOne =  await Billboard.destroy({
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

        let { room_id, movie_id, start_date, end_date,price,schedule_id} = req.body
    
        const editRegister = await Billboard.findByPk(id)
        let getAge = end_date => Math.floor((new Date() - new Date(end_date).getTime()) / (1000 * 60 * 60 * 24))
        let age =getAge(end_date)
        let state = ''
      console.log(age)
        if(age<1){
            state='Disponible' 
        }else{
            console.log('age')
            state='No Disponible'
        }
    
        if (editRegister) {

            editRegister.room_id = room_id
            editRegister.movie_id = movie_id
            editRegister.start_date = start_date
            editRegister.end_date = end_date
            editRegister.price = price
            editRegister.schedule_id = schedule_id
            editRegister.state = state
            await editRegister.save()
        
            res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
        } else {
            res.status(404).json({error: "No existen registros con ese ID"})
        }
       
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
