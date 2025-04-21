import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import HamburgerMenu from './components/HamburgerMenu';

const app = () => {
return (
  <SafeAreaView style={styles.container}>
  <HamburgerMenu/>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#fff',
   
  }

});

export default app;