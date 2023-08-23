import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from "../../hooks/useAuth";
import {Button, Card, CardFieldset, ErrorLabel} from './LoginFormStyles';
import {TextInput} from "../FormComponents/Input/InputComponent";

export interface IFormInput {
    email: string
    password: string
}

export const LoginForm = () => {
    const navigate = useNavigate()
    const { loginFn } = useAuth()
    const [error, setError] = useState<string>('')

    const { register, handleSubmit } = useForm<IFormInput>({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const response = await loginFn(data)

        // wait for login before navigate
        response ? navigate('/', { replace: true }) :
            setError("Invalid email and/or password. Please try again.");
    }

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardFieldset>
                    <TextInput placeholder="Email" {...register('email')} />
                </CardFieldset>

                <CardFieldset>
                    <TextInput placeholder="Password" type="password" {...register('password')} />
                </CardFieldset>
                {error !== "" && <ErrorLabel>{error}</ErrorLabel>}
                <CardFieldset>
                    <Button type="submit" value="submit">
                        LOGIN
                    </Button>
                </CardFieldset>
            </form>
        </Card>
    )
}
