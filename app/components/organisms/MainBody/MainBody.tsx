import React from "react";
import TextMenu from "~/components/molecules/MainBody/TextMenu";
<<<<<<< HEAD
import { Button, Flex } from "antd";

const MainBody = () =>{
   return(
      <Flex vertical align="center">
         <TextMenu></TextMenu>
         <Button type="primary" size="large" style={{ width: "fit-content" }}>Mis proyectos</Button>
      </Flex>
=======
import { Button } from "antd";

const MainBody = () =>{
   return(
      <div>
         <TextMenu></TextMenu>
         <Button type="primary">Mis proyectos</Button>
      </div>
>>>>>>> 72e7ec48402e1eced2cdf5930c71fec33829c06f
      
   )
}

export default MainBody