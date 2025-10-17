import React from "react";
import IconoDock from "../atoms/Header/NavMenu";
import MainBody from "../organisms/MainBody/MainBody";
import Footer from "../molecules/Footer/Footer";
import Photo from "../atoms/AcercaDe/Photo";
import { Flex, Typography, Divider } from "antd";
import Lenguages from "../atoms/AcercaDe/Lenguages";
import ProyectosCard from "../molecules/Proyectos/ProyectosCard";

import "app/assets/bg_card_3.png"

const { Paragraph } = Typography;

const HomeLayout = () => {
   return (
      <Flex vertical
         style={{
            backgroundColor: "#1A202C", // ¡El color de fondo azul! (Ant Design primary blue)
            minHeight: "100vh", // Asegura que cubra toda la altura de la página
         }}
      >
         <IconoDock></IconoDock>
         <MainBody></MainBody>

         <Flex style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "50px 450px", // opcional, para separarlo de los bordes
         }} gap={80}>
            <Photo />
            <Flex vertical>
               <Divider
                  orientation="left"
                  // Asegúrate de que la línea se vea en el fondo oscuro
                  style={{
                     // Propiedad para el color de la línea
                     borderColor: '#00BFFF', // Usamos un color brillante (Cyan)

                     // Opcional: Estilo para el texto dentro del Divider
                     color: "white",
                     fontSize: "42px",
                     fontWeight: "700",

                  }}
               >
                  <span id="acercaDe">Acerca de mi</span>
               </Divider>

               <Paragraph style={{
                  fontSize: "16px", // Aumentar el tamaño de la fuente
                  maxWidth: "600px",
                  color: "#FFFFFF"
               }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laborum voluptates dicta ab expedita distinctio rem voluptatum saepe odio quis, itaque beatae recusandae, suscipit eos voluptas consequuntur architecto, mollitia dolorum!
               </Paragraph>
               <Lenguages></Lenguages>
            </Flex>


         </Flex>

         <ProyectosCard 
         titulo={"Chupala"} 
         descripcion={"shapalapashala"}
         imagenUrl = {"app/assets/bg_card_3.png"}
          />

         <Footer />
      </Flex>
   )
}

export default HomeLayout;