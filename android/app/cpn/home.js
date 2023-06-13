import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default () => {
    const [ section, setSection ] = useState(false)
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{ section ? "On" : "Off" }</Text>
        <Button
          title = "Switch"
          onPress = { () => { setSection(!section) }}
        />
      </View>
    );
  }