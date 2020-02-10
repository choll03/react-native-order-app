import React from 'react';
import { Spinner } from 'native-base';
import { View } from 'react-native';

export default () => (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Spinner color="red"/>
    </View>
)
