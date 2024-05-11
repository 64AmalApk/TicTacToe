/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable'; // Import Animatable library
import { Animation } from '../../utils/animation';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <LottieView
                source={Animation.animationGame}
                autoPlay
                loop
                style={styles.animation}
            />
            <Animatable.Text
                animation="fadeInDown"
                duration={2000}
                style={styles.text}
            >
                Welcome to Tic Tac Toe Game
            </Animatable.Text>
            <View style={styles.buttonContainer}>
                <Button
                    icon="arrow-right"
                    mode="contained"
                    onPress={() => navigation.navigate('Dashboard')}
                    style={styles.button}
                    labelStyle={styles.labelStyle}
                >
                    Continue
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: '100%',
        height: '60%',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 40,
        marginTop: 40,
    },
    button: {
        width: '100%',
        // paddingVertical : 1,
    },
    labelStyle: {
        fontSize: 16,
    }
});
