import { Box, Button, Center, FormControl, Heading, Input, VStack } from 'native-base'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'

function RegisterScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmationPassword, setConfirmationPassword] = useState("")

  const onHandleRegister = () => {
    if (password != confirmationPassword) {
      console.log('Password and confirmation is not match')
      return ''
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Register success"))
      .catch((error) => alert(error.message));
  }
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input onChangeText={(text) => setEmail(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={(text) => setPassword(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" onChangeText={(text) => setConfirmationPassword(text)} />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={() => onHandleRegister()}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  )
}

export default RegisterScreen