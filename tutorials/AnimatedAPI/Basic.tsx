import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

// V C F

const Basic = () => {

    const position = useRef(new Animated.Value(0))?.current;

    const startAnimation = () => {
        Animated.timing(position, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false
        }).start(() => {
            Animated.timing(position, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: false
            }).start()
        })
    }

    useEffect(() => {
        startAnimation()
    }, [])

    return (
        <View>
            <Animated.View style={[styles.box, { marginLeft: position }]} />
        </View>
    )
}

export default Basic

const styles = StyleSheet.create({
    box: {
        height: 150,
        width: 150,
        backgroundColor: "white"
    }
})