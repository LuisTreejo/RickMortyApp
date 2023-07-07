import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function FavoritoCard(props) {
    const {dataCharacter} = props
    const stat = dataCharacter.status
    const navigation = useNavigation()

    const statusColor = (stat)=> {
        if(stat=='Alive'){
            return 'green'
        } else if(stat=='Dead'){
            return 'red'
        } else if(stat=='unknown'){
            return 'gray'
        }
    };

    const goToPersonaje = ()=>{
        navigation.navigate('Rickandmorty',{
          id: dataCharacter.id, 
          name:dataCharacter.name, 
          image:dataCharacter.image, 
          status:dataCharacter.status,
          gender:dataCharacter.gender,
          species:dataCharacter.species,
          type:dataCharacter.type,
          origin:dataCharacter.origin.name,
          location:dataCharacter.location.name,
          episode:dataCharacter.episode
        })

        console.log(`Conoce mas del personaje: '${dataCharacter.name}'`)
    }


  return (
    <TouchableWithoutFeedback onPress={goToPersonaje}>
    <View style={styles.containerCard}>

        <View style={styles.cardDivided}>
            <View style={styles.viewImg}>
                <Image source={{uri:dataCharacter.image}} style={[styles.imageChar,{borderColor:statusColor(stat)}]}/>
                <Text style={[styles.textStatus,{backgroundColor:statusColor(stat)}]}>{dataCharacter.status}</Text>
            </View>

            <View style={styles.viewInfo}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.textID}>ID: {dataCharacter.id}</Text>
                    <Text style={styles.textName}>{dataCharacter.name}</Text>
                </View>
                
                
                <Text style={styles.infoText}>Especie: {dataCharacter.species}</Text>
                <Text style={styles.infoText}>Genero: {dataCharacter.gender}</Text>
                <Text style={styles.infoText}>Origen: {dataCharacter.origin.name}</Text>
                <Text style={styles.infoText}>Ubicacion: {dataCharacter.location.name}</Text>
            </View>
        </View>
        
        
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    containerCard:{
        margin:2,
        marginTop:5,
        width:'100%'
    },
    cardDivided:{
        flexDirection:'row',
        
    },
    imageChar:{
        width:100,
        height:100,
        borderRadius:10,
        borderWidth:3,
        marginRight:2,
        alignSelf:'center'
    },
    viewImg:{
        width:'28%',
        justifyContent:'center',
        alignContent:'center'
    },
    viewInfo:{
        backgroundColor:'#F0F2EB',
        width:'72%',
        padding:5,
        borderRadius:10
    },
    textStatus:{
        textAlign:'center',
        width:100,
        alignSelf:'center'
    },
    textID:{
        fontSize:19,
        fontWeight:'bold'
    },
    textName:{
        fontSize:16,
        color:'#5CAD4A',
        textAlign:'right',
        fontWeight:'bold'
    },
    infoText:{
        fontSize:16
    }
})