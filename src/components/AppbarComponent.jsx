/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Appbar, IconButton, Icon} from 'react-native-paper';

const AppbarComponent = ({userName}) => {
  return (
    <Appbar.Header style={styles.appBar}>
      <Icon source="account" color="#d32f2fe8" size={35} />
      <Appbar.Content title={userName} titleStyle={styles.title} />
      <IconButton
        icon="bell"
        color="#d32f2fe8"
        size={35}
        onPress={() => console.log('Pressed user')}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'rgba(0, 221, 179, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2fe8',
  },
});

export default AppbarComponent;
