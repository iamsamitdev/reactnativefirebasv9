import React from 'react'

// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(["Warning: AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"]);

import {
  StyleSheet
} from 'react-native'
import SignIn from './src/components/SignIn'
import Signup from './src/components/Signup'

const App = () => {
  return <SignIn />
}

export default App


const styles = StyleSheet.create({
  
})