import React from "react";
import { Flex, Typography } from "antd";

const { Title, Paragraph } = Typography

const TextMenu = () => {
   return (
      <Flex vertical
         align="center"
         style={{
            textAlign: "center",
            marginTop: "300px",
         }}
      >
         <Title level={1} style={{
            color: "#FFFFFF",
            fontSize: "64px", 
            fontWeight: "900",
            letterSpacing: "2px", 
         }}
         >Hola, soy Sebastian Pino</Title>
         <Paragraph
            style={{
               fontSize: "16px", // Aumentar el tamaño de la fuente
               lineHeight: "1.6", // Aumentar el espaciado entre líneas
               maxWidth: "800px", // Limitar el ancho para que el texto no sea muy largo
               padding: "0 20px", // Añadir un poco de padding horizontal
               paddingTop: "15px",
               paddingBottom:"70px",
               color: "#FFFFFF" // Un color gris oscuro para el texto
            }}
         >
            Estudiante de Ingenieria en programacion
         </Paragraph>

      </Flex>

   )
}

export default TextMenu;