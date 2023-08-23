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

export interface CardListProps {
    data: any;
}

export interface CardProps {
    document: any;
    index: string;
}

export interface SearchProps {
    search: string;
    handleChange: (e: string) => void
}