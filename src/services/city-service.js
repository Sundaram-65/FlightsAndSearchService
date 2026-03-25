const {CityRepository} =require('../repository/index')

class CityService{

    constructor(){
        this.CityRepository=new CityRepository();
    }

    async createCity(data){
        try {
            const city =await this.CityRepository.createCity(data);
           
            return city;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }
    async deleteCity(){
        try {
             const city = await this.CityRepository.deleteCity(cityid);
             return city;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }
    async updateCity(){
        try {
             const city = await this.CityRepository.updateCity(data,cityid);
             return city;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }
    async getCity(){
        try {
            const city = await this.CityRepository.getCity(cityid);
            return city;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }
}
module.exports=CityService