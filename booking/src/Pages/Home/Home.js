import React from 'react'
import Featured from '../../Components/Featured/Featured'
import Footer from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import Navbar from "../../Components/Navbar/Navbar"
import HotelRating from "../../Components/HotelRating/HotelRating"
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties'
import PropertyList from '../../Components/propertyList/propertyList'
import "./Home.css"
import Mail from '../../Components/Mail/Mail'
const Home = () => {
  // Access and log the 'access_token' cookie
const accessToken = document.cookie.match('(^|;)\\s*access_token\\s*=\\s*([^;]+)');
if (accessToken) {
    console.log("Access Token:", accessToken[2]);
} else {
    console.log("'access_token' cookie not found");
}

  return (
    <>
      <Navbar />
      <Header />
      <div className="HomeContainer">
        {/* <h1 className="HomeTitle">Browse by property</h1> */}
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        {/* <FeaturedProperties/> */}
        <HotelRating />
        <Mail />
      </div>
      <Footer />
    </>
  )
}

export default Home