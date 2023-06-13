import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';


import { SignIn, HomePage } from './cpn'

export default function App() {

  const { css, auth } = useSelector( state => state );    
  const styles = StyleSheet.create(css);
  const Stack = createNativeStackNavigator();

  

  return (    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ auth.signed ? HomePage: SignIn } options={{ headerShown: auth.signed }} />
        <Stack.Screen name="Home Page" component={ HomePage } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
