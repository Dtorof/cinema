import { User } from '../models/user.model.js'


export const user = async (req,res) => {
    try{
        const list = await User.findAll()
        res.status(200).json(list)
    }catch(err){
        console.log(err);
    }
   
}

export const userById = async (req,res) => {
    const { id } = req.params
    try{
        const userId = await User.findOne({
            where: {
              id,
            },
          });

        if (userId) {
            res.status(200).json(userId);
        } else {
            res.status(404).json({message: "No existen registros con ese ID"});
        }
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createUser = async  (req,res) => {
   
    try{
        const { name, lastname, cc, address, phone, email  } = req.body
   
    const createUser= await User.create({
        name, lastname, cc, address, phone, email  
    })
    res.status(200).json({message: 'user was created succesfully', createUser})
    }catch(error){
        console.log(error)
    }
}

export const deleteUSer = async (req,res) => {
    const { id } = req.params
    try{
         const deleteOne = await User.destroy({
            where: {
                id
            }
        })

        if(deleteOne) {
            res.status(200).json({message: `User with id:${id} was succesfully removed`})
        }else {
            res.status(404).json({error: "No existen registros con ese ID"})
        }
      
       }catch(err){
            console.error(err)
       }
}

export const editUser = async (req,res) => {
   
    const { id } = req.params
    try {
        const {  name, lastname, cc, address, phone, email } = req.body
    
        const editUser = await User.findByPk(id)
        
        if(editUser) {
            editUser.name = name
            editUser.lastname = lastname
            editUser.cc = cc
            editUser.address = address
            editUser.phone = phone
            editUser.email = email
        await editUser.save()

        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editUser})
        } else {
            res.status(404).json({error: "No existen registros con ese ID"})
        }
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
