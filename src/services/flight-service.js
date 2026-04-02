const {FlightRepository,AirplaneRepository}=require('../repository/index');
const flightRepository= new FlightRepository();
const airplaneRepository= new AirplaneRepository();

class FlightService{

    // create
    async createFlight(data){

        try {
            const airplane=await airplaneRepository.getAirplane(data.airplaneId)

            const flight=await flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            });
            
            return flight;
        } catch (error) {
            console.log('Something went wrong in service layer');
            throw error;
        }
    }

    // delete
    async deleteFlight(flightId){
        try {
            const flight=await flightRepository.deleteFlight(flightId);
            return flight;
        } catch (error) {
            console.log('Something went wrong in service layer');
            throw error;
        }
    }

    // get
    async getFlight(flightId){
        try {
            const flight =await flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log('Something went wrong in service layer');
            throw error;
        }
    }

    // update
    async updateFlight(data,flightId){
        try {
            const flight=await flightRepository.updateFlight(data,flightId);
            return flight;
        } catch (error) {
            console.log('Something went wrong in service layer');
            return error
        }

    }

}
module.exports=FlightService

/* 
  flightNumber,
  airplaneId,
  departureAirportId,
  arrivalAirportId,
  arrivalTime,
  departureTime,
  price,

  totalSeats-->we will not get this 
*/
