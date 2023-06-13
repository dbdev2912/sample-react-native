import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyleSheet, Text, View, Button } from 'react-native';
export default () => {
    const [ section, setSection ] = useState(false)
    const dispatch = useDispatch()
    const { auth } = useSelector( state => state.auth )
  const signout = () => {
    dispatch({ 
      branch: "default",
      type: "signin",
      payload: {
        signed: false
      }
    })
  }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{ auth.fullname }</Text>
        <Button
          title = "Sign out"
          onPress = { () => { signout() }}
        />
      </View>
    );
  }