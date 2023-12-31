import { LocalStorage } from '../services'
import {LoginCredentials, User} from "../global/types";

const useAuth = () => {
    const user_data: User = {
        id: '1',
        email: 'test@umpisa.co',
        username: 'user-swapi',
        password: 'P@ssword01',
        role: 'admin',
    }

    const loadUser = () => {
        let user = null
        try {
            const data = LocalStorage.getUser()
            if (data === user_data.id) {
                user = user_data
            }
        } catch (error) {
            console.log('error loaduser', error)
        }

        return user
    }

    const loginWithEmailAndPassword = (credentials: LoginCredentials) => {
        let user = null
        if (credentials.email === user_data.email && credentials.password === user_data.password) {
            user = user_data
        }
        return user
    }

    const handleUserResponse = (user: any) => {
        LocalStorage.setUser(user.id)
        LocalStorage.setRole(user.role)

        return user
    }

    const loginFn = (data: LoginCredentials) => {
        const response = loginWithEmailAndPassword(data)
        const user = handleUserResponse(response)
        return user
    }

    const RemoveStorage = () => {
        LocalStorage.clearUser()
        LocalStorage.clearRole()
    }

    const logoutFn = () => {
        RemoveStorage();
    }

    return { loginFn, logoutFn, loadUser }
}

export default useAuth
