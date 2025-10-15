import React from 'react';
import { useNavigate } from 'react-router';
import { Space, Flex, Tooltip } from 'antd';
import { HomeOutlined, FolderOpenOutlined, UserOutlined } from '@ant-design/icons';

const estiloIconos = { fontSize: '24px', color: 'white' };

const dockStyle = {
    backgroundColor: '#1A202C',
    border: '1px solid #00BFFF',
    borderRadius: '9999px',
    padding: '8px 16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
};

const MenuOrbeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(7, 61, 116, 0.81)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
};

const IconoDock = () => {
    const navigate = useNavigate();

    const icons = [
        { key: 'home', to: '/', icon: <HomeOutlined style={estiloIconos} />, label: 'Inicio' },
        { key: 'projects', to: '/proyectos', icon: <FolderOpenOutlined style={estiloIconos} />, label: 'Proyectos' },
        { key: 'profile', to: '/perfil', icon: <UserOutlined style={estiloIconos} />, label: 'Perfil' },
    ];

    return (
        <Flex justify="center" style={{ width: '100%', paddingTop:"50px"}}>
            <Space size={70} style={dockStyle}>
                {icons.map((item) => (
                    <Tooltip key={item.key} title={item.label}>
                        <div
                            style={MenuOrbeStyle}
                            onClick={() => navigate(item.to)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#1173d4';
                                e.currentTarget.style.boxShadow = '0 0 10px #1173d4';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(17, 115, 212, 0.3)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {item.icon}
                        </div>
                    </Tooltip>
                ))}
            </Space>
        </Flex>
    );
};

export default IconoDock;
