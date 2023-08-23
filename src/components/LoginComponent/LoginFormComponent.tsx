import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from "../../hooks/useAuth";
import {Button, Card, CardFieldset, ErrorLabel} from './LoginFormStyles';
import {TextInput} from "../InputComponent/InputComponent";
import {LoadingScreen} from "../LoadingScreenComponent/LodingScreenComponent";

export interface IFormInput {
    email: string
    password: string
}

export const LoginForm = () => {
    const navigate = useNavigate()
    const { loginFn } = useAuth()
    const [error, setError] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false)

    const { register, handleSubmit } = useForm<IFormInput>({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        setLoader(true)
        const response = loginFn(data)

        // wait for login before navigate
        if (response) {
            navigate('/', { replace: true });
            window.location.reload();
        } else {
            setError("Invalid email and/or password. Please try again.");
        }
        setLoader(false);
    }

    return (
        <Card>
            {loader && <LoadingScreen/>}
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
