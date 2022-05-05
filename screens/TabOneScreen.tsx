import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ViewWithLoading from '../components/ViewWithLoading';

export default function TabOneScreen() {
  return (
  
      <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to the Home Screen
      </Text>
      
    </View>
  


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAD2C5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
