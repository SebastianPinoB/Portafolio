import React from "react";
import { Avatar } from "antd";

const Photo = () => {
  return (
    <Avatar
      size={250} // tamaño grande
      src="/app/assets/fotoPerfil.jpg"
      alt="Foto de perfil"
    />
  );
};

export default Photo;