import React, { Children } from 'react';

import {
    Badge
} from 'native-base';

import {
    Text
} from 'react-native'

export default ({status}) => {
    if(status === 1) {
        return (
            <Badge warning style={{alignSelf: "flex-end"}}>
                <Text style={{color: "#FFF"}}>Dipesan</Text>
            </Badge>
        )
    }
    else if(status === 2) {
        return (
            <Badge info style={{alignSelf: "flex-end"}}>
                <Text style={{color: "#FFF"}}>Diproses</Text>
            </Badge>
        )
    }
    else {
        return (
            <Badge success style={{alignSelf: "flex-end"}}>
                <Text style={{color: "#FFF"}}>Selesai</Text>
            </Badge>
        )
    }
}