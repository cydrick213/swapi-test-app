import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from "../../hooks/useAuth";
import {Button, Card, CardFieldset} from './LoginFormStyles';
import {TextInput} from "../FormComponents/Input/InputComponent";

export interface IFormInput {
    email: string
    password: string
}

export const LoginForm = () => {
    const navigate = useNavigate()
    const { loginFn } = useAuth()

    const { register, handleSubmit } = useForm<IFormInput>({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log('123')
        await loginFn(data)

        // wait for login before navigate
        navigate('/', { replace: true })
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

                <CardFieldset>
                    <Button type="submit" value="submit">
                        LOGIN
                    </Button>
                </CardFieldset>
            </form>
        </Card>
    )
}
