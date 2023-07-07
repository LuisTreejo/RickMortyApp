import { View, Text, Button,TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React,{useEffect, useState} from 'react'
import Icon from '@expo/vector-icons/FontAwesome5'
import { addFavoriteApi, isFavoriteApi, deleteFavorite} from '../../api/favorito'


export default function Favorito(props) {
    const {id} = props
    
    const [isFavorite, setIsFavorite] = useState(undefined)
    const [reloadFavorite, setReloadFavorite]=useState(false)

    useEffect(()=>{
        (async () => {
            const response = await isFavoriteApi(id)
            if (response) setIsFavorite(true)
            else setIsFavorite(false)
        })()
    },[id, reloadFavorite])


    const addFavorite = async ()=>{
        try {
            if(isFavorite==false){
                await addFavoriteApi(id)
                setIsFavorite(true)
            } else {
                Alert.alert(`${id}`, 'Ya existe en tu lista de favoritos')
            }
            
        }catch (error){
            console.log(error)
        }
        
    }

    const removeFavorite = async()=>{
        await deleteFavorite(id)
        setIsFavorite(false)
        Alert.alert(`${id}`,'Se ha eliminado de favoritos')
    }
  return (
    <TouchableOpacity style={styles.buttonFav} onPress={addFavorite} onLongPress={removeFavorite}
    >
        <Icon
        name="heart"
        color="#C80404"
        size={45} 
        solid={isFavorite}
        />
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    buttonFav:{
        width:145,
        height:50,
        borderRadius:10,
        alignItems: 'center',
        borderColor:'#C80404',
        borderWidth:2,
        marginTop:10
    }
})