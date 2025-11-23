import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Trends from './Trends'
import TrendingProducts from './TrendingProducts'
import DealSection from './DealSection'
import Features from './Features'
import Blogs from '../blogs/Blogs'

const Home = () => {
  return (
    <div className=' bg-[#dae7ec]'>
    <Banner/>
    <Categories/>
    <Trends/>
    <TrendingProducts/>
    <DealSection/>
    <Features/>
    <Blogs/>
    </div>
  )
}

export default Home