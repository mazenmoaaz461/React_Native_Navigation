/**
 * 
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';

import Navigation from './src/navigation';
import { firebase } from '@react-native-firebase/auth';
const App = () => {

  return (

    <SafeAreaView style={styles.root}>
        <Navigation/>
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

export default App;
