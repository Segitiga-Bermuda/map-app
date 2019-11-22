import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardAction from '@material-ui/core/CardAction'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';

const UseStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
})


export default class Countries extends Component {

    constructor(props){
        super(props)

        this.state ={
            data: []
        }
    }

    componentDidMount = () =>
{
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(response => {
        this.setState({data : response.data})
    })
    .catch (error => {console.error(error);
    })
}



    render() {
        const classes = UseStyles();

        return (
        <MaterialTable>
            
       {this.state.data.length > 0 &&
         this.state.data.map (
           ({ name, flag}, key) => {

            return (
         
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        image={flag}
                        height="140"
                        alt="Country"
                        Title="Nation">
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                {name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardAction>
                        <Button size="small" color="secondary">
                           <Link to={`/countries/${name.replace(/\s/g, '-').toLowerCase()}`}>Learn More </Link>
                        </Button>
                    </CardAction>
                </Card>
            )

           }
       )}

      
   
        </MaterialTable>
    )
}
















}