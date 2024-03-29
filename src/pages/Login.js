import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import useAuth from '../state/auth'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3),
    }
}))

const Login = () => {
    const classes = useStyles()
    const history = useHistory()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const { user, setUser } = useAuth()

    // Pego o nome e valor que está vindo no evento
    const handleInputChange = e => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value,
        })
    }

    // Pegar os dados, processar e enviar para a API
    const handleFormSubmit = () => {
        setIsLoading(true)

        setTimeout(() => { //Simular como uma chamada para a API           
            setUser({
                logged: true,
                email: form.email,
            })

            history.push('/')
        }, 4000)
    }

    return (
        <>
            <Typography variant="h3">Acesso Restrito</Typography>

            <div className={classes.wrapper}>
                <TextField
                    onChange={handleInputChange}
                    label="Digite o seu e-mail"
                    name="email"
                />
            </div>
            <div className={classes.wrapper}>
                <TextField
                    onChange={handleInputChange}
                    label="Digite sua senha"
                    name="password"
                    type="password"
                />
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                    {
                        isLoading ? 'Aguarde...' : 'Entrar'
                    }
                </Button>
            </div>
        </>
    )
}

export default Login