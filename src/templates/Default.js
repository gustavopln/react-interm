import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Header from "../partials/Header/Header"

/** Temos que fazer o template enxergar através do hook useAuth o estado de logado */
import useAuth from '../state/auth'

// JSS - Java Script Stylesheet - makestyle com uma arrow function com retorno implícito
const useStyles = makeStyles(() => ({
    container: {
        padding: '10px 0 10px 0',
    }
}))

const Default = ({ children }) => {
    const classes = useStyles()

    /** Não preciso passar o setUser porque iremos apenas verificar estado do usuário, user.logged por exemplo*/
    const { user } = useAuth()
    
    return (
        <>
            <Header user={ user }/>
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default