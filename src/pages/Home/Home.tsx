import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Card } from '../../components';

const Home = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        console.log('name',{name, password})
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.h1}>Home</Text>
                <View style={styles.title}>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate distinctio.</Text>
                </View>
            </View>
            <View style={styles.form}>
                <Card>
                    <TextInput style={styles.inputText} placeholder='name' onChangeText={text => setName(name)}/>
                    <TextInput style={styles.inputText} placeholder='password' onChangeText={password => setPassword(password)}/>
                </Card>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    h1: {
        textAlign: 'center',
        fontSize: 24,
        color: '#222',
    },
    title: {
        color: '#999',
    },
    text: {
        textAlign: 'center',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {

    }
})

export default Home;
