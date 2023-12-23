const mongoose = require("mongoose")
const bcrypt=require("bcrypt");
const login=new mongoose.Schema(
{

   userid:{type:Number},
   username:{type:String},
   userpass:{type:String},
   phoneNumber:{type:Number},
   userEmail:{type:String},
   //token:{type:String},

  favoriteCar:{
      car_brand: {type:String},
      car_model: {type:String},
      car_price:{type:Number},
      car_image:{type:String},
      number_of_seats: {type:Number},
      Drive_Type: {type:String},
      transmission: {type:String},
      year:{type:Number},
      fuel_type: {type:String},
      Engine_size: {type:String},
      doors: {type:String},
      cylinder: {type:String},
      color:{type:String},
   },

   bookedCar:{
      car_brand: {type:String},
      car_model: {type:String},
      car_price:{type:Number},
      car_image:{type:String},
      number_of_seats: {type:Number},
      Drive_Type: {type:String},
      transmission: {type:String},
      year:{type:Number},
      fuel_type: {type:String},
      Engine_size: {type:String},
      doors: {type:String},
      cylinder: {type:String},
      color:{type:String},
   },

   
}



)

login.pre('save', async function (next)
{

   if(this.isModified('userpass'))
   {
    this.userpass= await bcrypt.hash(this.userpass,12)
    

   }
  next();

})
const Login=new mongoose.model("Login",login);
module.exports=Login;