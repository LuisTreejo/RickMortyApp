import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
// import {API_URL} from '@env'
import axios from 'axios'
import RickandmortyList from '../components/RickandmortyList'

export default function RickandmortyApi() {
  const API_URL = 'https://rickandmortyapi.com/api/character'
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await axios.get(API_URL);
                setCharacters(response.data.results);
            }catch(error){
                console.log(error)
            }
        }

          fetchData();
    }, []);
  return (
    <View>
      <RickandmortyList characters={characters}/>
    </View>
  )
}