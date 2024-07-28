import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import "./car.css";
import { useEffect } from "react";
import { useState } from "react";
const CarCard = ({
  car_image,
  car_brand,
  car_model,
  car_price,
  number_of_seats,
  handleFavCar,
  handleCardClick,
  category,
}) => {
  let [owner, setOwner] = useState("1");
  const [featured, setFeatured] = useState(false);
  useEffect(() => {
    if (category === "used") {
      setOwner("2nd Owner");
    } else if (category === "featured" && owner !== "2nd Owner") {
      setFeatured(true);
    } else {
      setOwner("1st Owner");
    }
  }, []);

  return (
    <>
      <div>
        <div
          className="carcard_container"
          onClick={() => {
            handleCardClick(car_brand);
          }}
        >
          <div>
            <img
              src={car_image}
              wrapped
              ui={false}
              width={220}
              height={200}
              alt={car_model}
              className="CarImg"
            />
          </div>
          <div>
            <p>{car_brand}</p>

            <p>{car_model}</p>

            <p>price :{car_price} $</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              {" "}
              {number_of_seats} <Icon name="user" />
              {owner}
            </p>
          </div>
        </div>
        <Button
          className="addToFavButton"
          labelPosition="left"
          onClick={() => handleFavCar(car_brand)}
        >
          <Icon name="heart" color="red" size="large" />
        </Button>
      </div>
    </>
  );
};

export default CarCard;
