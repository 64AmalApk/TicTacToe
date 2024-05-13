/* eslint-disable prettier/prettier */
import React, {useRef, useEffect} from 'react'
import {StyleSheet, TouchableOpacity, View, Animated} from 'react-native'
import {Surface, Text, Icon, MD3Colors} from 'react-native-paper'

const SurfaceComponent = ({onPress, iconNameOne, iconNameTwo, text}) => {
  const animatedScale = useRef(new Animated.Value(1)).current

  useEffect(() => {
    startAnimation()
  }, [])

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedScale, {
          toValue: 1.05,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start()
  }

  return (
     <Surface style={[styles.surface, {transform: [{scale: animatedScale}]}]} elevation={4}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.touchable}>
          <View style={styles.surfaceIcon}>
            <Icon source={iconNameOne} color={MD3Colors.error50} size={40} />
            <Text style={styles.surfaceText}> Vs </Text>
            <Icon source={iconNameTwo} color={MD3Colors.error50} size={40} />
          </View>
          <Text style={styles.surfaceText}>{text}</Text>
      </TouchableOpacity>
        </Surface>
  )
}

const styles = StyleSheet.create({
  surfaceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  surface: {
    padding: 20,
    height: 130,
    width: '80%',
    marginVertical: 10,
    backgroundColor: 'rgba(0, 221, 179, 1)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  surfaceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  surfaceIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
})

export default SurfaceComponent
