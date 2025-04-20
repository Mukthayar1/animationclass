import { StyleSheet, Text, View, Animated, useAnimatedValue } from 'react-native'
import React, { useEffect, useRef } from 'react'

// V C F

const Value = () => {

    const position = useAnimatedValue(0);
    const position2 = useAnimatedValue(20);
    const xyValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const basePosition = useAnimatedValue(50);
    const oscillation = useAnimatedValue(0);

    const combinedAnimation = Animated.add(basePosition, oscillation)

    const position3 = Animated.add(position, position2);
    const position4 = Animated.multiply(position, position2)
    const position5 = Animated.divide(position, position2)
    const position6 = Animated.subtract(position, position2)

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
    const startXYAnimation = () => {
        Animated.timing(xyValue, {
            toValue: { x: 50, y: 50 },
            duration: 3000,
            useNativeDriver: true
        }).start()
    }
    const startOscillation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(oscillation, {
                    toValue: 50,
                    duration: 3000,
                    useNativeDriver: true
                }),
                Animated.timing(oscillation, {
                    toValue: -50,
                    duration: 3000,
                    useNativeDriver: true
                }),
            ]), { iterations: 3 }
        ).start()
    }

    useEffect(() => {
        startOscillation()
        // startAnimation()
        // startXYAnimation()
    }, []);



    return (
        <View>
            <Animated.View style={[styles.box, { marginLeft: position }]} />
            <Animated.View style={[styles.box2, { transform: xyValue.getTranslateTransform() }]} />
            <Animated.View style={[styles.circle, { transform: [{ translateX: combinedAnimation }] }]} />
        </View>
    )
}

export default Value

const styles = StyleSheet.create({
    box: {
        height: 60,
        width: 80,
        backgroundColor: "white"
    },
    box2: {
        height: 60,
        width: 80,
        marginTop: 20,
        backgroundColor: "blue"
    },
    circle: {
        height: 80,
        width: 80,
        marginTop: 20,
        borderRadius: 60,
        backgroundColor: "white"
    }
})