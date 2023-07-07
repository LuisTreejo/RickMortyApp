import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import RickandmortyList from '../components/RickandmortyList'
import RickandmortyApi from '../api/RickandmortyApi'
import Header from '../components/Character/Header'
import Properties from '../components/Character/Properties'


export default function Rickandmorty(props) {
  const {navigation, route:{params}}=props
  
  const id=params.id
  const img=params.image
  const nom=params.name
  const stat=params.status
  const gen=params.gender
  const spe=params.species
  const typ=params.type
  const ori=params.origin
  const loc=params.location 
  const epi=params.episode


  return (
    
    <SafeAreaView style={styles.container}>

      <View style={styles.headerView}>
          <Header id={id} img={img} nom={nom} stat={stat}/>
      </View>

      
          <ScrollView style={styles.propertiesView} nestedScrollEnabled={true}>
            <Properties gen={gen} spe={spe} ori={ori} loc={loc} typ={typ} epi={epi}/>
          </ScrollView>

    </SafeAreaView>
  )
}

const styles=StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#0D0D0D',
  },
  headerView:{
    height:'50%',
  },
  propertiesView: {
    flex: 1,
    height:'50%',
  },
})