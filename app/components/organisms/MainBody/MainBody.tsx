import React from "react";
import TextMenu from "~/components/molecules/MainBody/TextMenu";
import { Button, Flex } from "antd";

const MainBody = () =>{
   return(
      <Flex vertical align="center" style={{paddingBottom:"100px"}}>
         <TextMenu></TextMenu>
         <Button type="primary" size="large" style={{ width: "fit-content" }}>Mis proyectos</Button>
      </Flex>
      
   )
}

export default MainBody