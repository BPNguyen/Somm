/* 
* Somm - Have Tried Screen Styles
* 
* Creator: 
*/

import React from 'react';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressableContainer: {
        display: 'flex',
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    navigationPressable: {
        width: '100%',
        backgroundColor: '#fcb9b8',
        paddingTop: 5,
        elevation: 3
    },
    navigationPressableText: {
        color: 'black',
        fontFamily: 'Satisfy-Regular',
        fontSize: 20,
        paddingVertical: 5,
        textAlign: 'center'
    }
})

export default styles;