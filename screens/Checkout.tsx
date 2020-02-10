import React, { useState } from 'react';
import { View } from 'native-base';
import { Text } from 'react-native';

function Checkout ({navigation}) {
    
    const [carts, setCarts] = useState(navigation.getParam('cartItem'));

    return(
        <View>
            {
                carts.map(cart => (
                    <Text key={cart.id}>{cart.nama}</Text>
                ))
            }
        </View>
    );
}


export default Checkout;