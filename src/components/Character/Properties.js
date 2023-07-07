import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Episodes from './Episodes'

export default function Properties({gen, spe, typ, ori, loc,epi}) {
  const [episodes,setEpisodes]=useState([])
  
  useEffect(()=>{
    const fetchDataEpisodes = async () =>{
        try{
            const res=[]
            for(let i=0;i<epi.length;i++){
              const response = await axios.get(epi[i]);
                  res.push(response.data)       
            }
            setEpisodes(res)
                   
        }catch(error){
            console.log(error)
        }
    }
      
      fetchDataEpisodes();
}, []);
  return (
    <SafeAreaView style={styles.proper}>
    <View style={styles.infoContainer}>
      

      <View style={styles.infoView}>
        <Text style={styles.infoText}>Género: </Text>
        <Text style={styles.infoCharacter}>{gen}</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.infoText}>Especie: </Text>
        <Text style={styles.infoCharacter}>{spe}</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.infoText}>Origen: </Text>
        <Text style={styles.infoCharacter}>{ori}</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.infoText}>Ubicación: </Text>
        <Text style={styles.infoCharacter}>{loc}</Text>
      </View>     

      <Text style={styles.propTitle}>---- Total de Episodios {epi.length} ----</Text> 
      
      {/* {episodes.map((episodeUrl) => 
        <Text style={styles.propTitle} key={episodes.id}>{episodeUrl}</Text>
      )}  */}
        <Episodes episodes={episodes}/>
      
    </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  proper:{
    flex:1
  },
  infoContainer:{
    alignContent:'center',
  },
  propTitle:{
    fontSize:25,
    color:'#FFF',
    textAlign:'center',
    marginBottom:10,
    fontStyle:'italic'
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

})