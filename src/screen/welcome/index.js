/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Animation} from '../../utils/animation';
import LottieAnimationComponent from '../../components/LottieAnimationComponent';
import BackgroundImageComponent from '../../components/BackgroundImageComponent';
import ButtonComponent from '../../components/ButtonComponent';
import TextComponent from '../../components/TextComponent';
import globalStyles from '../../utils/globalStyle';

export default function WelcomeScreen({navigation}) {
  return (
    <BackgroundImageComponent >
      <View style={globalStyles.container}>
        <LottieAnimationComponent source={Animation.animationGame} />
        <TextComponent>Welcome to Tic Tac Toe Game</TextComponent>
        <ButtonComponent
          onPress={() => navigation.navigate('Dashboard')}
          label="Continue"
        />
      </View>
    </BackgroundImageComponent>
  );
}
