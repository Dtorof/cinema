import  { MyModel } from '../models/lol.js'


export const getResponses = async (req,res) => {
    try{
        const list = await MyModel.findAll({ include: { all: true }})
        res.status(200).json(list)
    }catch(err){
        console.log(err);
    }
}

export const responseById = async (req,res) => {
    const { id } = req.params
    try{
        const itemId = await MyModel.findOne({
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
    
    const { myArrayField  } = req.body

    const seats_distribution = ''

    const createRegister = await MyModel.create({
        myArrayField
    })

    res.status(200).json({message: "Register was created succesfully", createRegister})

    } catch (error) {
        console.error(error)
    }
    
}

