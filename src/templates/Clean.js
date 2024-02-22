import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

// JSS - Java Script Stylesheet - makestyle com uma arrow function com retorno implícito
const useStyles = makeStyles(() => ({
    container: {
        padding: '10px 0 10px 0',
    }
}))

const Clean = ({ Component }) => {
    const classes = useStyles()
    
    return (
        <>
            <Container className={classes.container}>
                <Component />
            </Container>
        </>
    )
}

export default Clean