import React from "react";
import { Card, Flex, Space, Typography } from "antd";
import "../Proyectos/ProyecytosCard.css"

const { Title } = Typography

{/**Mueve esto a atomos y luego los llamas desde moleculas u organisms */ }

interface ProyectosCardProps {
  titulo: string;
  descripcion: string;
  imagenUrl: string;
}

const ProyectosCard = ({ titulo, descripcion, imagenUrl }: ProyectosCardProps) => {
  return (
    <Flex vertical
      style={{
        alignItems: "center"
      }}
    >
      <Title level={3}
        style={{ color: "white" }}
      >{titulo}</Title>
      <div className="card-container">
        {/* Tarjeta de Ant Design solo para el texto */}
        <Card
          hoverable
          className="proyecto-card"
          style={{
            width: 300,
            height: 200,
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
            border: "none",
            background: "transparent",
          }}
          bodyStyle={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            color: "white",
            padding: "15px",
            zIndex: 2,
            textAlign: "center",
            transition: "transform 0.4s ease",
          }}
        >
          <div className="card-text">
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>{descripcion}</p>
          </div>
        </Card>

        {/* Imagen de fondo */}
        <div
          className="card-bg"
          style={{
            backgroundImage: `url(${imagenUrl})`,
          }}
        ></div>

        {/* Overlay principal */}
        <div className="card-overlay"></div>

      </div>
    </Flex>

  );
};

export default ProyectosCard;