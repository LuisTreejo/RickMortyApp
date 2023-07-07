import { View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import EpisodeCard from './EpisodeCard'

export default function Episodes(props) {
    const {episodes} = props
    
  return (
    <SafeAreaView style={styles.list}>
        {/* <FlatList 
            data={episodes}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(episodes)=>String(episodes.id)}
            renderItem={({item})=><EpisodeCard episodes={item}/>}
            contentContainerStyle={styles.container}
            scrollEnabled={true}
        /> */}
        {
            episodes.map((item) => (
                <EpisodeCard key={item.id} episodes={item}/>
            ))
        }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    list:{
        backgroundColor:'#0D0D0D',
    }
})