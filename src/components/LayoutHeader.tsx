import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import useAuth from "../hooks/useAuth";
import AuthStatusComponent from "./AuthComponent/AuthStatusComponent";

const { Header  } = Layout

const LayoutHeader: React.FC = () => {
    const {loadUser} = useAuth();
    const [current, setCurrent] = useState(
        window.location.pathname === '/' ? '/home-page' : window.location.pathname
    )

    const user = loadUser()
    return (
        <div>
            {/* Header */}
            {user && (
                <Header>
                    <Menu
                        defaultSelectedKeys={['/home-page']}
                        selectedKeys={[current]}
                        mode="horizontal"
                        onClick={(e) => {
                            setCurrent(e.key)
                        }}
                        theme="dark"
                        style={{ color: 'white' }}>
                        <Menu.Item key="/home-page" style={{ color: 'white' }}>
                            <Link to="/home-page">Home</Link>
                        </Menu.Item>

                        <Menu.Item key="/film-page">
                            <Link to="/film-page">Films</Link>
                        </Menu.Item>

                        <Menu.Item key="logout" style={{ marginRight: '0', marginLeft: 'auto' }}>
                            <AuthStatusComponent />
                        </Menu.Item>
                    </Menu>
                </Header>
            )}

            {!user && <AuthStatusComponent />}

            {/* The <Outlet> element is used as a placeholder. In this case an <Outlet> enables the Users component to render its child routes. */}
            <Outlet />
        </div>
    )
}

export default LayoutHeader
