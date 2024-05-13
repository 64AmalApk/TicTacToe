/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

const ButtonComponent = ({ onPress, label, containerStyle, buttonStyle, labelStyle }) => {
  return (
    <View style={[styles.buttonContainer, containerStyle]}>
      <Button
        icon="arrow-right"
        buttonColor={'#00ddb3'}
        mode="contained"
        onPress={onPress}
        style={[styles.button, buttonStyle]}
        labelStyle={[styles.labelStyle, labelStyle]}
      >
        {label}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 40,
  },
  button: {
    width: '100%',
  },
  labelStyle: {
    fontSize: 16,
  },
});

export default ButtonComponent;
