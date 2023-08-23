import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from "../../hooks/useAuth";
import { Button } from 'antd';
import {AuthenticatedContainer, UnauthenticatedContainer} from "./AuthStatusStyles";

const AuthStatusComponent: React.FC = () => {
    const { loadUser, logoutFn } = useAuth()
    const navigate = useNavigate()
    const user = loadUser();

    if (!user) {
        return (
            <UnauthenticatedContainer>
                <p>You are not logged in.</p>
            </UnauthenticatedContainer>
        )
    }

    return (
        <AuthenticatedContainer>
            <p>
                Welcome! <b>{user.username}</b>{' '}
            </p>
            <Button
                className="sign-out-btn"
                style={{ marginLeft: '10px' }}
                onClick={async () => {
                    await logoutFn()

                    navigate('/')
                }}>
                Sign out
            </Button>
        </AuthenticatedContainer>
    )
}

export default AuthStatusComponent
