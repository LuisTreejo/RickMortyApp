import { View, Text, SafeAreaView, Button, StyleSheet, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import React,{useState, useEffect, useCallback} from 'react'
import { getFavoriteApi } from '../api/favorito'
import useAuth from '../hooks/useAuth'
import axios from 'axios'
import FavoritosList from '../components/FavoritosList'
import {useFocusEffect} from '@react-navigation/native'
import AvisoLogin from '../components/AvisoLogin'

export default function Favoritos() {

  const [refreshing, setRefreshing] = React.useState(false);

  const {auth} =useAuth()

  const apiUrl = 'https://rickandmortyapi.com/api/character/'

  const [lista,setLista]=useState([])
  const [dataCharacter, setDataCharacter] = useState([])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchDataFavorites()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [dataCharacter]);

  const fetchDataFavorites = async () =>{
    try{
      const res=[]
      for(let i=0;i<lista.length;i++){
        const response = await axios.get(apiUrl + lista[i]);
            res.push(response.data)    
               
      }
      setDataCharacter(res)
             
  }catch(error){
      console.log(error)
  }
}
    useEffect(()=>{
      if(auth){
        
        const checkFavorito = async()=>{
          const response = await getFavoriteApi()
          console.log(response)
          setLista(response)
        }

        

      
        checkFavorito()
        fetchDataFavorites()
    }
  }, [auth])
  
  



  if(auth){
  return (
    <SafeAreaView style={styles.container}>
      
        <Text style={styles.title}>Mis Favoritos</Text>
        {/* <TouchableOpacity style={styles.button} onPress={checkFavorito}>
            <Text style={styles.buttonText}>Cargar favoritos</Text>
        </TouchableOpacity> */}


        
          {/* {
            lista.map((item) => (
              <Text key={item} style={styles.idFavs}>ID: {item} </Text>
          ))
          } */}
          <ScrollView style={{flex:1}} refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
            <FavoritosList dataCharacter={dataCharacter}/>
          </ScrollView>

          
        
    </SafeAreaView>
  ) 
} else { 
  return(
    <View style={styles.container2}>
        <AvisoLogin/>
    </View>
  )

}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0D0D0D',
  },
  container2:{
    flex:1,
    backgroundColor:'#0D0D0D',
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color:'#5CAD4A'
  },


  idFavs:{
    color:'#fff',
    fontSize:24
  },
  
})