/* eslint-disable prettier/prettier */
import React, {useEffect, useRef} from 'react'
import {Animated, StyleSheet} from 'react-native'

const AnimatedTitleComponent = ({title}) => {
  const animatedOpacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    startAnimation()
  }, [])

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(animatedOpacity, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]),
    ).start()
  }

  return (
    <Animated.Text style={[styles.titleText, {opacity: animatedOpacity}]}>
      {title}
    </Animated.Text>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
})

export default AnimatedTitleComponent
