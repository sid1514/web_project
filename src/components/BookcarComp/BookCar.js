// CarDetailsComponent.js
import React, { useState } from "react";
import axios from "axios";
import "./Bookcar.css";
import { Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectAuth } from "../Auth/LoginSlice";

const BookCar = () => {
  let nav = useNavigate();

  const [ShowBookDetail, setShowBookDetail] = useState(false);
  let [featureFlag, setfeatureFlag] = useState(false);
  const [bookFlag, setBookFlag] = useState(false);

  let price = null;
  let carModel = null;
  let carname = null;
  const { isAuthenticated, user } = useSelector(selectAuth);

  const [selectCar, setselectCar] = useState(
    JSON.parse(sessionStorage.getItem("selectedcar"))
  );

  setInterval(function () {
    if (carname === "Toyota" || carname === "Honda" || carname === "kia") {
      setfeatureFlag(true);
    }
  }, 1000);

  const handleBookButton = async () => {
    if (isAuthenticated) {
      const userid = user._id;
      const bookedCar = selectCar[0];
      await axios.post(`https://turbotraderapi.onrender.com/bookedCar`, {
        userid: userid,
        bookedCar: bookedCar,
      });

      setBookFlag(true);
      alert("car booked");
    } else {
      nav("/");
      alert("You have to login first");
    }
  };

  return (
    <>
      <div className="main_bookCar">
        <div className="bookcar_container">
          <h1> Book Your Car </h1>
          {selectCar ? (
            <div className="selected_carContainer">
              <div className="bookcar_image">
                <img
                  src={selectCar[0].car_image}
                  width={"440vh"}
                  height={"300vh"}
                  alt="book car"
                  className="BookImg"
                />
              </div>
              <p style={{ fontSize: "20px" }}>
                {(carname = selectCar[0].car_brand)}{" "}
                {(carModel = selectCar[0].car_model)}
              </p>
              <p>
                Price <Icon name="dollar sign"></Icon>{" "}
                {(price = selectCar[0].car_price)}{" "}
                {selectCar[0].number_of_seats}
                <Icon name="user"></Icon>
              </p>
            </div>
          ) : (
            <p>No car selected.</p>
          )}
          {selectCar ? (
            <div className="cars_details">
              <p>
                <h5>Make: {selectCar[0].car_brand} </h5>
                <h5>color: {selectCar[0].color}</h5>
                <h5>Model: {selectCar[0].car_model}</h5>
                <h5>
                  Drive Type: {selectCar[0].Drive_Type}{" "}
                  <Icon name="life ring"></Icon>
                </h5>
                <h5>
                  transmission: {selectCar[0].transmission}{" "}
                  <Icon name="cogs"></Icon>
                </h5>
                <h5> year: {selectCar[0].year} </h5>
                <h5>
                  Fuel Type: {selectCar[0].fuel_type}
                  <Icon name="fuel"></Icon>
                </h5>
                <h5>Engine Size: {selectCar[0].Engine_size} </h5>
                <h5>Doors: {selectCar[0].doors}</h5>
                <h5>Cylinder: {selectCar[0].cylinder}</h5>{" "}
              </p>
            </div>
          ) : null}
          <div
            style={{ color: "black", padding: 10, paddingLeft: 20 }}
            className="featureDetail"
          >
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Features for your car
            </p>
            <div>
              <table>
                <tr>
                  <td>
                    Power Steering{" "}
                    {featureFlag ? (
                      <Icon name="check"></Icon>
                    ) : (
                      <Icon name="x"></Icon>
                    )}
                  </td>{" "}
                  <td>
                    Power Windows Front{" "}
                    {featureFlag ? (
                      <Icon name="check"></Icon>
                    ) : (
                      <Icon name="x"></Icon>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    Anti Lock Braking System{" "}
                    {featureFlag ? (
                      <Icon name="check"></Icon>
                    ) : (
                      <Icon name="x"></Icon>
                    )}
                  </td>{" "}
                  <td>
                    Air Conditioner{" "}
                    {featureFlag ? (
                      <Icon name="check"></Icon>
                    ) : (
                      <Icon name="x"></Icon>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    Driver Airbag{" "}
                    {featureFlag ? (
                      <Icon name="check"></Icon>
                    ) : (
                      <Icon name="x"></Icon>
                    )}
                  </td>{" "}
                  <td>
                    Passenger AirBag{" "}
                    {featureFlag ? (
                      <Icon name="check"></Icon>
                    ) : (
                      <Icon name="x"></Icon>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    Fog Light-Font{" "}
                    {featureFlag ? (
                      <Icon name="check"></Icon>
                    ) : (
                      <Icon name="x"></Icon>
                    )}
                  </td>{" "}
                  <td>
                    Alloy Wheels{" "}
                    {featureFlag ? (
                      <Icon name="check"></Icon>
                    ) : (
                      <Icon name="x"></Icon>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    Multi-function Steering Wheel{" "}
                    {featureFlag ? (
                      <Icon name="check"></Icon>
                    ) : (
                      <Icon name="x"></Icon>
                    )}
                  </td>{" "}
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div
          className={ShowBookDetail ? "payment_details" : "payment_details2"}
        >
          <div className="seg_pay">
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {carname} {carModel}
            </p>
            <div>
              <p className="fakeprice">{price + 1000}$</p>
              <p style={{ color: "red", fontSize: "1.5rem" }}> {price} $</p>
            </div>
            <button className="book_button" onClick={handleBookButton}>
              BOOK YOUR TEST DRIVE NOW
            </button>
          </div>
          <div className="seg_pay">
            {bookFlag ? (
              <p className="contact_below">contact below for booking </p>
            ) : null}
            <h2 style={{ color: "black" }}>contacts us</h2>
            <p style={{ color: "black" }}>
              <Icon name="phone"></Icon> (555) 555-5555
            </p>
            <p>
              <a href="https://api.whatsapp.com/send/?phone=1233456789&text&type=phone_number&app_absent=0">
                <Icon name="whatsapp" size="big" color="green" />
                <h3 style={{ color: "green" }}> chat via whatsapp </h3>{" "}
              </a>
            </p>
            <br></br>
            <p>
              <h5>share: </h5>{" "}
              <a href="https://www.facebook.com/login/">
                <Icon name="facebook" size="large"></Icon>
              </a>{" "}
              <Icon name="twitter" size="large"></Icon>
            </p>
          </div>
        </div>
        <button
          className="book_button2"
          onClick={() => setShowBookDetail(!ShowBookDetail)}
        >
          Book Test drive
        </button>
      </div>
    </>
  );
};

export default BookCar;
