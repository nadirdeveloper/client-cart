import React, { useContext, useState } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './main';
import PayPal from './components/PayPal'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';

import { CartContext } from "./Global/CartContext";
import { ProductContext } from './Global/ProductsContext';


function App() {
    //position: "fixed", display: "flex", flexDirection: "column"
    const { products } = useContext(ProductContext);
    const { dispatch } = useContext(CartContext);
    const [checkout, setCheckOut] = useState(false)
    const [cart, setCart] = useState([]);


    const database = ([
        {
            name: 'NY Jeans',
            cost: '$150.00',
            id: '1',
            colors: ["Black", "Blue"]
        },


        {
            name: 'LA Jeans',
            cost: '$150.00',
            id: '2'
        },

        {
            name: 'Mind Your Business Hoodie',
            cost: '$100.00',
            id: '3',
            colors: ["Black", "Green"]
        }

    ])

    const lajeans = ([
        {
            name: "LA Jeans",
            cost: 150.00,
            id: '1',
            colors: ["Black", "Blue"]
        }

    ])
    const add1ToCart = (lajeans) => {
        dispatch({ type: "ADD_TO_CART", product: lajeans, item:"lajeans"})
        // setCart([...cart, lajeans]);
    }

    const ny = ([
        {
            name: "LA Jeans",
            cost: 150.00,
            id: '1',
            colors: ["Black", "Blue"]
        }

    ])

    const add2ToCart = (ny) => {
        dispatch({ type: "ADD_TO_CART", product: ny, item:"ny"})
        // setCart([...cart, ny]);
    }


    const add3ToCart = (ny) => {
        setCart([...cart, ny]);
    }

    // const hoodie = ([
    //     {
    //         name: ' MYB Hoodie Black',
    //         cost: 100.00,
    //         id: '3',
    //         colors: ["Black", "Green"]
    //     }

    // ])

    const add4ToCart = (hoodie) => {
        dispatch({ type: "ADD_TO_CART", product: hoodie, item:"hoodie"})
        // setCart([...cart, hoodie]);
    }

    const addToCart = (database) => {

        setCart([...cart, database]);
    }
    return (


        <div className="app">
            <Layout>
                <Header title="No Reservations" style={{ background: 'black' }} scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/shoppingcart">Shopping Cart</Link>
                        <Link to="/instagram">Instagram</Link>
                        {/* {checkout ? (
                            <PayPal />

                        ) : (

                                <button onClick={() => {
                                    setCheckOut(true);
                                }}
                                >
                                    Checkout
                                </button>

                            )} */}


                    </Navigation>
                </Header>
                <Drawer className='drawer' title="No reservations" style={{ position: "fixed", display: "flex", flexDirection: "column" }}>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/shoppingcart">Shopping Cart ({cart.length}) </Link>
                        <Link to="/instagram">Instagram</Link>
                        {checkout ? (
                            <PayPal />

                        ) : (

                                <button onClick={() => {
                                    setCheckOut(true);
                                }}
                                >
                                    Checkout
                                </button>

                            )}
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <div className="landing-grid" >
                        <img src="https://raw.githubusercontent.com/Fiasalhotaky/nr/main/NR%20BLACK%20PRIMARY%20.png" alt=""
                            style={{ height: '100px' }} />

                        <h1 style={{ paddingTop: '0em' }}>Catalog</h1>

                        <Grid container direction='column' justify="center" alignItems="center" position="fixed" display="flex">

                            <Grid item xs={12} >
                                {products.lajeans.map((product, idx) => (
                                    <Card style={{ width: '350px', height: '400px', paddingTop: '0em' }} key={idx} >
                                        <CardActionArea  >
                                            <CardMedia
                                                component="img"
                                                alt={product.name}
                                                height="250"
                                                image={product.image}
                                                title={product.name}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">{product.name}</Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    ${product.cost}
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button onClick={() => add1ToCart(product)} size="small" style={{ background: "black", color: "white", display: "block", cursor: "pointer", width: "100%" }}>
                                                ADD TO CART
                    </Button>
                                        </CardActions>
                                    </Card>
                                ))}

                            </Grid>

                        <Grid item xs={12} style={{ width: '350px', height: '400px', paddingTop: '0em' }}  >
                            {products.ny.map((ny, idx) => (
                                <Card style={{ width: '350px', height: '400px', paddingTop: '0em' }} key={idx}  >
                                    <CardActionArea  >
                                        <CardMedia
                                            component="img"
                                            alt={ny.name}
                                            height="280"
                                            image={ny.image}
                                            title={ny.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            {ny.name}
                    </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                ${ny.cost}
                    </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button onClick={() => add2ToCart(ny)} size="small" style={{ background: "black", color: "white", display: "block", cursor: "pointer", width: "100%" }}>
                                            ADD TO CART
                    </Button>
                                    </CardActions>
                                </Card>
                            ))}
                        </Grid>

                        <Grid item xs={12} style={{ width: '350px', height: '400px', paddingTop: '0em' }}  >
                            {/* <Card style={{ width: '350px', height: '400px', paddingTop: '0em', minWidth: "300px" }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="New York Jeans Blue"
                                        height="280"
                                        image="https://raw.githubusercontent.com/Fiasalhotaky/nr/main/nr%20jeans%20blue.JPG"
                                        title="New York Jeans Blue"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            New York Jeans Blue
                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            $150.00
                    </Typography>

                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button onClick={() => add3ToCart(ny)} size="small" style={{ background: "black", color: "white", display: "block", cursor: "pointer", width: "100%" }}>
                                        ADD TO CART
                    </Button>
                                </CardActions>
                            </Card> */}

                            {products.hoodie.map((ny, idx) => (
                                <Card style={{ width: '350px', height: '400px', paddingTop: '0em' }} key={idx} >
                                    <CardActionArea  >
                                        <CardMedia
                                            component="img"
                                            alt={ny.name}
                                            height="280"
                                            image={ny.image}
                                            title={ny.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {ny.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                ${ny.cost}
                    </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button onClick={() => add4ToCart(ny)} size="small" style={{ background: "black", color: "white", display: "block", cursor: "pointer", width: "100%" }}>
                                            ADD TO CART
                    </Button>
                                    </CardActions>
                                </Card>
                            ))}

                        </Grid>

                        </Grid>

                    </div>
                </Content>

            <Footer size="mega" style={{ display: "flex", flexDirection: "column" }}>
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="#">Help</a>
                        <a href="#">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
            </Layout>

        </div >
    );

}

export default App;
