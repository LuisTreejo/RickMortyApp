import { View, Text, SafeAreaView, Dimensions, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import LoginForm from '../components/Auth/LoginForm'
import UserData from '../components/Auth/UserData'
import ImageLogin from '../assets/randm.png'
import LogoRM from '../assets/logoRM.png'

export default function Account() {

  const auth = null
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#0D0D0D'}}>
      <ImageBackground source={ImageLogin} style={styles.fondoImagen}>
        <Image source={LogoRM} style={styles.logoimagen}/>
      </ImageBackground>

      <View style={styles.bottomView}>
          
          
            { auth ? <UserData/> : <LoginForm/> }
          
      </View>
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  fondoImagen:{
    height:Dimensions.get('screen').height/2.5,
    justifyContent:'center',
    alignItems:'center'
  },
  logoimagen:{
    width:300,
    height:100,
    top:100
  },
  bottomView:{
    flex:1.5,
    backgroundColor:'#00',
    borderTopStartRadius:60,
    borderTopEndRadius:60
  }
})