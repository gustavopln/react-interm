import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Header from "../partials/Header/Header"

// JSS - Java Script Stylesheet - makestyle com uma arrow function com retorno implícito
const useStyles = makeStyles(() => ({
    container: {
        padding: '10px 0 10px 0',
    }
}))

const Default = ({ children }) => {
    const classes = useStyles()
    
    return (
        <>
            <Header />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default