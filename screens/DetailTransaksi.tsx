import React from 'react';
import { View } from 'native-base';
import { Text } from 'react-native';

function DetailTransaksi ({navigation}){
    
    return(
        <View>
            <Text>{navigation.getParam('no_transaksi')}</Text>
        </View>
    );
    
}

export default DetailTransaksi;