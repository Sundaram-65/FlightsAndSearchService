const {Flight}=require('../models/index')

class FightRepository{
    // create
    async createFlight(data){

        try {
            // const flight=await Flight.create({
            //     flightNumber:data.flightNumber,
            //     airplaneId:data.airplaneId,
            //     departureAirportId:data.departureAirportId,
            //     arrivalAirportId:data.arrivalAirportId,
            //     departureAirportId:data.departureAirportId,
            //     arrivalTime:data.arrivalTime,
            //     departureTime:data.departureTime,
            //     price:data.price,
            //     boardingGate:data.boardingGate,
            //     totalSeats:data.totalSeats,
            // })
            const flight =await Flight.create(data);
            return flight;

        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw error;
        }
    }

    // delete
    async deleteFlight(flightId){

        try {
            const flight=await Flight.destroy({
                where:{
                    id:flightId
                }
            })
            return flight;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw error;
        }
    }

    // get

    async getFlight(flightId){
        try {
            const flight=await Flight.findOne({
                where:{
                    id:flightId
                }
            });
            return flight;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw error;
        }
        }
    
    // update
    async updateFlight(data,flightId){

        try {
            const flight=await Flight.update(data,{
                where:{
                    id:flightId
                }
            })
            return flight;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw error;
        }
    }
     
    }
    module.exports=FightRepository


