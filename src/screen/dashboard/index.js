/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Appbar, Text, Surface, IconButton } from 'react-native-paper';

export default function DashboardScreen() {
  return (
    <ImageBackground source={require('../../../asserts/background2.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Appbar.Header style={styles.appBar}>
          <IconButton icon="account" color="#fff" size={35} onPress={() => console.log('Pressed user')} />
          <Appbar.Content title="Ayush Pandey" titleStyle={styles.title} />
          <IconButton icon="bell" color="#fff" size={35} onPress={() => console.log('Pressed user')} />
        </Appbar.Header>
        <Text style={styles.titleText}>Tic Tac Toe</Text>

        <View style={styles.centerContent}>
          <Surface style={styles.surface} elevation={4}>
            <Text style={styles.surfaceText}>Play with Person</Text>
          </Surface>
          <Surface style={styles.surface} elevation={4}>
            <Text style={styles.surfaceText}>Play with Computer</Text>
          </Surface>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  surface: {
    padding: 20,
    height: 120,
    width: '80%',
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  surfaceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
