import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import useAuth from "../hooks/useAuth";

const AuthStatus: React.FC = () => {
    const { loadUser, logoutFn } = useAuth()
    const navigate = useNavigate()
    const user = loadUser();

    if (!user) {
        return (
            <div style={{ paddingTop: '10px', color: '#e5195f', textAlign: 'center' }}>
                <p>You are not logged in.</p>
            </div>
        )
    }

    return (
        <div style={{ height: '15px', display: 'flex', marginRight: '0', marginLeft: 'auto' }}>
            <p>
                Welcome! <b>{user.username}</b>{' '}
            </p>
            <Button
                style={{ marginLeft: '10px' }}
                onClick={async () => {
                    await logoutFn()

                    navigate('/')
                }}>
                Sign out
            </Button>
        </div>
    )
}

export default AuthStatus
