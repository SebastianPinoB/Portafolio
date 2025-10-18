import React from "react";
import { Space } from "antd";
import { GithubOutlined, LinkedinOutlined} from "@ant-design/icons";

const FooterNav = () =>{
   return(
      <Space size="large">
         <a href="" target="_blank">
            <GithubOutlined style={{ color: "white", fontSize: "24px"}} />
         </a>

         <a href="" target="_blank">
            <LinkedinOutlined style={{ color: "white", fontSize: "24px"}} />
         </a>
      </Space>
   )
}

export default FooterNav;