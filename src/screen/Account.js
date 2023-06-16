import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import LoginForm from '../components/Auth/LoginForm'
import UserData from '../components/Auth/UserData'

export default function Account() {

  const auth = null
  return (
    <SafeAreaView style={{flex:1}}>
        {auth ? <UserData/> : <LoginForm/>}
    </SafeAreaView>
  )
}