import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Account from '../screen/Account';
import UserData from '../components/Auth/UserData';


export default function NavigationAccount() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Account' component={Account} options={{title:"Inicio de sesion"}}/>
        <Stack.Screen name='Userdata' component={UserData} options={{title:"Mi cuenta",headerShown:true}} />
    </Stack.Navigator>
  )
}