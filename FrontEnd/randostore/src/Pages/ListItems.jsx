import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offer from '../Component/Offer/Offer'
import NewCollection from '../Component/NewColection/NewCollection'
import NewsLetter from '../Component/NewLetter/NewsLetter'
const ListItems = () => {
  return (
    <div>
    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollection/>
    <NewsLetter/>
    </div>
  )
}

export default ListItems
