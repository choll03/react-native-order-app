import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
    Container,
    Header,
    Body,
    Title,
    Left,
    Right,
    View,
    Content,
    Card,
    CardItem,
    H3,
    Thumbnail,
    Icon,
    Toast
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import ListTransaksi from '../components/ListTransaksi';

export default function Beranda ({navigation}){
    const [listTransaksi, setListTransaksi] = useState([
        {
            id: 1,
            no_transaksi: "20200210001",
            status: 1
        },
        {
            id: 2,
            no_transaksi: "20200210002",
            status: 3
        },
        {
            id: 3,
            no_transaksi: "20200210003",
            status: 2
        },
        {
            id: 4,
            no_transaksi: "20200210001",
            status: 1
        },
        {
            id: 5,
            no_transaksi: "20200210002",
            status: 3
        },
        {
            id: 6,
            no_transaksi: "20200210003",
            status: 2
        }
        
    ]);


    const handlePressOrder = () => {
        navigation.navigate('ListMenu');
    }

    const handleDetailTransaksi = (data) => {
        navigation.navigate('DetailTransaksi', data);
    }

    return (
        <Container>
        <Header style={{height: 25, backgroundColor: "#000"}}>

        </Header>
        <Grid>
            <Row size={1} style={{zIndex: 2}}>
            <ImageBackground source={require("../assets/bg.png")} style={{height: "100%", width:"100%"}}>
                <View style={styles.profile}>
                {/* <Thumbnail source={{uri: require('./assets/user.png')}}/> */}
                <View style={styles.profileDetail}>
                    <Title style={{textAlign: "left"}}>ISMAIL</Title>
                    <Text style={{color: "#fff", marginTop: 5}}>Saldo : 20.000</Text>
                </View>
                </View>
                <View style={styles.containerMenu}>
                <Card style={styles.cardMenu}>
                    <Grid>
                    <Col>
                        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <TouchableOpacity onPress={handlePressOrder}>
                                <Icon name='restaurant' style={{fontSize: 40, color: 'red'}}/>
                                <Text>Order</Text>
                            </TouchableOpacity>
                        </View>
                    </Col>
                    <Col>
                        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Icon name='add-circle' style={{fontSize: 40, color: 'red'}}/>
                        <Text>Top Up</Text>
                        </View>
                    </Col>
                    </Grid>
                </Card>
                </View>
            </ImageBackground>
            </Row>
            <Row style={{zIndex: 1}} size={3}>
            <Content style={{marginTop: "15%", marginLeft: 20, marginRight: 20}}>
                <H3 style={{textAlign: "left", marginBottom: 10}}>Transaksi Terakhir</H3>
                
                {
                    listTransaksi.map(data => (
                        <TouchableOpacity onPress={() => handleDetailTransaksi(data)} key={data.id}>
                            <ListTransaksi 
                                {...data} />
                        </TouchableOpacity>
                    ))
                    
                }
                
            </Content>
            </Row>
        </Grid>
        </Container>
    )
}
    

const styles = StyleSheet.create({
    profile: {
      marginLeft: 20,
      marginTop: 20,
      flex: 1,
      flexDirection: "row"
    },
    profileDetail: {
      marginLeft: 15,
      flex: 1
    },
    containerMenu: {
      flex: 1,
      justifyContent: "center"
    },
    cardMenu: {
      width: "80%",
      height: 80,
      marginLeft: "10%",
      marginRight: "10%",
      position: "absolute",
      top: "30%",
      zIndex: 3
    }
});