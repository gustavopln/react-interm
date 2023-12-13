import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// JSS - Java Script Stylesheet - makestyle com uma arrow function com retorno implícito
const useStyles = makeStyles(() => ({
    container: {
        padding: '10px 0 10px 0',
    }
}))

const Page = ({ title, Component }) => {
    const classes = useStyles()
    
    return (
        <>
            <Typography variant='h3'>
                {title}
            </Typography>
            <Component />            
            
        </>
    )
}

export default Page