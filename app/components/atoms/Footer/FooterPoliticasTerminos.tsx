import React from "react";
import { Flex, Typography } from "antd";

const { Paragraph } = Typography

const FooterPoliticasTerminos = () =>{
   return(
      <Flex gap={80} style={{ marginTop: "40px", color:"#FFFF"}}>
         <Paragraph style={{color:"#FFFF"}}>Politica de Privacidad</Paragraph>
         <Paragraph style={{color:"#FFFF"}}>Terminos de Servicio</Paragraph>
      </Flex>
      
   )
}

export default FooterPoliticasTerminos;