import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import cloudImg from "./images/cloud.png";
import cloudImgsa from "./images/images-removebg-preview.png";
import temImg from "./images/temImg.png";

const App = () => {
  const [popOpne, setOppOpen] = useState(false);
  const [search, setSearch] = useState("India");
  const [getValue, setGetValue] = useState([]);
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const [getWeekDay, setWeekDay] = useState(0);





  
  const getFormData = async (e) => {
    setOppOpen(false)
    e?.preventDefault();
    console.log("RES " , search ? search : "India")

    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=b7e58c9089874b52a8870836222609&q=${search}&aqi=no`);
    const response = await  data.json();
    setGetValue(response);
    console.log(getValue);
    const a = getValue.current?.last_updated
   
    var timestamp = Date.parse(a);

 

    if (isNaN(timestamp) == false) {
      var d = new Date(timestamp);
      let day = d.getDay();
      setWeekDay(weekday[day]);
    }

  }



  const searchClickFunction = () => {
    setOppOpen(true);
  }


  useEffect(() => {
    getFormData()
  }, [])
  return (
    <>
      <div className="weather_container">
        <div className="weather_app">
          <div className="weather_tem">
            <div className="weather_tem_flex">
              <h1 className="tem_section">
              {getValue.current?.temp_c} <sup>o</sup>
              </h1>
              <h1 className="country_name">
                {getValue.location?.country} 
                {/* <span>IN</span> */}
              </h1>
              <h1 className="country_capital">{getValue.location?.name}</h1>
            </div>
            <div className="weather_tem_flex">
              <div className="sun_img">
                <img
                  src={getValue.current?.condition.icon ? getValue.current?.condition.icon : "https://cdn.iconscout.com/icon/premium/png-256-thumb/sorry-2109711-1779497.png"}
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
                {getValue.current?.temp_c} <sup>o</sup>
                </h1>
              </div>
              <div className="day_details">
                <h1 className="day_name dayName">{  getWeekDay ? getWeekDay : getValue.current?.last_updated}</h1>
              </div>
              <div className="day_details">
                <i className="fa-solid fa-arrow-down"></i>
                <h1 className="day_name">
                {getValue.current?.temp_f} <sup>o</sup>
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
                    <h1 className="kph_titel">{getValue.current?.wind_kph} Kph</h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                    />
                    <h1 className="kph_titel_2">Wind</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">{getValue.current?.humidity} <sup>o</sup></h1>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4148/4148460.png"  style={{height: "35px", marginTop: "39.50px", marginLeft: "25px"}}
                      alt=""
                    />
                    <h1 className="kph_titel_2">Humidity</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">{getValue.current?.cloud} <sup>o</sup> </h1>
                    <img
                      src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                      alt=""
                      style={{height: "45px", marginTop: "30.50px", marginLeft: "10px"}}
                    />
                    <h1 className="kph_titel_2">Cloud</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">{getValue.current?.feelslike_c} <sup>o</sup></h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                      style={{height: "50px"}}
                    />
                    <h1 className="kph_titel_2">Feels Like - C</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">{getValue.current?.feelslike_f} <sup>o</sup></h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                    />
                    <h1 className="kph_titel_2">Feels Like - F</h1>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">{getValue.current?.gust_kph} <sup>o</sup></h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                    />
                    <h1 className="kph_titel_2">Gust Kph</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">{getValue.current?.gust_mph} <sup>o</sup></h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                    />
                    <h1 className="kph_titel_2">Gust Mph</h1>
                  </div>
                </SwiperSlide>
                
                
              </Swiper>

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
                    <h1 className="kph_titel">{getValue.current?.precip_in} <sup>o</sup></h1>
                    <img
                      src={cloudImgsa}
                      alt=""
              style={{height: "35px", marginTop: "39.50px", marginLeft: "25px"}}
                    />
                    <h1 className="kph_titel_2">Precip In</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">{getValue.current?.precip_mm} <sup>o</sup></h1>
                    <img
                      src={cloudImgsa}
                      alt=""
                      style={{height: "35px", marginTop: "39.50px", marginLeft: "25px"}}
                    />
                    <h1 className="kph_titel_2">Precip Mm</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">{getValue.current?.pressure_in} <sup>o</sup> </h1>
                    <img
                      src={temImg}
                      style={{height: "35px", marginTop: "39.50px", marginLeft: "25px"}}
                      alt=""
                    />
                    <h1 className="kph_titel_2">Pressure In</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">{getValue.current?.pressure_mb} <sup>o</sup></h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                    />
                    <h1 className="kph_titel_2">Pressure Mb</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">{getValue.current?.vis_km} <sup>o</sup></h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                    />
                    <h1 className="kph_titel_2">Vis Km</h1>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">{getValue.current?.vis_miles} <sup>o</sup></h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                    />
                    <h1 className="kph_titel_2">Vis Miles</h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="kpm">
                    <h1 className="kph_titel">{getValue.current?.wind_degree} <sup>o</sup></h1>
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700211-icon-43-wind-512.png"
                      alt=""
                    />
                    <h1 className="kph_titel_2">Wind Degree</h1>
                  </div>
                </SwiperSlide>
                
                
              </Swiper>

              <h1 className="region">{getValue.location?.tz_id}</h1>
            </div>
          </div>
          {
            popOpne ? <form action="" onSubmit={getFormData}>
          <div className="form">
          
          <input type="text" onChange={(e) => search ? setSearch(e.target.value) : "India"}/>
          <button><i className="fa-solid fa-magnifying-glass" ></i></button>
 
        </div> 
         </form> : null
           }
          <div className="search_button">
            <i className="fa-solid fa-magnifying-glass" onClick={searchClickFunction}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
