import { View, Text,Image, StyleSheet, SafeAreaView, Button} from 'react-native'
import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import Favorito from '../../components/Character/Favorito';


export default function Header({id,nom,img,stat}) {
  
  const {auth} = useAuth()
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
    <SafeAreaView style={styles.headerContent}>

      <View style={{flexDirection:'row'}}>
          <View style={styles.viewLeft}>
            <Image style={[styles.image,{borderColor:statusColor(stat)}]} source={{uri: img}}/>
            <Text style={[styles.textStatus,{backgroundColor:statusColor(stat)}]}>{stat}</Text>
          </View>

          <View style={styles.viewRight}>
          <Text style={styles.idText}>ID: #{id} </Text>
            {auth && <Favorito id={id}/>}
          </View>
      </View>


      <Text style={styles.textName} numberOfLines={3}> {nom}</Text>

    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    headerContent:{
        flex:1,
        justifyContent:'center',

    },
    viewLeft:{
      height:'70%',
      width:'50%'
    },
    viewRight:{
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'center',
      height:'70%',
      width:'50%'
    },
    textName:{
        textAlign:'center',
        fontSize:32,
        fontWeight:'bold',
        color:'#A7CB54',
        bottom:5
    },  
    image:{
        width:180,
        height:180,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        borderColor:'#A7CB54',
        alignSelf:'center',
        borderWidth:5,
      },
    textStatus:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        width:'100%'
    },
    idText:{
      fontSize:30,
      color:'#F0F2EB',
      textAlign:'center',
    }, 
})