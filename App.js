import React from 'react';
import { NativeBaseProvider,extendTheme, Text, Box, Button, Heading} from 'native-base';

import FormScreen from './src/Screens/FormScreen';
import LoginScreen from './src/Screens/LoginScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
// import WelcomeScreen from './src/Screens/WelcomeScreen';
import AppButton from './src/Components/AppButton';

const newColorTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        {/* <LoginScreen /> */}
        <SignUpScreen />
        {/* <Heading>I'm a heading</Heading>
        
        <AppButton color="#fff696" title="ini App.js" />
        <Button onPress={()=>console.log('faizal ganteng1')}>Kodok</Button>
        <Heading onPress={()=>console.log('asdasda')}>I'm a Heading</Heading>
        <LoginScreen/> */}

      </Box>
    </NativeBaseProvider>
  );
}