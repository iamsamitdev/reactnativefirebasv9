import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { authentication } from './../firebase/firebase-config'

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [isSignedIn, setIsSignedIn] = useState(false)

  loginUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(result => {
        // Signed in
        const user = result.user
        console.log(result)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(error)
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 24 }}>Login</Text>
      <View style={styles.content}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="teal"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="teal"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          style={styles.textInput}
        />
        <Text></Text>
        <Button title="Login" color="teal" onPress={loginUser} />
      </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start',
  },
  content: {
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  textInput: {
    padding: 10,
    textAlign: 'left',
    color: '#222',
    fontSize: 18,
  }
})