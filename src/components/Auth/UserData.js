import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesome,FontAwesome5,AntDesign,Ionicons, Entypo} from '@expo/vector-icons'; 

export default function UserData(props) {
  const {navigation, route:{params}}=props
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        
        <Text style={styles.textName}>{params.nombre} {params.apellido}</Text>
      </View>

      <View style={styles.bottom}>
        <View  style={{top:-100,alignItems:'center',justifyContent:'center',}}>
            <Ionicons name="person-circle" size={200} color='#A7CB54' />

            <TouchableOpacity>
            <Text style={{bottom:10}}>Seleccionar una imagen</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.bottomInfo}>

          <View style={styles.textView}>
            
              <Entypo name='email' size={30} color='#A7CB54'/> 
              <Text style={styles.infoUser}>{params.nomUsu}</Text>
            
          </View>

          <View style={styles.textView}>
            
              <Entypo name='mail' size={30} color='#A7CB54'/> 
              <Text style={styles.infoUser}>{params.correo}</Text>
            
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar perfil</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    backgroundColor:'#0D0D0D'
  },
  top:{
    backgroundColor:"#0D0D0D",
    height: '30%',
    justifyContent:'center',
    alignItems:'center',
  },
  bottom:{
    backgroundColor:'#F0F2EB',
    height:'70%',
    borderTopRightRadius:100,
    borderTopLeftRadius:100,
  },
  bottomInfo:{
    justifyContent:'center',
    alignItems:'center',
    margin:20,
    bottom:30
  },
  textView:{
    flexDirection:'row',
  },
  textName:{
    color:'#5CAD4A',
    fontSize:36,
    bottom:40,
    fontWeight:'bold'
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