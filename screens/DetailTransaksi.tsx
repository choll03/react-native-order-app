import React, { useState } from 'react';
import { View, Content, List, Text, ListItem, Left, Thumbnail, Body, Container, Header, Title, Right, Subtitle, Grid, Col, Footer, Row, Badge, Button, Icon } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';

function DetailTransaksi ({navigation}){

    const [noTransaksi, setNoTransaksi] = useState(navigation.getParam('no_transaksi'));
    const [details, setDetails] = useState([
        {
            id: 1,
            nama: "Nasi Uduk",
            harga: 18000,
            qty: 1
        },
        {
            id: 2,
            nama: "Nasi Bebek",
            harga: 30000,
            qty: 3
        },
        {
            id: 3,
            nama: "Nasi Goreng",
            harga: 24000,
            qty: 4
        }
    ]);

    const subTotal = () => details.reduce((acc, currentValue) => acc + (currentValue.qty > 0 ? (currentValue.harga * currentValue.qty) : 0) , 0)

    const potongan = () => subTotal() * 10 /100;

    const total = () => subTotal() - potongan();
    
    return(
        <Container>
            <View style={{height: 30, backgroundColor: "#000"}}></View>
            <Header style={{backgroundColor: "#d9534f"}}>
                <Left>
                    <Button transparent onPress={() => navigation.navigate('Beranda')}>
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
                        <Text>Detail Transaksi</Text>
                    </ListItem>
                    <ListItem noIndent>
                        <Grid>
                            <Col>
                                <View style={styles.labelHarga}>
                                    <Text style={styles.itemText}>Nomor Transaksi</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={styles.rightTotal}>
                                    <Text style={styles.itemText}>{noTransaksi}</Text>
                                </View>
                            </Col>
                        </Grid>
                    </ListItem>
                    <ListItem noIndent>
                        <Grid>
                            <Col>
                                <View style={styles.labelHarga}>
                                    <Text style={styles.itemText}>Tanggal</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={styles.rightTotal}>
                                    <Text style={styles.itemText}>19/02/2020 22:37</Text>
                                </View>
                            </Col>
                        </Grid>
                    </ListItem>
                    <ListItem noIndent>
                        <Grid>
                            <Col>
                                <View style={styles.labelHarga}>
                                    <Text style={styles.itemText}>Status</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={styles.rightTotal}>
                                <Badge warning style={{alignSelf: "flex-end"}}>
                                    <Text style={{color: "#FFF"}}>Dipesan</Text>
                                </Badge>
                                </View>
                            </Col>
                        </Grid>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Detail Pesanan</Text>
                    </ListItem>
                    {
                        details.map(cart => (
                            
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
                </List>
            </Content>
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

export default DetailTransaksi;