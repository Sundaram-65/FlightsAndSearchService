const express =require('express');

const CityController=require('../../controllers/city-controller.js');
const AirportController=require('../../controllers/airport-controller.js')
const router=express.Router();

router.post('/city',CityController.create);
router.post('/city/bulk',CityController.addMulCities)
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);

router.get('/city/:id/airports',CityController.getAllairports);



router.post('/airport',AirportController.createAirport);
// router.post('/airport/bulk',CityController.addMulCities)
router.delete('/airport/:id',AirportController.deleteAirport);
router.get('/airport/:id',AirportController.getAirport);
router.get('/airport',AirportController.getAllAirport);
router.patch('/airport/:id',AirportController.updateAirport);

module.exports=router;