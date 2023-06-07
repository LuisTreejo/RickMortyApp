import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import RickandmortyList from '../components/RickandmortyList'
import RickandmortyApi from '../api/RickandmortyApi'

export default function Rickandmorty() {
  return (
    <SafeAreaView style={{flex:1}}>
        <RickandmortyApi/>
    </SafeAreaView>
  )
}