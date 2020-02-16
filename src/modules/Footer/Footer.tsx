import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <View><Text>One</Text></View>
            <View><Text>Two</Text></View>
            <View><Text>Three</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: 'orange',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default Footer;
