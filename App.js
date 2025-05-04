import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text,  Platform, View, Alert, Button} from 'react-native';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container }>
      <Button title="Click Me!" onPress={() => console.log("CLicked")} />      
    </SafeAreaView>
  ); 
}

const containerstyle = {backgroundColor: "Orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
