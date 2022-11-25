import  { Room } from '../models/room.model.js'


export const getResponses = async (req,res) => {
    try{
        const list = await Room.findAll()
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
    
    const { name, capacity,  desc_location  } = req.body
    
    const convertValue = val => {
    let capacidad = val

    var data = [];
    let numb= 0;
    let position =65

    var tempData = [];
    for ( var index=0; index<=capacidad; index++ ) {
   
    if(numb %10==0 && numb>10){
        position+=1
         numb= 0;
    }
    let char = String.fromCharCode(position);
  
    data[index] = { "ID": char+(numb+1), "State": "Available" };
     tempData.push( data );
    numb+= 1;
    }
    [data] = tempData;
    const [...res] = data
    res.pop(res.length - 1)
    return res
    }
    

    const createRegister = await Room.create({
        name, capacity, seats_distribution: convertValue(capacity), desc_location
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

        const { name, capacity,  desc_location } = req.body

        const convertValue = val => {
            let capacidad = val
        
            var data = [];
            let numb= 0;
            let position =65
        
            var tempData = [];
            for ( var index=0; index<=capacidad; index++ ) {
           
            if(numb %10==0 && numb>10){
                position+=1
                 numb= 0;
            }
            let char = String.fromCharCode(position);
          
            data[index] = { "ID": char+(numb+1), "State": "Available" };
             tempData.push( data );
            numb+= 1;
            }
            [data] = tempData;
            const [...res] = data
            res.pop(res.length - 1)
            return res
            }
    
        const editRegister = await Room.findByPk(id)

        if ( capacity ) {

            editRegister.name = req.body?.name
            editRegister.capacity = capacity
            editRegister.desc_location = req.body?.desc_location
            editRegister.seats_distribution = convertValue(capacity)
            await editRegister.save()
        
            res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
            
        } else if (name ) {
            editRegister.name = name
            
            await editRegister.save()
            res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})

        } else if(desc_location) {
            editRegister.desc_location = desc_location
            await editRegister.save()
            res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
        } else {
            editRegister.name = name
            editRegister.desc_location = desc_location

            res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
        }
       
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}
