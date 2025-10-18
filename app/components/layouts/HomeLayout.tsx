import React from "react";
import IconoDock from "../atoms/Header/NavMenu";
import MainBody from "../organisms/MainBody/MainBody";
import Footer from "../molecules/Footer/Footer";
import Photo from "../atoms/AcercaDe/Photo";
import { Flex, Typography, Divider } from "antd";
import Lenguages from "../atoms/AcercaDe/Lenguages";
import ProyectosCard from "../atoms/Proyectos/ProyectosCard";

import "app/assets/bg_card_3.png"

const { Paragraph, Title } = Typography;

const HomeLayout = () => {
   return (
      <Flex vertical
         style={{
            backgroundColor: "#1A202C", // ¡El color de fondo azul! (Ant Design primary blue)
            minHeight: "100vh", // Asegura que cubra toda la altura de la página
         }}
      >
         {/**Menu Flotante*/}
         <IconoDock></IconoDock>
         <MainBody></MainBody>

         {/**Seccion Acerca de mi */}
         <Flex style={{
            paddingTop: "280px",
            justifyContent: "center",
            alignItems: "center",
            padding: "280px 450px " , // opcional, para separarlo de los bordes
         }} gap={80}>
            <Photo />
            <Flex vertical>
               <Divider
                  orientation="right"
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
                  color: "#FFFFFF",
                  paddingTop: "40px",
                  paddingBottom: "80px"
               }}>
                  Soy desarrollador web full stack en formación. Con experiencia en múltiples lenguajes de programación, incluyendo C, Java, Python, HTML, CSS y JavaScript.
                  En la actualidad, me encuentro aprendiendo desarrollo con React, creando interfaces modernas, funcionales y centradas en la experiencia del usuario.
                  Me apasiona la tecnología y el aprendizaje constante, buscando siempre optimizar el código y aplicar buenas prácticas en cada proyecto que desarrollo.
                  Además, estoy en continua búsqueda de certificaciones y capacitaciones que me permitan profesionalizar mi trabajo y mantenerme actualizado en las últimas tendencias del desarrollo web.
               </Paragraph>
               <Lenguages></Lenguages>
            </Flex>


         </Flex>


         {/**Seccion proyectos*/}
         <Flex vertical
            style={{
               paddingTop: "150px",
               justifyContent: "center",
               alignItems: "center",
               padding: "50px 400px", // opcional, para separarlo de los bordes
            }}
         >
            <Divider
               orientation="center"
               // Asegúrate de que la línea se vea en el fondo oscuro
               style={{
                  // Propiedad para el color de la línea
                  borderColor: '#00BFFF', // Usamos un color brillante (Cyan)
                  paddingBottom:"56px",
                  // Opcional: Estilo para el texto dentro del Divider
                  color: "white",
                  fontSize: "42px",
                  fontWeight: "700",

               }}
            >
               <span id="proyectos">Proyectos</span>
            </Divider>

            <Flex
               style={{
                  justifyContent: "center",
                  gap: "80px", // 👈 separa cada Card
               }}
            >
               
               <ProyectosCard
                  titulo={"Panel de administracion"}
                  descripcion={"Demostración de un panel de administración completo, diseñado para ofrecer una visualización de datos clara y una experiencia de usuario intuitiva para la gestión de métricas clave."}
                  imagenUrl={"/app/assets/1.jpg"}
                  urlProyecto="https://github.com/SebastianPinoB/Proyecto-Panel-de-administraci-n.git"
               />

               <ProyectosCard
                  titulo={"Formulario de registro"}
                  descripcion={"Formulario de registro completo enfocado en la conversión y usabilidad. La implementación asegura una entrada de datos robusta mediante validaciones dinámicas en el lado del cliente (Front-end)."}
                  imagenUrl={"/app/assets/2.jpg"}
                  urlProyecto="https://github.com/SebastianPinoB/ProyectoFormularioRegistros.git"
               />

               <ProyectosCard
                  titulo={"Proyecto Flex"}
                  descripcion={"Serie de componentes y layouts complejos creados exclusivamente con Flexbox. El objetivo fue practicar el control de la alineación, la distribución de espacio y la adaptabilidad de los elementos internos."}
                  imagenUrl={"/app/assets/3.jpg"}
                  urlProyecto="https://github.com/SebastianPinoB/primer-proyecto-flex.git"
               />

            </Flex>

         </Flex>



         <Footer />
      </Flex>
   )
}

export default HomeLayout;