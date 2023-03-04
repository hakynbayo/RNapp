import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import CarItem from './components/carItem';
import StyledBtn from './components/styledBtn';

export default function App() {
  return (
    <View style={styles.container}>
     <CarItem/>
     <StyledBtn type='secondary' content={'Custom Order'} onPress={()=>{
      console.warn('Custom order button pressed')
     }}/>

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
