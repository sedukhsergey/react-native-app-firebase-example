import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                    <Text>Home</Text>
                </Link>
                <Link
                    to="/about"
                    underlayColor="#f0f4f7"
                    style={styles.navItem}
                >
                    <Text>About</Text>
                </Link>
                <Link
                    to="/dashboard"
                    underlayColor="#f0f4f7"
                    style={styles.navItem}
                >
                    <Text>Dashboard</Text>
                </Link>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        paddingTop: 20,
        paddingBottom: 10,
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
})

export default Header;
