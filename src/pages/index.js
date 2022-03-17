import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { InfoSection } from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/data';
import { Services } from '../components/Services';

export const Home = () => {
  const [isSidebarOpen, setSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setSidebarToggle(!isSidebarOpen);
  }

  return (
    <>
     <Header
     isSidebarOpen={isSidebarOpen}
     toggleSidebar={toggleSidebar}
     />
     <InfoSection {...homeObjOne}/>
     <InfoSection {...homeObjTwo}/>
     <Services/>
     <InfoSection {...homeObjThree}/> 
     <Footer/>       
    </>
  )
}
