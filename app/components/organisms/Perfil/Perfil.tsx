// src/pages/Perfil/PerfilPage.tsx
import React from 'react';
import { Typography, Card, Flex } from 'antd'; // Importamos componentes de Antd para el estilo

const { Title, Paragraph } = Typography;

const PerfilPage = () => {
  return (
    <Flex justify="center" align="middle" style={{ minHeight: '100vh', padding: '50px' }}>
      <Card 
        title={<Title level={2} style={{ color: '#00ffff' }}>Mi Perfil</Title>}
        bordered={false}
        style={{ 
          width: 500, 
          backgroundColor: '#1A202C', 
          border: '2px solid #00BFFF',
          boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)' // Resplandor sutil
        }}
      >
        <Paragraph style={{ color: 'white' }}>
          Esta es la vista de tu perfil. Al hacer clic en el icono del "Dock"
          se carga este componente de manera exitosa.
        </Paragraph>
        <Paragraph style={{ color: 'white' }}>
          ¡Ahora puedes empezar a construir el contenido de tu perfil!
        </Paragraph>
      </Card>
    </Flex>
  );
};

export default PerfilPage;