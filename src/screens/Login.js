import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Layout from '../components/Layout';
import UserContext from '../context/UserContext';

const Form = ({ navigation }) => {
    const { user, setUser } = useContext(UserContext)

    useEffect(() => setUser(null), [])

    const [sesion, setSesion] = useState({})
    const [error, setError] = useState('')

    const handleEmailChange = (email) => setSesion({ ...sesion, email })
    const handlePasswordChange = (password) => setSesion({ ...sesion, password })

    const handleLogin = () => {
        // challenge@alkemy.org react
        const postData = async () => {
            try {
                const response = await fetch('http://challenge-react.alkemy.org/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(sesion)
                })
                if (!response.ok) throw new Error('NO AUTORIZADO')
                setUser(sesion)
                navigation.navigate('Home')
            } catch (error) {
                setError('NO AUTORIZADO')
                console.error(error)
            }
        }
        postData()
    }

    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.label}>Correo Electrónico:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu correo electrónico"
                    onChangeText={handleEmailChange}
                    value={sesion.email || ''}
                />
                <Text style={styles.label}>Contraseña:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu contraseña"
                    onChangeText={handlePasswordChange}
                    value={sesion.password || ''}
                    secureTextEntry // Para ocultar la contraseña
                />
                <Button title="Iniciar Sesión" onPress={handleLogin} />

                <View><Text>{error}</Text></View>

            </View>
            <View>
                <Button title="AUTO LOGIN" onPress={() => navigation.navigate('Home')} />
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%'
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    }
})

export default Form;
