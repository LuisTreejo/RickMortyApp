import { View, Text, FlatList, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import FavoritoCard from './FavoritoCard'

export default function FavoritosList(props) {

    const {dataCharacter, loadList} = props
 
  return (
    
    <SafeAreaView  style={{flex: 1, marginTop:5}}>
        <FlatList
            data={dataCharacter}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(dataCharacter)=>String(dataCharacter.id)}
            renderItem={({item})=><FavoritoCard dataCharacter={item}/>}
            contentContainerStyle={styles.container}
            onEndReachedThreshold={0.1}
            
            
        />

        {/* {
            dataCharacter.map((item) => (
                <FavoritoCard key={item.id} dataCharacter={item}/>
            ))
        } */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:2
    },

})