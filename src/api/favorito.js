import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import {includes, pull} from 'lodash'
import { FAVORITE_STORAGE } from "../utils/constants";

//Crea la funcion que trae a los favs
export const getFavoriteApi = async ()=>{ 
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || []);
    } catch (error){
        console.log(error)
    }
    
}

//Funcion que anade favoritos
export const addFavoriteApi = async (id)=>{
    try{
        const isfav = await isFavoriteApi(id)
        
        if (isfav==true){
            Alert.alert(`${id}`,'Este ID ya esta en tus favoritos')
        } else {
        const favorites = await getFavoriteApi()
       
        favorites.push(id)
        
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    }

    }catch(error){
        console.log(error)
    }
}

//funcion que elimina un id
export const deleteFavorite = async (id)=>{
    try {

        const favorites = await getFavoriteApi()
        const removed = pull(favorites,id)
    
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(removed))

    } catch(error){
        console.log(error)
    }
}

//funcion que verifica si un personaje es favorito
export const isFavoriteApi = async (id) =>{
    try{
        const favorites = await getFavoriteApi()
        return includes(favorites,id)
    }catch (error){
        console.log(error)
        return false
    }
}