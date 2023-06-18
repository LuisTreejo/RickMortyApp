import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function Properties({gen, spe, typ, ori, loc}) {
  return (
    <SafeAreaView style={styles.proper}>
    <View style={styles.infoContainer}>
      <Text style={styles.propTitle}>---- Informacion del personaje ----</Text>
      <View style={styles.infoView}><Text style={styles.infoText}>Genero: </Text><Text style={styles.infoCharacter}>{gen}</Text></View>
      <View style={styles.infoView}><Text style={styles.infoText}>Especie: </Text><Text style={styles.infoCharacter}>{spe}</Text></View>
      <View style={styles.infoView}><Text style={styles.infoText}>Origen: </Text><Text style={styles.infoCharacter}>{ori}</Text></View>
      <View style={styles.infoView}><Text style={styles.infoText}>Ubicacion: </Text><Text style={styles.infoCharacter}>{loc}</Text></View>     

      <Text style={styles.propTitle}>---- Episodios ----</Text> 
    </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  infoContainer:{
    alignContent:'center',
    backgroundColor:'EFEFEF'
  },
  propTitle:{
    fontSize:20,
    color:'#F0F2EB',
    textAlign:'center',
    marginBottom:10
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
    color:'#F0F2EB'
  },
  infoCharacter:{
    fontSize:16,
    backgroundColor:"#5CAD4A",
    borderRadius:8,
    textAlign:'center',
    padding:2,
    width:240,
  },
  proper:{
    paddingTop: Platform.OS === 'android' ? 30 : 0
}
})