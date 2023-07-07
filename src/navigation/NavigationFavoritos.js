import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Favoritos from '../screen/Favoritos';
import Rickandmorty from '../screen/Rickandmorty';
import Account from '../screen/Account'

export default function NavigationFavoritos() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='Favoritos' component={Favoritos} options={{headerStyle:{backgroundColor:'#A7CB54'}}}/>
        <Stack.Screen name='Rickandmorty' component={Rickandmorty} options={{headerStyle:{backgroundColor:'#A7CB54'}}}/>
    </Stack.Navigator>
  )
}