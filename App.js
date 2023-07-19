import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button } from 'react-native';

export default function App() {


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const buttonTitle = 'Log In';
  const transformedTitle = capitalizeFirstLetter(buttonTitle);


  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/fblogo.png')} 
      style={{
        width: 180, 
        height: 40,
        marginTop: -110,
        marginBottom: 100,
      }}
      />
      <View style={{ marginBottom: 0 }}>
        <TextInput
          style={{
            backgroundColor: 'white',
            paddingBottom: 10,
            marginBottom: 10,
            width: 300
          }}
          placeholder="Username"
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            paddingBottom: 10,
            marginBottom: 10,
            width: 300
          }}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View>
        <Button
          title={transformedTitle}
          color="#223B73"
        />
        </View>
        <Text style={{
          textAlign:'center',
          color: 'white',
          textDecorationLine: 'underline',
        }}>Forgot Password</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#355291',
  },
});