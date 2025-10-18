import React from "react";
import TextMenu from "~/components/molecules/MainBody/TextMenu";
import Contacto from "~/components/atoms/Header/Contactos";
import { Button, Flex } from "antd";

const MainBody = () =>{
   return(
      <Flex vertical align="center" style={{paddingBottom:"100px"}}>
         <TextMenu></TextMenu>
         <Contacto></Contacto>
      </Flex>
      
   )
}

export default MainBody