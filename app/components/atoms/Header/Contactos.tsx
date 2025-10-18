import React from "react";
import { Space } from "antd";
import { PhoneOutlined, LinkedinOutlined, GithubOutlined, MailOutlined } from "@ant-design/icons";

const Contacto = () => {
   return (
      <Space size="large">
         <a href="https://www.linkedin.com/in/sebastian-pino-0b734638b/" target="_blank">
            <LinkedinOutlined style={{ color: "white", fontSize: "32px" }} />
         </a>

         <a href="https://github.com/SebastianPinoB" target="_blank">
            <GithubOutlined style={{ color: "white", fontSize: "32px" }} />
         </a>

         <a>
            <MailOutlined style={{ color: "white", fontSize: "32px" }} />
         </a>

         <a>
            <PhoneOutlined style={{ color: "white", fontSize: "32px" }} />
         </a>
      </Space>
   )
}

export default Contacto