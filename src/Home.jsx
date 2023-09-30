import React from 'react'
import Banner from "./component/Banner";
import Card from "./component/Card";
import Popular from "./component/Popular";
import NewTitle from "./component/NewTitle";
import Bannerpromo from "./component/Bannerpromo";
import Games from "./component/Games";
import Entertaiment from "./component/Entertaiment";
import Kodeoucher from "./component/KodeVoucher";
import NewsdanUpdate from "./component/NewsdanUpdate";
import Tentangkami from "./component/Tentangkami";



const Home = () => {
  return (
    <>
     <Banner/>
     <Card/>
     <Popular/>
     <NewTitle/>
     <Bannerpromo/>
     <Games/>
     <Entertaiment/>
     <Kodeoucher/>
     <NewsdanUpdate/>
     <Tentangkami/>
    </>
  )
}

export default Home