import React from "react";
import { Menu } from "antd";
import { GithubOutlined, LinkedinOutlined} from "@ant-design/icons";

const FooterNav = () =>{
   return(
      <Menu mode="horizontal" items={[
         { key: "1", icon: <GithubOutlined style={{ color: "#00BFFF", fontSize: "20px"}} /> },
         { key: "2", icon: <LinkedinOutlined style={{ color: "#00BFFF", fontSize: "20px"}} /> },
      ]}/>
   )
}

export default FooterNav;