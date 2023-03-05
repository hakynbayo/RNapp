import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/carItem'
import StyledBtn from './components/styledBtn'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem/>
      <StyledBtn/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});