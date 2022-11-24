import { Schedule } from '../models/schedule.model.js'

export const getResponses = async (req,res) => {
    try{
        const list = await Schedule.findAll({ include: { all: true }})
        res.status(200).json(list)
    }catch(err){
        console.log(err);
    }
}


export const scheduleById = async (req,res) => {
    const { id } = req.params
    try{
        const scheduleId = await Schedule.findOne({
            where: {
              id,
            },
          });

        if (scheduleId) {
            res.status(200).json(scheduleId);
        } else {
            res.status(404).json({message: "No existen registros con ese ID"});
        }
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createSchedule= async  (req,res) => {
   
    try{
        const { start_time } = req.body
   
    const createSchedule= await Schedule.create({
        start_time
    })
    res.status(200).json({message: 'schedule was created succesfully', createSchedule})
    }catch(error){
        console.log(error)
    }
}

export const deleteSchedule = async (req,res) => {
    const { id } = req.params
    try{
         const deleteOne = await Schedule.destroy({
            where: {
                id
            }
        })

        if(deleteOne) {
            res.status(200).json({message: `Register with id:${id} was succesfully removed`})
        }else {
            res.status(404).json({error: "No existen registros con ese ID"})
        }
      
       }catch(err){
            console.error(err)
       }
}

export const editSchedule= async (req,res) => {
   
    const { id } = req.params
    try {
        const {  start_time } = req.body
    
        const editSchedule = await Schedule.findByPk(id)
        
        if(editSchedule) {
            editSchedule.start_time = start_time
            
        await editSchedule.save()

        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editSchedule})
        } else {
            res.status(404).json({error: "No existen registros con ese ID"})
        }
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
