import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Basic from './Basic';

const NoLib = () => {

    const [position, setPosition] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        interval = setInterval(() => {
            setPosition(prev => (prev < 200) ? prev + 5 : 0)
        }, 50);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <View style={[styles.box, { marginLeft: position }]} />
    )
}

export default NoLib

const styles = StyleSheet.create({
    box: {
        height: 50,
        width: 50,
        backgroundColor: "red"
    }
})