import React from "react";
import MainHeader from "../molecules/Header/MainHeader";
import MainBody from "../organisms/MainBody/MainBody";
import Footer from "../molecules/Footer/Footer";
import { Flex } from "antd";


const HomeLayout = () => {
   return (
      <Flex vertical
         style={{
            backgroundColor: "#1A202C", // ¡El color de fondo azul! (Ant Design primary blue)
            minHeight: "100vh", // Asegura que cubra toda la altura de la página
         }}
      >
         <MainHeader></MainHeader>
         <MainBody></MainBody>
         <Footer />
      </Flex>
   )
}

export default HomeLayout;