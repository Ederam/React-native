import * as React from 'react';
import { View,StyleSheet } from "react-native";


export default function Cell({
    row,
    col,
    isBomb,
    isFlipped,
    value,
}){
    return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
    },
})