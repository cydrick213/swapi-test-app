import React from 'react'
import { LoginForm } from '../../components/LoginComponent/LoginFormComponent';

import {LoginContainer} from "./styles";

export const LoginPage = () => {
    return (
        <LoginContainer>
            <LoginForm />
        </LoginContainer>
    )
}
