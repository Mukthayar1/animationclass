import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import NoLib from './tutorials/AnimatedAPI/NoLib'
import Basic from './tutorials/AnimatedAPI/Basic'
import Value from './tutorials/AnimatedAPI/Value'
import Interpolation from './tutorials/AnimatedAPI/Interpolation'

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.headerText}>Animations</Text>

      {/* Animated Api */}
      {/* <NoLib /> */}
      {/* <Basic/> */}
      {/* <Value/> */}
      <Interpolation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222'
  },
  headerText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
    textDecorationLine: "underline",
    textAlign: "center"
  }
})