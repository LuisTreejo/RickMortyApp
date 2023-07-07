import { View, Text, SafeAreaView, Dimensions, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import LoginForm from '../components/Auth/LoginForm'
import UserData from '../components/Auth/UserData'
import useAuth from '../hooks/useAuth'
import RickandmortyApi from '../api/RickandmortyApi'

export function ItemMenu(props){
  const {title,text} = props
  return(
    <View style={{width:'100%'}}>
      <View style={styles.ItemView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
}

export default function Account() {
  const { auth } = useAuth()
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#0D0D0D'}}>        
            { auth ? <UserData><ItemMenu title="Title" text="Text"/></UserData> : <LoginForm/> }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    ItemView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height:35,
      marginBottom:15,
    },
    title:{
      fontSize:20,
      fontWeight:'bold',
      color:'#F0F2EB',
      textAlign:'left'
    },
    text:{
      fontSize:18,
      color:'#F0F2EB',
      textAlign:'right'
    }
})