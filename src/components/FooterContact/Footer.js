
import { Icon } from "semantic-ui-react";
import "../Dashboard/Home.css";
const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer-d1">
          <h1> -------------------------</h1>
          TurboTrade - Your Ultimate Destination for Quality Cars Contact Us:
          <p>
            <Icon name="location arrow" />
            Address: 123 Main Street, Cityville, State, ZIP
            <p>
              <Icon name="phone" /> Phone: (555) 555-5555{" "}
            </p>
            Email: info@turbotrade.com Website: www.turbotrade.com
          </p>
        </div>

        <div className="footer-d2">
          Follow Us:
          <p>
            <Icon name="facebook" />
          </p>
          <p>
            <Icon name="twitter" />{" "}
          </p>
          <p>
            <Icon name="whatsapp square" />
          </p>
        </div>

        <div className="footer-d3">
          Hours of Operation: Monday - Friday: 9:00 AM - 7:00 PM Saturday: 10:00
          AM - 5:00 PM Sunday: Closed
        </div>
        <div className="about_part">
          <p>
            About TurboTrade: Turbo Trader is a reputable car dealership founded
            in 2002. With a dedication to customer satisfaction, quality
            assurance, etc., we have become a trusted name in the industry.
            Privacy Policy | Terms of Service | Sitemap © 2023 TurboTrade. All
            rights reserved.
            -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
