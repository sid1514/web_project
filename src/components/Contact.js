import { Icon } from "semantic-ui-react";
const Contact=()=>{
    return(<>
    
    <div className="contact_container">
<h3>contact us</h3>
<p><Icon name="phone" />- Phone: (555) 555-5555  </p>
<h3>vist our store</h3>
<p>
     <Icon name="location arrow" />
Address: 123 Main Street, Cityville, State, ZIP
- Email:  info@turbotrade.com
- Follow Us: </p > 
<p>connect with us <Icon name="facebook" size="large" color="blue"/> <p><Icon name="twitter" size="large"/> </p></p>


<p>chat with us <Icon name="whatsapp square" size="large" color="green"/></p>
    </div>
    </>)
}

export default Contact;