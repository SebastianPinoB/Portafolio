import React from "react";
import TextMenu from "~/components/molecules/MainBody/TextMenu";
import { Button } from "antd";

const MainBody = () =>{
   return(
      <div>
         <TextMenu></TextMenu>
         <Button type="primary">Mis proyectos</Button>
      </div>
      
   )
}

export default MainBody