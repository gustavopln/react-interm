/* Responsável por criar um estado global que no caso queremos é de autenticação. */
import { createContext, useContext, useState } from 'react'

//Onde está o estado de logado true ou false
const AuthContext = createContext({})

// Responsável por receber os dados do usuário e informar se está logado ou não
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: '',
    })

    return (
        /* AuthContext é um objeto, dessa forma que acessamos o componente Provider
         *A Aplicação está sendo passada inteira para esse contexto, assim terá acesso a esse estado criado  através do hook useAuth
         */
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

/*Um Hook criado usando o context API que utiliza o método useContext*/
const useAuth = () => useContext(AuthContext) //recebe o contexto que foi criado

export default useAuth