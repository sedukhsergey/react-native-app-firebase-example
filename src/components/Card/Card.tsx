import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const Card = ({
    children
}) => {
    return (
        <View style={styles.container}>{children}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        // backgroundColor:'#eee',
        borderRadius: 4,
        shadowColor: "grey",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,

        elevation: 2,
    }
})

export default Card;
