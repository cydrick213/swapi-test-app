import React from 'react'
import {Container, Input, Label} from "./InputStyles";

export type Props = {
    name?: string
    type?: string
    placeholder?: string
}

export const TextInput: React.FC<Props> = React.forwardRef((props, ref) => {
    const { name, type, placeholder, ...rest } = props

    return (
        <Container>
            <Input name={name} type={type} placeholder={placeholder} ref={ref as any} {...rest} />
            <Label>{placeholder}</Label>
        </Container>
    )
})
