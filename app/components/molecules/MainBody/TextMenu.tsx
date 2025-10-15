import React from "react";
import { Flex, Typography } from "antd";

const { Title, Paragraph } = Typography

const TextMenu = () => {
   return (
      <Flex vertical
         align="center"
         style={{
            textAlign: "center",
            marginTop: "220px", // separación superior
            marginBottom: "30px" // espacio antes del botón
         }}
      >
         <Title level={1}>Sebastian Pino</Title>
         <Paragraph
            style={{
               fontSize: "16px", // Aumentar el tamaño de la fuente
               lineHeight: "1.6", // Aumentar el espaciado entre líneas
               maxWidth: "800px", // Limitar el ancho para que el texto no sea muy largo
               padding: "0 20px", // Añadir un poco de padding horizontal
               paddingTop: "15px",
               color: "rgba(0, 0, 0, 0.75)" // Un color gris oscuro para el texto
            }}
         >
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. 
            Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
         </Paragraph>

      </Flex>

   )
}

export default TextMenu;