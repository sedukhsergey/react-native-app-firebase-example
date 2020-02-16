import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { Dashboard, Home, About } from './src/pages';
import { Footer, Header } from './src/modules';


const App = () => {
  return (
      <NativeRouter>
          <View style={styles.app}>
                  <Header />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route path="/about" component={About} />
          </View>
          <Footer />
      </NativeRouter>
  );
}


const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
      backgroundColor: '#333',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    color: 'grey'
  },
  textRed: {
    color: 'red',
  }
});


export default App;
