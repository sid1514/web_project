import React, { useState, useEffect } from "react";
//import PieChart from './Piechart';
import { Input, Button, Segment, Icon } from "semantic-ui-react";
import "./CarsCollections.css";
import axios from "axios";
const CollectionCar = () => {
  let [car_brand, setCarBrand] = useState();
  let [car_model, setCarModel] = useState();
  let [car_price, setCarPrice] = useState();
  let [car_image, setCarImage] = useState();
  let [number_of_seats, setNumberofSeat] = useState(2);
  let [Drive_Type, setDriveType] = useState("Front-wheel drive");
  let [transmission, setTransmission] = useState("Automatic");
  let [year, setYear] = useState("2023");
  let [fuel_type, setFuelType] = useState("petrol");
  let [Engine_size, setEngineSize] = useState();
  let [doors, setDoors] = useState();
  let [cylinder, setCylinder] = useState();
  let [color, setColor] = useState();

  const handleNoOfSeats = (e) => {
    setNumberofSeat(e.target.value);
  };
  const handleDriveType = (e) => {
    setDriveType(e.target.valu);
  };
  const handleTransmission = (e) => {
    setTransmission(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handlefuelType = (e) => {
    setFuelType(e.target.value);
  };
  const handleAddData = () => {
    axios.post("https://turbotraderapi.onrender.com/postCar", {
      car_brand,
      car_model,
      car_price,
      car_image,
      number_of_seats,
      Drive_Type,
      transmission,
      year,
      fuel_type,
      Engine_size,
      doors,
      cylinder,
      color,
    });
  };

  const [carData, setCarData] = useState([]);
  useEffect(() => {
    fetch("https://turbotraderapi.onrender.com/getCarsData")
      .then((res) => res.json())
      .then((temp) => setCarData(temp))
      .catch((e) => {
        console.log(e);
      });
  });

  const handleRemove = (car_model) => {
    axios
      .delete(`http://localhost:4000/removeCar/${car_model}`)
      .then((response) => {
        if (response.data === "not found ....") {
          console.log("Car not found");
        } else {
          console.log("Car removed successfully");
          // Update the carData state after removing the car
          setCarData((prevCarData) =>
            prevCarData.filter((c) => c.car_model !== car_model)
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div style={{ paddingTop: 200, paddingLeft: 30 }}>
        <h1 style={{ color: "white" }}>Cars data</h1>
      </div>
      <div className="main_sales">
        <div className="carsTable_container">
          <br></br>

          <table className="cars_table">
            <th>
              <h4>S.r. no.</h4>
            </th>
            <th>
              <h4>car brand</h4>{" "}
            </th>
            <th>
              <h4>car model</h4>{" "}
            </th>
            <th>
              <h4>car price</h4>{" "}
            </th>
            <th>
              <h4>car image</h4>
            </th>{" "}
            <th>
              <h4>number_of_seats</h4>
            </th>{" "}
            <th>
              <h4>Drive Type</h4>
            </th>
            <th>
              <h4>transmission</h4>
            </th>{" "}
            <th>
              <h4>year</h4>
            </th>{" "}
            <th>
              <h4>fuel type</h4>
            </th>{" "}
            <th>
              <h4>Engine size</h4>
            </th>{" "}
            <th>
              <h4>doors</h4>{" "}
            </th>{" "}
            <th>
              <h4>cylinder</h4>
            </th>{" "}
            <th>
              <h4>color</h4>
            </th>
            <br></br>
            {carData.length
              ? carData.map((c, index) => (
                  <tr>
                    <td>
                      <h5>{index + 1}</h5>
                    </td>
                    <td>
                      {" "}
                      <h5> {c.car_brand}</h5>
                    </td>
                    <td>
                      <h5>{c.car_model}</h5>
                    </td>
                    <td>
                      <h5>{c.car_price} </h5>{" "}
                    </td>
                    <td>
                      <h5>{c.car_image}</h5>
                    </td>
                    <td>
                      <h5>{c.number_of_seats}</h5>
                    </td>
                    <td>
                      <h5>{c.Drive_Type}</h5>
                    </td>
                    <td>
                      <h5>{c.transmission}</h5>
                    </td>
                    <td>
                      <h5>{c.year}</h5>
                    </td>
                    <td>
                      <h5>{c.fuel_type}</h5>
                    </td>
                    <td>
                      <h5>{c.Engine_size}</h5>
                    </td>
                    <td>
                      <h5>{c.doors}</h5>
                    </td>
                    <td>
                      <h5>{c.cylinder}</h5>
                    </td>
                    <td>
                      <h5>{c.color}</h5>
                    </td>
                    <td>
                      <button onClick={() => handleRemove(c.car_model)}>
                        <Icon name="remove" />{" "}
                      </button>{" "}
                    </td>
                  </tr>
                ))
              : null}
          </table>
        </div>
        <br></br>
        <div className="add_container">
          <div className="Input_container">
            <tr>
              <Input
                placeholder="enter brand name"
                label="car brand"
                onChange={(e) => {
                  setCarBrand(e.target.value);
                }}
              ></Input>
            </tr>
            <br></br>
            <tr>
              <Input
                placeholder="enter car model"
                label="car model"
                onChange={(e) => {
                  setCarModel(e.target.value);
                }}
              ></Input>
            </tr>
            <br></br>
            <tr>
              <Input
                placeholder="enter car price"
                type="number"
                label="car price"
                onChange={(e) => {
                  setCarPrice(e.target.value);
                }}
              ></Input>
            </tr>
            <br></br>
            <tr>
              <Input
                type="file"
                placeholder="upload image"
                label="car image"
                onChange={(e) => {
                  setCarImage(e.target.files[0]);
                }}
              ></Input>
              <button style={{ width: "100px", height: "50px" }}>upload</button>
            </tr>
            <br></br>
            <tr>
              <Input
                placeholder="enter Engine size"
                label="Engine Size"
                onChange={(e) => {
                  setEngineSize(e.target.value);
                }}
              ></Input>
            </tr>
            <br></br>
            <tr>
              <Input
                placeholder="number of doors"
                label="doors"
                onChange={(e) => {
                  setDoors(e.target.value);
                }}
              ></Input>
            </tr>
            <br></br>
            <tr>
              <Input
                placeholder="cylinder contain"
                label="cylinder"
                onChange={(e) => {
                  setCylinder(e.target.value);
                }}
              ></Input>
            </tr>
            <br></br>
            <tr>
              <Input
                placeholder="color"
                label="car color"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              ></Input>
            </tr>
          </div>
          <div className="dropdwon_container">
            <table>
              <tr>
                <td>
                  <select value={number_of_seats} onChange={handleNoOfSeats}>
                    <option value={2}>2</option>
                    <option value={4}>4</option>
                  </select>
                </td>
                <td>
                  <select value={Drive_Type} onChange={handleDriveType}>
                    <option value={"front-wheel drive"}>
                      front-wheel drive
                    </option>
                    <option value={"rear-wheel drive"}>rear-wheel drive</option>
                    <option value={"All-wheel drive"}>All-wheel drive</option>
                    <option value={"four-wheel drive"}>rear-wheel drive</option>
                  </select>
                </td>
                <td>
                  <select value={transmission} onChange={handleTransmission}>
                    <option value={"Manual"}>Manual</option>
                    <option value={"Automatic"}>Automatice</option>
                  </select>
                </td>
              </tr>
              <br></br>
              <tr>
                <td>
                  <select id="year" value={year} onChange={handleYear}>
                    <option value="">Select</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                  </select>
                </td>
                <td>
                  <select value={fuel_type} onChange={handlefuelType}>
                    <option value="">Select</option>
                    <option value="Petrol">petrol</option>
                    <option value="Dlectric">electric</option>
                    <option value="Diesel">diesel</option>
                  </select>
                </td>
              </tr>
            </table>
          </div>
          <br></br>
          <Button
            inverted
            color="olive"
            className="add_button"
            onClick={handleAddData}
          >
            ADD
          </Button>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default CollectionCar;
