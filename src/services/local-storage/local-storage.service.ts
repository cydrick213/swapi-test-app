export const LocalStorage = {
    setUser: (id: string) => window.localStorage.setItem('user', id),
    getUser: () => window.localStorage.getItem('user'),
    clearUser: () => window.localStorage.removeItem('user'),
    getRole: () => window.localStorage.getItem('role'),
    setRole: (role: string) => window.localStorage.setItem('role', role),
    clearRole: () => window.localStorage.removeItem('role'),
}
