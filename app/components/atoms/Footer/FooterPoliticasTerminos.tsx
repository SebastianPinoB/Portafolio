import React from "react";
import { Flex, Typography } from "antd";

const { Paragraph } = Typography

const FooterPoliticasTerminos = () =>{
   return(
      <Flex gap={80} style={{ marginTop: "40px" }}>
         <Paragraph>Politica de Privacidad</Paragraph>
         <Paragraph>Terminos de Servicio</Paragraph>
      </Flex>
      
   )
}

export default FooterPoliticasTerminos;