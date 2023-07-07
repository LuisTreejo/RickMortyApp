import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
export default function RickandmortyCard(props) {
    const {characters} = props
    const navigation = useNavigation()

    const goToPersonaje = ()=>{
        navigation.navigate('Rickandmorty',{
          id: characters.id, 
          name:characters.name, 
          image:characters.image, 
          status:characters.status,
          gender:characters.gender,
          species:characters.species,
          type:characters.type,
          origin:characters.origin.name,
          location:characters.location.name,
          episode:characters.episode
        })

        console.log(`Conoce mas del personaje: '${characters.name}'`)
    }

  return (
    <TouchableWithoutFeedback onPress={goToPersonaje}>
        <View style={styles.card}>


          
            <Image source={{uri: characters.image}} style={styles.image}/>
                {/* <TouchableOpacity onPressIn={selectFav} onPressOut={unselectFav}>
                  <AntDesign name="heart" size={35} color={colorFav} style={styles.iconHeart}/>
                </TouchableOpacity> */}

            <View style={styles.marginCard}>
              <Text style={styles.number}>#{`${characters.id}`.padStart(3, 0)}</Text>
              <Text style={styles.name} numberOfLines={3}>{characters.name}</Text> 
            </View>

        </View>
    </TouchableWithoutFeedback>
  )
}

const styles=StyleSheet.create({

  card:{
    flexGrow:1,
    height:200,
    padding:5,
    width:100,
  },
  marginCard:{
    padding:1,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    backgroundColor:'#5CAD4A',
    justifyContent:'center',
    alignItems:'center',
    height:65
  },

  name:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:19,
    textAlign:'center',
  },
  image:{
    alignSelf:'center',
    width:'100%',
    height:130,
  },
  number:{
    color:'#fff',
    fontSize:14,
  },
  iconHeart:{
    bottom:28,
    left:150
  }
})