const {City}=require('../models/index')

class CityRepository{
    async createCity({name}){

        try{
            const city=await City.create({name});
            return city;
        }catch(error){
            console.log('Something went wrong in the repository layer');
            throw {error};
        }
    }
    async deleteCity({cityid}){
        try{
            const city=await City.distroy({
                where:{
                    id:cityid
                }
            });
            return city;
        }catch(error){
            console.log('Something went wrong in the repository layer');
            throw {error};
        }
    }
    async update(data,cityid){

        try{
            const city =City.update(data,{
            where:{
                id:cityid
            }
        })
        }
        catch(error){
            console.log('Something went wrong in the repository layer');
            throw {error};
        }
           
    }
    async getCity(cityid){

        try{
            const city=await City.findBypk(cityid);
            return city;
        }
        catch(error){
            console.log('Something went wrong in the repository layer');
            throw {error};
        }
    }
}
module.exports=CityRepository;