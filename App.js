import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function App() {

  const { css } = useSelector( state => state );  
  const styles = StyleSheet.create(css);
  const [ msg, setMsg ] = useState("Ngo he")
  return (
    <View style={{...styles.container, ...styles.crimson}}>
      <Text style={ styles.crimson }>Hiii, This is Moc from Mylan Group</Text>
      <span>{ msg }</span>
      <StatusBar style="auto" />
    </View>
  );
}

