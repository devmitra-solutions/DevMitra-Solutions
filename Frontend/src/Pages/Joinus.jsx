import React from 'react';
import Header from "../Compoments/Header";
import Footer from "../Compoments/Footer";
import JoinUSHeader from './JoinUS/JoinUSHeader';
import WhyJoinUs from './JoinUS/WhyJoinUs';
import OurIntern from './JoinUS/OurIntern';
import OpenRoles from './JoinUS/OpenRoles';
import ApplyForm from './JoinUS/ApplyForm';
import StillTalkSec from './JoinUS/StillTalkSec';

const Joinus = () => {
  return (
    <div>
       <Header />
       <JoinUSHeader />
       <WhyJoinUs />
       <OurIntern />
       <OpenRoles />
       <ApplyForm />
        <StillTalkSec />
       <Footer />
    </div>
  )
}

export default Joinus
