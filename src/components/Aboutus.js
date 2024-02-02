
import './Aboutus.css';

import TeamCard from "./TeamCard";
import { Link } from "react-router-dom";
const Aboutus=()=>{
  let teamdata=[{pic:"https://pnghq.com/wp-content/uploads/pnghq.com-user-icon-cutout-png-clipart-images.png",name:"Emily Rees",position:"Customer advisor",email:"emily@TurboTrader.com",phone:"123-456-789"},
  {pic:"https://pnghq.com/wp-content/uploads/pnghq.com-user-icon-cutout-png-clipart-images.png",name:"George Brown",position:"Customer advisor",email:"George@TurboTrader.com",phone:"123-456-789"},
  {pic:"https://pnghq.com/wp-content/uploads/pnghq.com-user-icon-cutout-png-clipart-images.png",name:"Jacob Austin",position:"Customer advisor",email:"Jacob@TurboTrader.com",phone:"123-456-789"}


]
return (
    <>
     <div className="aboutus-container">
     <h1 > Welcome to Turbo Trader</h1>

<div>
<h3  className="title_aboutus">About Us</h3>

Turbo Trader is a reputable car dealership founded in 2002. With a dedication to customer satisfaction, quality assurance, etc., we have become a trusted name in the industry.
</div>

<div>
<h3  className="title_aboutus">Our Mission</h3>

At Turbo Trader, we are committed to providing top-quality cars and excellent customer service. Our core values include values, e.g., integrity, transparenc.

<h3  className="title_aboutus">Our Team</h3>

Our team of experts brings years of experience in the automotive industry. Led by Founder/CEO jake mathew, our dedicated staff is here to assist you in finding the perfect vehicle.
<div className="team_container">
{
  teamdata.length? teamdata.map((team)=><TeamCard pic={team.pic} name={team.name} position={team.position} email={team.email} phone={team.phone}/>):null
}
</div>

</div>

<div>
<h3  className="title_aboutus">Inventory and Materials</h3>

We specialize in types of cars, e.g., luxury, sports, etc.. Our inventory includes auto parts
</div>
<div>
<h3  className="title_aboutus"> Customer Focus</h3>


Turbo Traders prioritizes customer satisfaction above all else. 

</div>

<div>
<h3  className="title_aboutus">Quality Assurance</h3>

All cars sold by Turbo Traders undergo rigorous quality checks. We are proud to hold [mention any relevant certifications].
</div>
<div>
  <h3  className="title_aboutus">Future Goals</h3>


We envision [future plans, e.g., expanding our showroom, launching new services]. Our goal is to [mention the long-term vision].
</div>

<div>
<h3  className="title_aboutus">Testimonials</h3>
<p>
John Doe - Happy Customer
I recently purchased a car from Turbo Traders, and I couldn't be happier with my experience. The staff was incredibly knowledgeable and helped me find the perfect vehicle for my needs. The entire process was smooth, and I drove off the lot with confidence. Thank you, Turbo Traders!</p>

<p>Sarah Smith - Satisfied Buyer
I was hesitant about buying a used car, but after visiting Turbo Traders, my concerns vanished. They have a fantastic selection of high-quality pre-owned vehicles, and the team was transparent about the car's history. I'm now a proud owner of a reliable car that fits my budget perfectly.</p>

<p>David Martinez - Exceptional Service
The service at XYZ Motors is top-notch. From the moment I walked in, I felt valued as a customer. The sales team took the time to understand my preferences and guided me towards the best options. Their after-sales service is equally impressive. I highly recommend Turbo Traders to anyone looking for a new car.</p>
</div>
<div>

<h3  className="title_aboutus">Gallery</h3>

[Images of showroom, staff, cars]

</div>
<div>
  <h3 className="title_aboutus">keep in touch</h3>

<Link to={'/Contact'}><button>Contact Us</button></Link>


<p>Website: www.turbotrade.com </p>

<h2>Thank you for choosing Turbo Traders. We look forward to serving you!</h2>
</div>


     </div>
    </>
  );
}

export default Aboutus;
