import { View, Button, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default ({ navigation }) => {
    const dispatch = useDispatch()
    const { css, auth, proxy } = useSelector( state => state );    
    const styles = StyleSheet.create(css);
    const [ account, setAccount ] = useState({
      username: "",
      password: ""
    })
    const signinRequest = () => {      
        fetch(`${ proxy }/auth/login`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify( { account } )
        }).then( res => res.json() ).then( res => {
            const { success, data } = res;
            if( success ){
              
              dispatch({ 
                branch: "default",
                type: "signin",
                payload: {
                  signed: true,
                  token: data.token,
                  data: data.data
                }
              })
            }else{
              alert("Opps! Failed to sign in due to wrong account submission")
            }
        })

        
    }

    return (
      <View style={ styles.container }>
        <View style={ styles.formContainer }>

          <Text style={ {...styles.label, ...styles.font} }>WELCOME</Text>
          
          <View style={ styles.fieldContainer }>
            <TextInput
              style={ {...styles.textinput, ...styles.font} }
              placeholder="Account"
              placeholderTextColor="#999"
              onChangeText={ (username) => { setAccount({...account, username}) } }
            />
          </View>

          <View style={ styles.fieldContainer }>
            
            <TextInput
              style={ {...styles.textinput, ...styles.font} }
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={ true }
              onChangeText={ (password) => { setAccount({...account, password}) } }
            />
          </View>

          <View style={ styles.buttonContainer } >
            <Pressable style={styles.submitBtn} onPress={signinRequest}>
              <Text style={{...styles.buttonText, ...styles.font}}>Sign in</Text>
            </Pressable>
          </View>

          
        </View>
      </View>
    );
  }
  