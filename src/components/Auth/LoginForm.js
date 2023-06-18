import { View, Text, TextInput, Button, StyleSheet, Keyboard, Dimensions, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import {user, userDetail} from '../../utils/userDB'
import { useNavigation } from '@react-navigation/native'
import {FontAwesome,FontAwesome5,AntDesign,Ionicons} from '@expo/vector-icons'; 


export default function LoginForm() {

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
                console.log('Usuario o contrasena incorrectos')
                setError("Usuario o contrasena incorrectos")
                setColor("red")
                Alert.alert(
                    `${error}`,
                    `Verifique bien sus datos`
                )
            } else {
                console.log('Login correcto')
                console.log(userDetail)
                setError("Iniciando sesion...")
                setColor("green")
                navigation.navigate('Userdata',{
                    nombre:userDetail.firstName,
                    apellido:userDetail.lastName,
                    nomUsu:userDetail.username,
                    correo:userDetail.email
                })
            }
        }
    })

    const mostrarContra=()=>{
        Alert.alert('Tu contrasena es',`${user.password}`)
    }

    
  return (

    <SafeAreaView style={styles.formMain}> 

      <Text style={styles.title}>Bienvenido a la App de Rick&Morty</Text>
        
        <TextInput
        placeholder='Nombre del usuario'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
        />
        
    
        <TextInput
        placeholder='Contrasena'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
        />

        <TouchableOpacity onPress={mostrarContra}>
            <Text style={styles.olvideText}>Olvide mi contrasena</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
            <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        
        
        <Text style={styles.textError}>{formik.errors.username}</Text>
        <Text style={styles.textError}>{formik.errors.password}</Text>
        <Text style={[styles.textError,{color:color}]}>{error}</Text>
        
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
        username: Yup.string().required('El nombre del usuario es obligatorio'),
        password: Yup.string().required('La contrasena es obligatoria')
    }
}

const styles = StyleSheet.create({
    formMain:{
    flex:1,
    backgroundColor:'#F0F2EB',
    borderTopStartRadius:50,
    borderTopEndRadius:50,
    alignItems:'center',
    height:'100%',
    },
    title:{
        top:10,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:10,
        color:'#5CAD4A'
    },
    input: {
        width:350,
        height: 50,
        margin: 15,
        borderWidth: 2,
        padding: 10,
        borderRadius: 20,    
    },

    textError: {
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        bottom:25
    },
    button:{
        width:225,
        height:50,
        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#208D45',
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FFF'
    },
    olvideText:{
        fontSize:18,
        padding:5,
        left:80
    }
})