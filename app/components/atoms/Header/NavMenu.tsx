import React from "react";
import { Menu } from 'antd';
import { HomeOutlined, FolderOpenOutlined, UserOutlined } from "@ant-design/icons";
import "./NavMenu.css";


const NavMenu = () => {
   return (
      <Menu mode="horizontal" items={[
         { key: "1", icon: <HomeOutlined style={{ color: "#00BFFF", fontSize: "20px",}} /> },
         { key: "2", icon: <UserOutlined style={{ color: "#00BFFF", fontSize: "20px", padding: "0px 50px 0 50px" }} /> },
         { key: "3", icon: <FolderOpenOutlined style={{ color: "#00BFFF", fontSize: "20px" }} /> },
      ]} style={{
         border: "0",
         display: "flex",
         justifyContent: "center",
         width: "100%",
         padding: "30px 0px",
      }} />
   )
}

export default NavMenu