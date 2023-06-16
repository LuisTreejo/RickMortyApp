import { View, Text, TextInput, Button, StyleSheet, Keyboard } from 'react-native'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import {user, userDetail} from '../../utils/userDB'

export default function LoginForm() {

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
            } else {
                console.log('Login correcto')
                console.log(userDetail)
                setError("Iniciando sesion...")
                setColor("green")
            }
        }
    })

    
  return (
    <View>

      <Text style={styles.title}>Iniciar sesion</Text>
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

        <Button  title='Iniciar sesion' onPress={formik.handleSubmit}/>
        
        <Text>{formik.errors.username}</Text>
        <Text>{formik.errors.password}</Text>
        <Text style={[styles.textError,{color:color}]}>{error}</Text>
    </View>
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
        password: Yup.string().required('La contrasena dx obligatoria')
    }
}

const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    input: {
        height: 40,
        margin: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },

    textError: {
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold'
    }
})