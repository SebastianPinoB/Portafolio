import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Space, Flex, Tooltip } from "antd";
import { HomeOutlined, FolderOpenOutlined, UserOutlined } from "@ant-design/icons";
import "./IconoDock.css";

const estiloIconos = { fontSize: "24px", color: "white" };

const dockStyle = {
  backgroundColor: "#1A202C",
  border: "1px solid #00BFFF",
  borderRadius: "9999px",
  padding: "8px 16px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
};

const MenuOrbeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "rgba(7, 61, 116, 0.81)",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

const IconoDock: React.FC = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const icons = [
    { key: "home", to: "/", icon: <HomeOutlined style={estiloIconos} />, label: "Inicio" },
    { key: "projects", to: "/proyectos", icon: <FolderOpenOutlined style={estiloIconos} />, label: "Proyectos" },
    { key: "profile", to: "/perfil", icon: <UserOutlined style={estiloIconos} />, label: "Perfil" },
  ];

  //Oculta el dock tras 3 segundos
  useEffect(() => {
    timerRef.current = setTimeout(() => setVisible(false), 1000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  //Muestra el dock al mover el mouse y reinicia el temporizador
  useEffect(() => {
    const handleMouseMove = () => {
      setVisible(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setVisible(false), 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`dock-container ${visible ? "dock-visible" : "dock-hidden"}`}
      style={{
        position: "fixed",
        top: "20px", // 👈 parte superior de la página
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Flex justify="center">
        <Space size={70} style={dockStyle}>
          {icons.map((item) => (
            <Tooltip key={item.key} title={item.label}>
              <div
                style={MenuOrbeStyle}
                onClick={() => navigate(item.to)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1173d4";
                  e.currentTarget.style.boxShadow = "0 0 10px #1173d4";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(17, 115, 212, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item.icon}
              </div>
            </Tooltip>
          ))}
        </Space>
      </Flex>
    </div>
  );
};

export default IconoDock;

