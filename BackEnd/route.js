const express=require("express")
const Cars=require("./carsData")
const Login=require("./login")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")
const route=express.Router();
require("./conn.js")

route.get("/",(req,res)=>{
    res.end("home page")
})

//======== sign In and sign Up =======
route.post('/signUp',async(req,res)=>{
    try{
        const {userid,username,userpass,phoneNumber,userEmail}=req.body;
        let user=new Login({userid,username,userpass,phoneNumber,userEmail})
        await user.save();
        res.send("user Created")

    }
    catch(e){
        console.log(e)
        res.send("error")
    }
    
})


    route.post("/signIn", async (req, res) => {
      try {
        const { username, userpass } = req.body;
    
        if (!username || !userpass) {
          return res.status(400).send("Username and password are required");
        }
    
        const user = await Login.findOne({ username });
    
        if (!user) {
          return res.status(404).send("User not found");
        }
    
        const validPassword = await bcrypt.compare(userpass, user.userpass);
    
        if (validPassword) {
          const token=jwt.sign({user_id:user._id,username},
            process.env.TOKEN_KEY,
            {
                expiresIn:"2h",
            }
            )

        user.token=token
        res.cookie('token',user.token,{http:true});
          return res.send(user);

        } else {
          return res.status(401).send("Invalid password");
        }
      } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
    });
//===== update user ======
route.put('/updateUser/:userid', async (req, res) => {
    try {
      const { userid } = req.params;
      const updateFields = req.body; 
      
      const updatedUser = await Login.findOneAndUpdate(
        { userid: userid },
        updateFields,
        { new: true }
      );
  
      res.send(updatedUser);
    } catch (e) {
      console.error(e);
      res.status(500).send('Error updating user');
    }
  });

//======= get login data ====
route.get("/getLoginData", async(req,res)=>
{   
    try
    {
      let d= await Login.find(req.query)
       res.send(d)
    }
    catch(e)
    {

       console.log(e)
    }

})

//==== get cars details ========
route.get("/getCarbyName/:car_brand"  ,async(req,res)=>{
   
   
  let {brand} =req.params ;

      let data = await Cars.find({car_brand:brand})

      if(data.length==0)
{
    res.send("not found ....")
}
else{

    res.send(data);
}
})

route.get("/getCarsData", async(req,res)=>
{   
    try
    {
      let d= await Cars.find()
       res.send(d)
    }
    catch(e)
    {

       console.log(e)
    }

})

route.get("/getCarBycategory/:category"),async(req,res)=>{
  try
  {
    const category = req.params.category;
    let d;
    if(category==='featured'){
     d=await Cars.find({car_brand:'BMW'})
  }
    else if(category==='used'){
     d=await Cars.find({car_brand:'Toyota'})
    }
  res.send(d)
  }catch(e){
    console.log(e)
  }

}

//=======post car details====
route.post("/postCar",async(req,res)=>{
    try{
    const{ car_brand, car_model, car_price,  car_image,  number_of_seats,  Drive_Type,  transmission,  year,
     fuel_type,
        Engine_size,
        doors,
        cylinder,
        color}=req.body;
        let carD=new Cars({car_brand, car_model, car_price, car_image, number_of_seats, Drive_Type, transmission, year, fuel_type, Engine_size,
            doors,
            cylinder,
            color})
        await carD.save();
        res.send("user Created")

    }
    catch(e){
        console.log(e)
        res.send("error")
    }
}) 



//=====remove car and remove user=============
route.delete("/removeUser/:name", async(req,res)=>{ 
    try {
        const {name}=req.params;
        let Data=await Login.findOne({userid:name})
        if(Data==null)
        {
            res.send("not found ....")
        }
        else{
             let id=Data._id; 
             console.log(Data.id)
            await Login.findByIdAndDelete(id)
        
            res.send("Reccord Remove")
        }
        
    }
    catch(error) {
        console.log(error.message);
    }
})
route.delete("/removeCar/:c_model", async(req,res)=>{ 
    try {
        const {c_model}=req.params;
        let Data=await Cars.findOne({car_model:c_model})
        if(Data==null)
        {
            res.send("not found ....")
        }
        else{
             let id=Data._id; 
             console.log(Data.id)
            await Cars.findByIdAndDelete(id)
        
            res.send("Reccord Remove")
        }
        
    }
    catch(error) {
        console.log(error.message);
    }
})


route.get("/getMaxUserId", async (req, res) => {
    try {
      const maxUserIdUser = await Login.aggregate([
        { $sort: { userid: -1 } },
        { $limit: 1 }
      ]);
  
      res.send(maxUserIdUser);
    } catch (e) {
      console.log(e);
      res.send("error");
    }
  });

  //==========favorite car and booked car================================
  route.post('/favoriteCar', async (req, res) => {
    const { userid, favoriteCar} = req.body;
  
    try {
      const user = await Login.findOneAndUpdate(
        { userid: userid },
        { $set: { 'favoriteCar': favoriteCar } },
        { new: true }
      );
  
      res.json(user);
    } catch (error) {
      res.send("error");
    }
  }); 

  route.post('/bookedCar', async (req, res) => {
    const { userid, bookedCar} = req.body;
  
    try {
      const user = await Login.findOneAndUpdate(
        { userid: userid },
        { $set: { 'bookedCar': bookedCar } },
        { new: true }
      );
  
      res.json(user);
    } catch (error) {
      res.send("error");
    }
  }); 

  route.post('/CancelBookedCar', async (req, res) => {
    const { userid} = req.body;
  
    try {
      const user = await Login.findOneAndUpdate(
        { userid: userid },
        { $set: { 'bookedCar': null } },
        { new: true }
      );
  
      res.json(user);
    } catch (error) {
      res.send("error");
    }
  }); 
 
  route.get('/getFavoriteCar/:userId', async (req, res) => {
    const { userId } = req.params; // Get the userId from the URL parameter
  
    try {
      const user = await Login.findOne({ userid: userId });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const favouriteCarDetails = user.favoriteCar;
      res.json(favouriteCarDetails);
    } catch (error) {
      res.send ("error");
    }
  });

 route.get('/getBookedCar/:userId', async (req, res) => {
    const { userId } = req.params; // Get the userId from the URL parameter
  
    try {
      const user = await Login.findOne({ userid: userId });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const bookedCarDetails = user.bookedCar;
      res.json(bookedCarDetails);
    } catch (error) {
      res.send ("error");
    }
  });

  
module.exports=route;