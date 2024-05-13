/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const TextComponent = ({children}) => {
  return (
    <Animatable.Text animation="fadeInDown" duration={2000} style={styles.text}>
      {children}
    </Animatable.Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
});

export default TextComponent;
