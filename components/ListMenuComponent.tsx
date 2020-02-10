import React from 'react';
import { Text, Card, CardItem, Thumbnail, Grid, Col, Icon, Button } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ListMenuComponent({nama, harga, qty, addToCart, removeItemToCart}) {

    return (
        <Card>
            <CardItem>
                <Grid>
                    <Col size={1}>
                        <Thumbnail square source={require('../assets/user.png')}/>
                    </Col>
                    <Col size={2}>
                        <Text>{nama}</Text>
                        <Text style={{marginTop: 10}}>Rp. {harga}</Text>
                    </Col>
                    <Col size={1}>
                        <View style={styles.quantity}>
                            
                            {
                                qty > 0
                                ? <React.Fragment>
                                    <Button bordered danger small onPress={removeItemToCart}><Text>-</Text></Button>
                                        <View style={{marginLeft: 5, marginRight: 5}}>
                                            <Text>{qty}</Text>
                                        </View>
                                    <Button bordered danger small onPress={addToCart}><Text>+</Text></Button>
                                </React.Fragment>
                                
                                : <Button iconRight bordered small danger onPress={addToCart}>
                                    <Text>Order</Text>
                                    <Icon name="cart" />
                                </Button>
                            }
                            
                            
                        </View>
                    </Col>
                </Grid>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    quantity: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
    }
});