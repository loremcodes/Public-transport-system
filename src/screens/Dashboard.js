import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import BottomNavigationBar from './BottomNavigationBar'
// import { BottomNavigation, Text } from 'react-native-paper'
import { View } from 'react-native'

export default function Dashboard({ navigation }) {

  return (
    <Background>
      {/* <Logo /> */}
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing jounery starts here. Choose your source and destination and we will show the local bus you need.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
