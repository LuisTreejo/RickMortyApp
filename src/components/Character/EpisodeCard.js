import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Entypo} from '@expo/vector-icons'

export default function EpisodeCard(props) {
    const {episodes}=props
  return (
    <View style={styles.card}>
      <View>
      <Entypo name="video" size={44} color="black" />
      <View style={styles.infoView}>
        <Text style={styles.infoText}>Episodio:</Text> 
        <Text style={styles.infoEpisode}>{episodes.episode}</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.infoText}>Nombre:</Text> 
        <Text style={styles.infoEpisode}>{episodes.name}</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.infoTextFecha}>Fecha lanzamiento:</Text>
        <Text style={styles.infoEpisode}>{episodes.air_date}</Text>
      </View>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    card:{
      backgroundColor:'#F0F2EB',
      margin:2,
      padding:5,
      borderRadius:10,

    },
    infoView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height:35,
      marginBottom:15
    },
    infoText:{
      fontWeight:'bold',
      fontSize:18,
      borderRadius:8,
      textAlign:'center',
      padding:2,
      width:100,
      marginRight:10,
      color:'#0D0D0D'
    },
    infoTextFecha:{
      fontWeight:'bold',
      fontSize:12,
      borderRadius:8,
      textAlign:'center',
      padding:2,
      width:100,
      marginRight:10,
      color:'#0D0D0D'
    },
    infoEpisode:{
      fontSize:16,
      backgroundColor:"#5CAD4A",
      borderRadius:8,
      textAlign:'center',
      padding:4,
      width:240,
      height:45,
    },
})