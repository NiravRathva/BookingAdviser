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