/* 
* Somm - Reveal Screen 
* 
* Creator: Brian Nguyen (bnguyen3@luc.edu)
*/

import React from 'react';
import {
    View,
    Text,
    Image,
    Pressable
} from 'react-native';

import styles from './styles.js';
import HeaderBar from '../../Components/HeaderBar/headerbar.js';
import NavigationBar from '../../Components/NavigationBar/navigationbar.js';

const Reveal = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={require('../../Assets/Images/Background.png')}>
            </Image>
            <View style={styles.homeContainer}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoSubheaderText}>
                        Welcome to
                    </Text>
                    <Text style={styles.logoHeaderText}>
                        Somm
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonDescText}>
                        Would you like a bottle?
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.button}
                            onpress={() => { }}>
                            <Text style={styles.buttonText}>
                                Indulge me!
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.button}
                            onpress={() => { }}>
                            <Text style={styles.buttonText}>
                                I want something specific...
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <NavigationBar />
        </View>
    );
}

export default Reveal;