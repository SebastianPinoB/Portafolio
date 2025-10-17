import React from "react";
import { Card, Space } from "antd";


{/**Mueve esto a atomos y luego los llamas desde moleculas u organisms */ }

interface ProyectosCardProps {
    titulo: string;
    descripcion: string;
    imagenUrl: string;
}

const ProyectosCard = ({ titulo, descripcion, imagenUrl }: ProyectosCardProps) => {
    return (
        <Card
            hoverable
            title={titulo}
            style={{ width: 300 }}
            cover={
                <img src={imagenUrl} />
            }
        >

            <Space direction="vertical" size="middle">
                <p>{descripcion}</p>
            </Space>
        </Card>
    );
}

export default ProyectosCard;