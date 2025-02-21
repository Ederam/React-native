import * as React from 'react';
import { View,StyleSheet, Text } from "react-native";


export default function Cell({row, col, isBomb, isFlipped, value}) {
       return <View style={styles.container}> 
            <Text style={styles.text}>{value}</Text>
        </View>;
}

const styles = StyleSheet.create({
    container: {
        width: 35,
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        fontWeight: '800',
    }
})

 