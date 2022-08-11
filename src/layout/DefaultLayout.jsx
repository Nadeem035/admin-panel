import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import RightSideBar from '../components/RightSideBar';
import Content from '../components/Content';


const DefaultLayout = () => {
  return (
    <div id="layout-wrapper">
      <Header />
      <SideBar />
      <div className="main-content">
        <div className="page-content">
          <Content />
        </div>
        <Footer />
      </div>
      <RightSideBar />
    </div>
  )
}

export default DefaultLayout
