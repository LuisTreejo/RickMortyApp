import { View, Text, TextInput, Button, Image, StyleSheet, Keyboard, Dimensions, TouchableOpacity, Alert, SafeAreaView, ImageBackground } from 'react-native'
import {useFormik} from 'formik'
import ImageLogin from '../../assets/portal.gif'
import LogoRM from '../../assets/logoRM.png'
import * as Yup from 'yup'
import React,{ useState } from 'react'
import {user, userDetail} from '../../utils/userDB'
import { useNavigation } from '@react-navigation/native'
import {FontAwesome,FontAwesome5,AntDesign,Ionicons} from '@expo/vector-icons'; 
import useAuth from '../../hooks/useAuth'


export default function LoginForm() {

    const { login } = useAuth()
    
    const navigation = useNavigation()

    const [color,setColor]=useState("black")
    const [error, setError] = useState("")

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formData) => {
            setError("")
            const {username, password} = formData
            if (username !== user.username || password !==user.password){
                console.log('Usuario o contraseña incorrectos')
                setError("Usuario o contraseña incorrectos")
                setColor("red")
                Alert.alert(
                    `${error}`,
                    `Usuario o contraseña incorrectos`
                )
            } else {
                console.log('Login correcto')
                login(userDetail)
                setError("Iniciando sesión...")
                setColor("green")
                navigation.navigate('RickandMorty')
            }
            
        }
    })

    const mostrarContra=()=>{
        Alert.alert('Tu contraseña es',`${user.password}`)
    }

    
  return (

    <SafeAreaView style={styles.formMain}> 


    <ImageBackground source={ImageLogin} style={styles.fondoImagen}>
        <Image source={LogoRM} style={styles.logoimagen}/>
    </ImageBackground>

      <Text style={styles.title}>Bienvenido a la App de Rick&Morty</Text>
        
        <TextInput
        placeholder='Nombre de usuario'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        placeholderTextColor='gray'
        onChangeText={(text) => formik.setFieldValue('username', text)}
        />
        
    
        <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        placeholderTextColor='gray'
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
        />

        <TouchableOpacity onPress={mostrarContra}>
            <Text style={styles.olvideText}>Olvidé mi contraseña</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
            <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        
        
        <Text style={styles.textError}>{formik.errors.username}</Text>
        <Text style={styles.textError}>{formik.errors.password}</Text>
        {/* <Text style={[styles.textError,{color:color}]}>{error}</Text> */}
        
    </SafeAreaView>

  )
}

function initialValues(){
    return {
        username: '',
        password: ''
    }
}

function validationSchema(){
    return {
        username: Yup.string().required('El nombre de usuario es obligatorio'),
        password: Yup.string().required('La contraseña es obligatoria')
    }
}

const styles = StyleSheet.create({
    formMain:{
    flex:1,
    alignItems:'center',
    height:'100%',
    },
    title:{
        top:10,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color:'#5CAD4A'
    },
    input: {
        width:350,
        height: 50,
        margin: 10,
        borderWidth: 2,
        padding: 10,
        borderRadius: 20, 
        borderColor:'#A7CB54',
        color:'#fff'
    },

    textError: {
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        color:'red',
    },
    button:{
        width:225,
        height:50,
        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#208D45',
        marginTop:15
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FFF'
    },
    olvideText:{
        fontSize:14,
        padding:2,
        left:100,
        color:'#FFF',
        fontStyle:'italic'
    },
    fondoImagen:{
        height:Dimensions.get('screen').height/2.2,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
      },
      logoimagen:{
        width:300,
        height:100,
        top:100
      },
})