import  { Category } from '../models/category.model.js'


export const getResponses = async (req,res) => {
    try{
        const list = await Category.findAll({ include: { all: true }})
        res.status(200).json(list)
    }catch(err){
        console.log(err);
    }
}

export const responseById = async (req,res) => {
    const { id } = req.params
    try{
        const itemId = await Category.findOne({
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
    
    const { name } = req.body

    const createRegister = await Category.create({
        name
    })

    res.status(200).json({message: "Register was created succesfully", createRegister})

    } catch (error) {
        console.error(error)
    }
    
}

export const deleteResponse = async (req,res) => {
    const { id } = req.params
    try{
        const deleteOne =  await Category.destroy({
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

        const { name } = req.body
    
        const editRegister = await Category.findByPk(id)

        if (editRegister) {

            editRegister.name = name
            await editRegister.save()
        
            res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
        } else {
            res.status(404).json({error: "No existen registros con ese ID"})
        }
       
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
