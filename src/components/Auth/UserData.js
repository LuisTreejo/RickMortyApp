import { View, Text, StyleSheet, TouchableOpacity, Button, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import {FontAwesome,FontAwesome5,AntDesign,Ionicons, Entypo} from '@expo/vector-icons'; 
import { useFocusEffect } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import { ItemMenu } from '../../screen/Account';
import { getFavoriteApi } from '../../api/favorito';

export default function UserData() {
  
  const {auth, logout}=useAuth()

  const [cantidad,setCantidad]=useState(0)

  useFocusEffect(
    useCallback(()=>{
        const misfavs= async ()=>{
          const response = await getFavoriteApi()
          setCantidad(response.length)
         }
         misfavs();
    })
  );

  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.top}>
        <Ionicons name="person-circle" size={170} color='#A7CB54'/>
        <Text style={styles.textName}>{auth.firstName} {auth.lastName}</Text>
      </View>

        
        <View style={styles.bottomInfo}>

          <ItemMenu title='Nombre: ' text={`${auth.firstName} ${auth.lastName}`}/>
          <ItemMenu title='Usuario: ' text={auth.username}/>
          <ItemMenu title='Email: ' text={auth.email}/>
          <ItemMenu title='Total de favoritos: ' text={`${cantidad} personajes`}/>

          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text style={styles.buttonText}>Cerrar sesion</Text>
        </TouchableOpacity>
        </View>

      
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    backgroundColor:'#0D0D0D',
  },
  top:{
    backgroundColor:"#5CAD4A",
    height:'33%', 
    justifyContent:'center',
    alignItems:'center',
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    flexDirection:'row',
  },
  bottomInfo:{
    justifyContent:'center',
    alignItems:'center',
    margin:20,
  },

  textName:{
    color:'#000',
    fontSize:36,
    bottom:40,
    fontWeight:'bold',
    textAlign:'center',
    top:5
  },
  button:{
    width:225,
    height:60,
    borderRadius:30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#208D45',
    marginTop:30
  },
  buttonText:{
      fontWeight:'bold',
      fontSize:20,
      color:'#FFF'
  },
  infoText:{
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center',
    padding:2,
  },
  infoUser:{
    fontSize:20,
    textAlign:'center',
    padding:2,
    width:240,
  },
  
})