import React from 'react'
import { LoginForm } from '../../components/LoginComponent/LoginFormComponent';

import {LoginContainer} from "./styles";

const LoginPage: React.FC = () => {
    return (
        <LoginContainer>
            <LoginForm />
        </LoginContainer>
    )
}

export default LoginPage