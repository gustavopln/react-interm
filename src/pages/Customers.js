import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

import CustomerCard from '../components/CustomerCard'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      margin: theme.spacing(2),
    },
  }));

const Customers = () => {
    const classes = useStyles()
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        //funciona semelhante ao fetch
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data

                setCustomers(data)
            })
    }, [])
    return (
        <Grid container>
            {
                customers.map(item => (
                    <Grid item xs={12} md={4}>
                        <CustomerCard 
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            className={classes.card}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Customers