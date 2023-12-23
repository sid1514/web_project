const mongoose = require("mongoose")
const car=new mongoose.Schema(
{

 
   
   
   car_brand: {type:String},
   car_model: {type:String},
   car_price:{type:Number},
   car_image:{ type: String},
   number_of_seats: {type:Number},
   Drive_Type: {type:String},
   transmission: {type:String},
   year:{type:Number},
   fuel_type: {type:String},
   Engine_size: {type:String},
   doors: {type:String},
   cylinder: {type:String},
   color:{type:String},

}



)
const Car=new mongoose.model("Car",car);
module.exports=Car;