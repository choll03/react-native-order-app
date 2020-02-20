import React, { useState } from 'react';
import { View, Content, List, Text, ListItem, Left, Thumbnail, Body, Container, Header, Title, Right, Subtitle, Grid, Col, Footer, Row, Button, Icon } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';

function Checkout ({navigation}) {
    
    const [carts, setCarts] = useState(navigation.getParam('cartItem'));
    const [saldo, setSaldo] = useState(200000);


    const subTotal = () => carts.reduce((acc, currentValue) => acc + (currentValue.qty > 0 ? (currentValue.harga * currentValue.qty) : 0) , 0)

    const potongan = () => subTotal() * 10 /100;

    const total = () => subTotal() - potongan();

    return(
        <Container>
            <View style={{height: 30, backgroundColor: "#000"}}></View>
            <Header style={{backgroundColor: "#d9534f"}}>
                <Left>
                    <Button transparent>
                        <Icon name="arrow-back"/>
                    </Button>
                </Left>
                <Body>
                    <Title>MujiGae</Title>
                    <Subtitle>Restoran Korean</Subtitle>
                </Body>
                <Right>
                    <Title>Meja 4</Title>
                </Right>
            </Header>
            <Content style={{marginTop: 20}}>
            
                    <List >
                    <ListItem itemDivider>
                        <Text>Detail Pesanan</Text>
                    </ListItem>
                    {
                        carts.map(cart => (
                            
                            <ListItem thumbnail key={cart.id}>
                                <Left>
                                    <Thumbnail square source={require("../assets/user.png")} />
                                </Left>
                                <Body>
                                    <Text>{cart.nama}</Text>
                                    <Text note numberOfLines={1}>x{cart.qty}</Text>
                                </Body>
                                <Right>
                                    {/* <Button transparent> */}
                                        <Text style={{fontSize: 12, color: "#999999"}}>{cart.qty * cart.harga}</Text>
                                    {/* </Button> */}
                                </Right>
                            </ListItem>
                        ))
                    }
                    <ListItem itemDivider>
                        <Text>Detail Pembayaran</Text>
                    </ListItem>
                    <ListItem noIndent noBorder style={{height: 10}}>
                        <Grid>
                            <Col>
                                <View style={styles.labelHarga}>
                                    <Text style={styles.itemText}>Subtotal</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={styles.rightTotal}>
                                    <Text style={styles.itemText}>{subTotal()}</Text>
                                </View>
                            </Col>
                        </Grid>
                    </ListItem>
                    <ListItem noIndent noBorder style={{height: 10}}>
                        <Grid>
                            <Col>
                                <Row>
                                    <View style={styles.labelHarga}>
                                        <Text style={styles.itemText}>Potongan</Text>
                                    </View>
                                    <View style={styles.labelHarga}>
                                        <Text style={styles.itemText}>10%</Text>
                                    </View>
                                </Row>
                            </Col>
                            <Col>
                                <View style={styles.rightTotal}>
                                    <Text style={styles.itemText}>{potongan()}</Text>
                                </View>
                            </Col>
                        </Grid>
                    </ListItem>
                    <ListItem noIndent>
                        <Grid>
                            <Col>
                                <View style={styles.labelHarga}>
                                    <Text style={styles.itemText}>Total Bayar</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={styles.rightTotal}>
                                    <Text style={styles.itemText}>{total()}</Text>
                                </View>
                            </Col>
                        </Grid>
                    </ListItem>
                    <ListItem noIndent>
                        <Grid>
                            <Col>
                                <View style={styles.labelHarga}>
                                    <Text style={{fontSize: 12, color: "orange"}}>Saldo</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={styles.rightTotal}>
                                    <Text style={styles.itemTextSaldo}>{saldo}</Text>
                                </View>
                            </Col>
                        </Grid>
                    </ListItem>
                    <ListItem noIndent>
                        <Grid>
                            <Col>
                                <View style={styles.labelHarga}>
                                    {
                                        saldo < total()
                                        ? <Text style={styles.itemTextFailur}>Kurang</Text>
                                        : <Text style={styles.itemTextSuccess}>Sisa</Text>
                                    }
                                    
                                </View>
                            </Col>
                            <Col>
                                <View style={styles.rightTotal}>
                                    {
                                        saldo < total()
                                        ? <Text style={styles.itemTextFailur}>{total() - saldo}</Text>
                                        : <Text style={styles.itemTextSuccess}>{saldo - total()}</Text>
                                    }
                                </View>
                            </Col>
                        </Grid>
                    </ListItem>
                </List>
            </Content>
            <Footer style={{backgroundColor: "#fff"}}>
                <Grid>
                    <Col size={2}>
                        <View style={{flex: 1, justifyContent: "center", alignItems: "flex-start", marginLeft: 20}}>
                            <Text>Total Bayar</Text>
                                <Text style={{color: "#d9534f"}}>Rp. {total()}</Text>
                        </View>
                    </Col>
                    <Col size={1}>
                        <TouchableOpacity style={{
                            backgroundColor: "#d9534f", 
                            height: "100%", 
                            flex: 1, 
                            alignItems: "center", 
                            justifyContent: "center"
                        }}>
                        {/* <View
                        style={{
                            backgroundColor: "#d9534f", 
                            height: "100%", 
                            flex: 1, 
                            alignItems: "center", 
                            justifyContent: "center"
                        }}> */}
                            {/* <Button bordered danger small block> */}
                                <Title>Bayar</Title>
                            {/* </Button> */}
                        {/* </View> */}
                        </TouchableOpacity>
                    </Col>
                </Grid>
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    rightTotal : {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    labelHarga : {
        flex: 1,
        justifyContent: "center"
    },
    itemText : {
        fontSize: 12,
        color: "#999999"
    },
    itemTextSaldo : {
        fontSize: 12,
        color: "orange"
    },
    itemTextSuccess : {
        fontSize: 12,
        color: "green"
    },
    itemTextFailur: {
        fontSize: 12,
        color: "red"
    },
    price : {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    priceLabel: {
        marginLeft: 30
    }
});

export default Checkout;