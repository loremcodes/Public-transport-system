import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { View } from 'react-native'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>City Link</Header>
      <Paragraph>
        The easiest way to get started with your jounery.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      {/* <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button> */}

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Dashboard')}
      >
        Guest Login
      </Button>
    </Background>
  )
}
