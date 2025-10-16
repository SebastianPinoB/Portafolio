import React from "react";
import { Layout } from "antd";
import Logo from "~/components/atoms/Header/Logo";
import NavMenu from "~/components/atoms/Header/NavMenu";

const { Header } = Layout;

const MainHeader = () => {
   return (
      <Header style={{
         backgroundColor: "#1A202C",
         padding: '0',
         height: 'auto'
      }}>
         <NavMenu />
      </Header>
   )
}

export default MainHeader