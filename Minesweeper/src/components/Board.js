import * as React from 'react';
import { View, StyleSheet } from "react-native";
import { gameReducer } from '../reducers/gameReducer';
import { createBoard } from '../utils/createBoard';
import Cell from '../../src/components/Cell';

const BOARD_SIZE = 10;
const BOMMS_NUM = 3;

export default function Board(){
    const [gameState, dispatch ] = React.useReducer(gameReducer, {
        board: createBoard(BOARD_SIZE, BOARD_SIZE, BOMMS_NUM),    
    });

    return (
        <View>
            {gameState.board.map((row, rowIdx) => (
                <View key={rowIdx} style={styles.row}>
                    {row.map((cell, cellIdx) => (
                        <Cell key ={cellIdx} {...cell} />
                    ))}
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: "row",
    },
})