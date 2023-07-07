import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import LogoRM from '../assets/logoRM.png'
import { useNavigation } from '@react-navigation/native'


export default function AvisoLogin() {
    const navigation = useNavigation()
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Image source={LogoRM} style={styles.logoimagen}/>
        <Text style={styles.titleNO}>DEBES INICIAR SESION PARA VER TUS FAVORITOS</Text>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Account')}}>
            <Text style={styles.buttonText}>Ir a inicio de sesion</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    titleNO:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color:'#5CAD4A'
      },
      logoimagen:{
        width:300,
        height:100,
      },
    button:{
        width:225,
        height:50,
        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#208D45',
        marginTop:15,
        alignSelf:"center"
      },
      buttonText:{
          fontWeight:'bold',
          fontSize:20,
          color:'#FFF'
      },
})