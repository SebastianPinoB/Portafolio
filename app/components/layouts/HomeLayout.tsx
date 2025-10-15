import React from "react";
import MainHeader from "../molecules/Header/MainHeader";
import MainBody from "../organisms/MainBody/MainBody";
import Footer from "../molecules/Footer/Footer";

const HomeLayout = () =>{
   return(
      <>
         <MainHeader></MainHeader>
         <MainBody></MainBody>

         <Footer />

      </>
   )
}

export default HomeLayout;