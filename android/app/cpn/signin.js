import { StyleSheet, Text, View, Button } from 'react-native';

export default ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign in</Text>
        <Button 
          title="Go to Home"
          onPress={() => navigation.navigate('Home Page')}
        />
      </View>
    );
  }
  