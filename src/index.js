const express=require('express');
const {PORT}=require('./config/serverConfig')
// const {City}=require('./models/index')
const bodyParser=require('body-parser')

// const CityRepository=require('./repository/city-repository')

const ApiRoutes = require('./routes/index');

const {Airport,City}=require('./models/index')
const setupAndStartServer=async ()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',ApiRoutes);
    
    app.listen(PORT,async()=>{

        console.log(`Server started at ${PORT}`);
        // const repo=new CityRepository();
        // repo.createCity({name:'Delhi'});
    
        // // repo.deleteCity(3);
        // const airports=await Airport.findAll({
        //     include:City
        // }) 
        // console.log(airports)
    })

}
setupAndStartServer();
