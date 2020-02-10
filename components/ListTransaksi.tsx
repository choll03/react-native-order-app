import React from 'react';
import {
    Card,
    CardItem,
    View,
    Badge,
    Content,
    Right,
    Left,
} from 'native-base';
import {
    Text,
    StyleSheet
} from 'react-native';
import {
    Grid,
    Row,
    Col
} from 'react-native-easy-grid';
import StatusTransaksi from './StatusTransaksi';


export default ({no_transaksi, status}) => {

    return (
        <Card>
            <CardItem>
                <Grid>
                    <Col>
                        <Grid>
                            <Row><Text>{no_transaksi}</Text></Row>
                            <Row><Text style={styles.priceText}>Rp. 300.000</Text></Row>
                        </Grid>
                    </Col>
                    <Col>
                        <View style={styles.status}>
                            <StatusTransaksi status={status}/>
                        </View>
                    </Col>
                </Grid>
                
            </CardItem>
        </Card>
    )
}
const styles = StyleSheet.create({
    status: {
        flex: 1,
        justifyContent: "center",
    },
    priceText: {
        color: "#0C7F8F",
        marginTop: 10,
        marginBottom: 10,
    }
});