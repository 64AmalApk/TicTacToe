/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const BackgroundImageComponent = ({children, source, blurRadius}) => {
  return (
    <ImageBackground
      source={source || require('../../assets/backgroundTic.png') }
      style={styles.backgroundImage}
      blurRadius={3}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default BackgroundImageComponent;
