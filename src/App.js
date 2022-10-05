import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const App = () => {
  const [popOpne, setOppOpen] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [getData, setData] = useState("India");
  const [showValue, setShowValue] = useState([]);

 

  const popOpenFunction = () => {
    setOppOpen(true);
  }

  const inputValue = (e) => {
    setValueInput(e.target.value)
  }

  const clickFunction = async () => {
    console.log(valueInput)
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b7e58c9089874b52a8870836222609&q=${getData}&aqi=yes`);
    const data = await response.json();
    setData(data)

    console.log(getData)
  }

  useEffect(() => {
    clickFunction();
  }, [])
  return (
    <>
      <div className="weather_container">
        <div className="weather_app">
          <div className="weather_tem">
            <div className="weather_tem_flex">
              <h1 className="tem_section">
                27 <sup>o</sup>
              </h1>
              <h1 className="country_name">
                India <span>IN</span>
              </h1>
              <h1 className="country_capital">New Delhi</h1>
            </div>
            <div className="weather_tem_flex">
              <div className="sun_img">
                <img
                  src="https://cdn.weatherapi.com/weather/64x64/day/143.png"
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="content_section">
            <div className="custom-shape-divider-bottom-1664947435"></div>
            <div className="day">
              <div className="day_details">
                <i className="fa-solid fa-arrow-up"></i>
                <h1 className="day_name">
                  27 <sup>o</sup>
                </h1>
              </div>
              <div className="day_details">
                <h1 className="day_name">Sunday</h1>
              </div>
              <div className="day_details">
                <i className="fa-solid fa-arrow-down"></i>
                <h1 className="day_name">
                  27 <sup>o</sup>
                </h1>
              </div>
            </div>

            <div className="slider_wind">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">127 Kph</h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                    />
                    <h1 className="kph_titel_2">127 Kph</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">127 Kph</h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                    />
                    <h1 className="kph_titel_2">127 Kph</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">127 Kph</h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                    />
                    <h1 className="kph_titel_2">127 Kph</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">127 Kph</h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                    />
                    <h1 className="kph_titel_2">127 Kph</h1>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
         {
          popOpne ?  <div className="form">
          
          <input type="text" onChange={inputValue}/>
          <i className="fa-solid fa-magnifying-glass" onClick={clickFunction}></i>
 
        </div> : null
         }
          <div className="search_button">
            <i className="fa-solid fa-magnifying-glass" onClick={popOpenFunction}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
