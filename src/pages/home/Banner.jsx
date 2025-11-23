import React from 'react'
import bannerImg from "../../assets/header.png"

const Banner = () => {
  return (
    <section className="section__container header__container">
      <div className="header__content z-30 lex-1 text-center md:text-left space-y-6 md:space-y-8">
        <h4 className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wide">UP TO 20% DISCOUNT ON</h4>
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7fd1b9] via-[#4dd0e1] to-[#81c7f5]">
          All Fashion
        </h1>
        <p className='text-[var(--color-para-text)]'>
          Discover the latest trends and express your unique style with our
          Women's Fashion website. Explore a curated collection of clothing,
          accessories, and footwear that caters to every taste and occasion.
        </p>
        <button className="px-6 py-3 rounded-xl font-semibold text-white 
        bg-gradient-to-r from-[#7fd1b9] via-[#4dd0e1] to-[#81c7f5] animate-bounce">
         <a href="/shop">EXPLORE NOW</a>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="header" />
      </div>
    </section>
  )
}

export default Banner
