import React, { useState } from 'react';
import { Text, View, Container, Tabs, Tab, Header, Title, Content, Body, Left, Right, Button, Icon, Subtitle, Footer, Grid, Col } from 'native-base';
import ListMenuComponent from '../components/ListMenuComponent';

function ListMenu ({navigation}) {

    const [menus, setMenus] = useState([
        {
            id: 1,
            nama: "Nasi Uduk",
            harga: 20000,
            qty: 0
        },
        {
            id: 2,
            nama: "Nasi Bebek",
            harga: 20000,
            qty: 0
        },
        {
            id: 3,
            nama: "Nasi Goreng",
            harga: 20000,
            qty: 0
        }
    ]);

    const handleCheckout = () => {
        navigation.navigate('Checkout', {cartItem: menus.filter(menu => menu.qty > 0)});
    }

    const addToCart = (menu) => {
        setMenus(menus.map(state => state.id === menu.id ? {...state, qty: state.qty + 1} : {...state}))
    }

    const removeItemToCart = (menu) => {
        setMenus(menus.map(state => state.id === menu.id ? {...state, qty: state.qty - 1} : {...state}))
    }

    const totalBelanja = () => menus.reduce((acc, currentValue) => acc + (currentValue.qty > 0 ? (currentValue.harga * currentValue.qty) : 0) , 0)
    
    return(
        <Container>
            <View style={{height: 30, backgroundColor: "#000"}}></View>
                <Header hasTabs style={{backgroundColor: "#d9534f"}}>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>MujiGae</Title>
                        <Subtitle>Restaurant korea</Subtitle>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    {
                        menus.map(menu => (
                            <ListMenuComponent 
                                key={menu.id} 
                                addToCart={() => addToCart(menu)}
                                removeItemToCart={() => removeItemToCart(menu)}
                                {...menu}/>
                        ))
                    }
                </Content>
                
            {
                totalBelanja() > 0
                ? <Footer style={{backgroundColor: "#fff", justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "#f4f4f4"}}>
                    <Grid>
                        <Col size={2}>
                            <View style={{marginLeft: 10, marginTop: 10}}>
                                <Text>Rp. {totalBelanja()}</Text>
                            </View>
                        </Col>
                        <Col size={1}>
                            <View style={{padding: 10}}>
                                <Button bordered danger small block onPress={handleCheckout}>
                                    <Text style={{fontSize: 10}}>Checkout</Text>
                                </Button>
                            </View>
                        </Col>
                    </Grid>
                </Footer>
                : null
            }
        </Container>
    );
}


export default ListMenu;