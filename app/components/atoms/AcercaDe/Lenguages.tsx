import { Flex } from "antd";
import React from "react";
import "./Lenguajes.css"


const Lenguages = () => {

   return (

      <Flex  gap="large">
         <img
            src="/app/assets/icons/c-programming.png"
            className="lenguage-icon"
         />

         <img
            src="/app/assets/icons/css3.png"
            className="lenguage-icon"
         />

         <img
            src="/app/assets/icons/html-5.png"
            className="lenguage-icon"
         />

         <img
            src="/app/assets/icons/javascript.png"
            className="lenguage-icon"
         />

         <img
            src="/app/assets/icons/java.png"
            className="lenguage-icon"
         />

         <img
            src="/app/assets/icons/kotlin.png"
            className="lenguage-icon"
         />

         <img
            src="/app/assets/icons/python.png"
            className="lenguage-icon"
         />

         <img
            src="/app/assets/icons/sql.png"
            className="lenguage-icon"
         />
      </Flex>

   )
}

export default Lenguages