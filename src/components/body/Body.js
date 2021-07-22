import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Body.scss";
// import ico from "../../icons/04d.png"

export default function Body() {
  const [location, setlocation] = useState("");
  const [search, setsearch] = useState("")
  const [minTemp, setminTemp] = useState(0);
  const [maxTemp, setmaxTemp] = useState(0);
  const [currentTemp, setcurrentTemp] = useState(0);
  const [description, setdescription] = useState("")
  const [icon, seticon] = useState("");
  const [iconLink, seticonLink] = useState("")
  useEffect(() => {
    console.log(location);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d2dd35303e8c62dfc3187dabecd5b970&units=metric`
      )
      .then(function (res) {
        console.log(res.data);
        setminTemp(res.data.main.temp_min);
        setmaxTemp(res.data.main.temp_max);
        setcurrentTemp(res.data.main.temp);
        seticon(res.data.weather[0].icon);
        setdescription(res.data.weather[0].description)
        console.log(icon);
        seticonLink("http://openweathermap.org/img/wn/" + icon + "@2x.png")
      });
  }, [search, iconLink]);

  const searchClicked=()=>{
    setsearch(location);
    // axios
    //   .get(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d2dd35303e8c62dfc3187dabecd5b970&units=metric`
    //   )
    //   .then(function (res) {
    //     console.log(res.data);
    //     setminTemp(res.data.main.temp_min);
    //     setmaxTemp(res.data.main.temp_max);
    //     setcurrentTemp(res.data.main.temp);
    //     seticon(res.data.weather[0].icon);
    //     setdescription(res.data.weather[0].description)
    //     console.log(icon);
    //     seticonLink("http://openweathermap.org/img/wn/" + icon + "@2x.png")
    //   });
  }
  return (
    <div>
      <div className="card">
        <div className="text-input">
          <input 
            type="text"
            placeholder="Enter a city"
            onChange={(e) => setlocation(e.target.value)}
          ></input>
          <button onClick={searchClicked}> &#128270;</button>
        </div>
        <div className="data-display">
          <img src={iconLink} />
            {/* {description} */}
          <div className="current-temp">
          {currentTemp} &#176;C
          </div>
          <div className="min-max">
            <div className="min">
            {minTemp} &#176;C
            </div>
            <div className="max">
            {maxTemp} &#176;C
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}
