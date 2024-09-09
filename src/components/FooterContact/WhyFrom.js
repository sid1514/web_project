import "../Dashboard/Home.css";
import { useState } from "react";
const WhyFrom = () => {
  let [displayFlag, setDisplayFlag] = useState(false);
  let [displayFlag2, setDisplayFlag2] = useState(false);
  const readmore = () => {
    setDisplayFlag(!displayFlag);
  };
  const readmore2 = () => {
    setDisplayFlag2(!displayFlag2);
  };
  return (
    <>
      <h1 style={{ color: "black" }}>Why buy from us?</h1>
      <div className="whyBuyContainer" style={{ color: "black" }}>
        <div className="quality">
          <span>
            <h1>Quality Check</h1>
            <p style={{ color: "black" }}>
              Dear valued customers, At Turbo Traders, we are committed to
              providing you with the highest quality vehicles. To ensure that
              our cars meet the highest standards, we have implemented a
              rigorous quality check process. This process involves a thorough
              inspection of each vehicle before it is made available for sale.
              Here is an overview of our quality check procedure: <br></br>
              <button
                style={{
                  border: "none",
                  width: "100px",
                  color: "white",
                  backgroundColor: "#080830",
                }}
                onClick={readmore}
              >
                know more
              </button>
            </p>
          </span>
          {displayFlag ? (
            <span>
              <p style={{ color: "black" }}>
                {" "}
                <h4> 1.Exterior Inspection:</h4>
                Body panels and paintwork are examined for any signs of damage
                or imperfections. Lights, indicators, and other exterior
                components are inspected to ensure they are in working order.
                <h4>2.Interior Inspection:</h4>
                Seats, upholstery, and carpets are examined for cleanliness and
                any signs of wear. All interior components, such as air
                conditioning, audio system, and power accessories, are tested
                for functionality.
                <h4>3.Mechanical Inspection:</h4>
                Our certified technicians conduct a thorough examination of the
                engine, transmission, and other vital mechanical components.
                <h4>4.Road Test:</h4>
                Each vehicle undergoes a comprehensive road test to evaluate its
                performance under real-world driving conditions. This includes
                assessing acceleration, braking, handling, and overall
                drivability.
              </p>
            </span>
          ) : null}
        </div>
        <div className="warranty">
          <h1 style={{ color: "black" }}>Warranty Assurance</h1>
          <p style={{ color: "black" }}>
            Dear Valued Customer, We are pleased to inform you that all
            purchases made at Turbo Traders come with our exclusive 12th Month
            Warranty coverage. This warranty is a testament to our commitment to
            delivering high-quality products and ensuring your satisfaction.
            <br></br>
            <button
              style={{
                border: "none",
                width: "100px",
                color: "white",
                backgroundColor: "#080830",
              }}
              onClick={readmore2}
            >
              know more
            </button>
          </p>
          {displayFlag2 ? (
            <span>
              <p style={{ color: "black" }}>
                <h3> Warranty Details:</h3>
                <p>
                  Coverage Period: The 12th Month Warranty extends your
                  product's coverage for an additional 12 months beyond the
                  manufacturer's original warranty.
                </p>
                <p>
                  What's Covered: This warranty covers defects in materials and
                  workmanship that may arise during normal use of the product.
                </p>
                <p>
                  Exclusions: Please note that this warranty does not cover
                  damage resulting from accidents, misuse, unauthorized repairs,
                  or alterations to the product.
                </p>
                <p>
                  How to Make a Claim: In the unlikely event that you encounter
                  an issue covered by this warranty, please contact our
                  dedicated customer service team at [Customer Service Contact
                  Information]. They will guide you through the claims process
                  and assist you in resolving the issue promptly.
                </p>
                <p>
                  Proof of Purchase: To process a warranty claim, you will need
                  to provide a copy of your original purchase receipt.
                </p>
                <p>
                  We want to assure you that your satisfaction is our top
                  priority, and we stand behind the quality of our products. If
                  you have any questions or need further clarification about our
                  12th Month Warranty, please do not hesitate to reach out to
                  us.
                </p>
              </p>
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default WhyFrom;
