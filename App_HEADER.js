import React from 'react';
import Header from './src/Header';
import {SafeAreaView,StyleSheet,Text,View} from 'react-native';

//ES6 FUNCTION BASED COMPONENT DECLARATION
const App_HEADER = () => {
  return ( 
    <SafeAreaView style={styles.root}>
        <Header title='passing prop' 
        title2='passing prop2'
        > 
        </Header>
        <Text>Welcome to React</Text>        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

root:
 {
    flex:1,
    backgroundColor: '#F9FBFC'
 },
 
});

export default App_HEADER;

