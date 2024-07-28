import "./Home.css";
import CarList from "./CarList";

import HomeImageSlider from "./ImageSlider";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const CarList = lazy(() => import("./CarList"));

  return (
    <>
      <div style={{ margin: "10px" }} className="mainHome">
        <div className="Home">
         
          <div className="info-container">
            <span>
              <HomeImageSlider />
            </span>
            <span>
              <p
               
              className="textHome">
                Rev up your dreams with{" "}
                <b
                  style={{
                    fontFamily: "revert-layer",
                    color: "black",
                    backgroundColor: "Background",
                  }}
                >
                  Turbo Trader!
                </b>
              </p>
            </span>
          </div>
        </div>
        <div className="cars-container">
          <Suspense fallback={<p>loading</p>}>
            <CarList />
          </Suspense>
        </div>
      </div>
    </>
  );
};
export default Home;
