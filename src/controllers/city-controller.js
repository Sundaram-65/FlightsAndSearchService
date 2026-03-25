const {CityService, CityService}=require('../services/index');

const cityService=new CityService();

const create = async(req,res)=>{

    try {
        const city =cityService.createCity(req.body)
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created a city',
            err:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create city",
            err:error
        })
    }
}
// DELETE :/city/:id
const destroy =async(req,res)=>{

    try {
        const response =cityService.deleteCity(req.params.id)
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully deleted a city',
            err:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete city",
            err:error
        })
    }
    
}
// Patch:/city/:id 
const update =async(req,res)=>{

   try {
        const city =cityService.updateCity(req.body,req.params.id)
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created a city',
            err:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update city",
            err:error
        })
    }
    
}
// get :/city/:id
const get =async(req,res)=>{

    try {
        const response =cityService.getCity(req.params.id)
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully fetched a city',
            err:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get city",
            err:error
        })
    }
    
}