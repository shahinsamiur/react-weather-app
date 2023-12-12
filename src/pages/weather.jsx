import React, { useEffect, useState } from 'react'
import Header from"../components/Header/header"
import Search from"../components/weatherforcastTemplate/weatherForcastTemplate"
// import "./weather.css"
export default function weather() {



  // const [Dates, setDates] = useState("error")
  // useEffect(() => {
  //   document.title = "Weather App"
  //   if (window.navigator.geolocation.getCurrentPosition) {
  //     window.navigator.geolocation.getCurrentPosition((data) => {
  //       console.log("man ")
  //     })

  //   } else {
  //     console.log("we are sorry")
  //   }

   

  // }, [])




  return (
    <>
    <Header/>
    <Search />

    </>

  )
}
