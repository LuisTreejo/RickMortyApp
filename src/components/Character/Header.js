import { View, Text,Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Imagen({id,nom,img,stat}) {

    const statusColor = (stat)=> {
      if(stat=='Alive'){
          return 'green'
      } else if(stat=='Dead'){
          return 'red'
      } else if(stat=='unknown'){
          return 'gray'
      }
};
    
  return (
    <View style={styles.headerContent}>
      <Image style={[styles.image,{borderColor:statusColor(stat)}]} source={{uri: img}}/>
      <Text style={[styles.textStatus,{backgroundColor:statusColor(stat)}]}>{stat}</Text>
      <Text style={styles.textName}><Text style={styles.idText}>ID: #{id} </Text> {nom}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    headerContent:{
        flex:.75,
        justifyContent:'center',
    },
    textName:{
        textAlign:'center',
        fontSize:32,
        fontWeight:'bold'
    },
    image:{
        width:200,
        height:200,
        borderRadius:100,
        borderColor:'#000',
        alignSelf:'center',
        borderWidth:5
      },
    textStatus:{
        textAlign:'center',
        top:-5,
        color:'#fff',
        padding:2,
        fontSize:18,
        borderRadius:5
    },
    idText:{
      fontSize:12,
      color:'gray',
    }  
})