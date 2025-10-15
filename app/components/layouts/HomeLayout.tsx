import React from "react";
import MainHeader from "../molecules/Header/MainHeader";
import MainBody from "../organisms/MainBody/MainBody";
import Footer from "../molecules/Footer/Footer";
import { Flex } from "antd";


const HomeLayout = () => {
   return (
      <Flex vertical>
         <MainHeader></MainHeader>
         <MainBody></MainBody>
         <Footer />
      </Flex>
   )
}

export default HomeLayout;