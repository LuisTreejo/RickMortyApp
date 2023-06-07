import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import RickandmortyCard from './RickandmortyCard'


export default function RickandmortyList(props) {
    const {characters} = props


    
  return (
    <SafeAreaView style={styles.list}>
        <FlatList 
            data={characters}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(characters)=>String(characters.id)}
            renderItem={({item})=><RickandmortyCard characters={item}/>}
            contentContainerStyle={styles.container}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15
    },
    list:{
        paddingTop: Platform.OS === 'android' ? 30 : 0
    }
})