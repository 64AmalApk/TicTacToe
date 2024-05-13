import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LottieAnimationComponent = ({ source , style}) => {
  return <LottieView source={source} autoPlay loop style={[styles.animation, style]} />;
};

const styles = StyleSheet.create({
  animation: {
    width: '100%',
    height: '60%',
  },
});

export default LottieAnimationComponent;
