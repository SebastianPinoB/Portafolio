import React from "react";
import {Layout} from "antd";
import Logo from "~/components/atoms/Header/Logo";
import NavMenu from "~/components/atoms/Header/NavMenu";

const { Header } = Layout;

const MainHeader = () =>{
   return(
      <Header style={{backgroundColor: "white"}}>
         <Logo></Logo>
         <NavMenu/>
      </Header>
   )
}

export default MainHeader