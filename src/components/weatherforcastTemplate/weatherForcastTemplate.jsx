import React from 'react'
import "./weatherforcastTemplate.css"
export default function weatherForcastTemplate() {
  return (
    <>
      <div className='body'>
        <form className="search">
          <input type="text" placeholder="Enter Your City Name " className="search-box" />
          <button>Search</button>

        </form>

        <div className="result">
          <div className="result_header">
            <p className="day">Dhaka BD</p>
            <p className="date">25 octber</p>
          </div>


          <div className='resultPartOne'>

            <div className="deg">
              <span className="deg-point">24</span>
              <sup>o</sup> C</div>
            <div className="weatherType">Heze</div>
            <div className="feelsLike">
              Feels Like
              <span className="deg-point"> 30</span>
              <sup>o</sup> C
            </div>
          </div>




          <div className="resultPartTwo">


            <span>Min Temp
              <span>20
                <sup>0c</sup>
              </span></span>

            <span>
              Max Temp
              <span>28
                <sup>0c</sup>
              </span>
            </span>

            <span>
              Pressure
              <span>12pa</span>
            </span>

            <span>

              humidity
              <span>75%</span>
            </span>



            <span>
              Wind Speed
              <span>123 km</span>
            </span>






          </div>

        </div>
      </div>
    </>
  )
}
