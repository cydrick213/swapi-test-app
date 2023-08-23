export type LoginCredentials = {
    email: string
    password: string
}

export interface User {
    id: string
    email: string
    password: string
    username: string
    role: string
}