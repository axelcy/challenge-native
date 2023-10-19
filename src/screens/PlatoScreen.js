import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Layout from '../components/Layout';
import Plato from '../components/Plato';
import useFetch from '../hooks/useFetch';
import UserContext from '../context/UserContext';
import MenuContext from '../context/MenuContext';

const PlatoScreen = ({ route }) => {
    const { user } = useContext(UserContext)
    const { menu } = useContext(MenuContext)

    const [plato, setPlato] = useState()
    useEffect(() => {
        // if (!user) navigation.navigate('Login')
        const fetchPlato = async() => setPlato(await useFetch(true, route.params.idPlato))
        fetchPlato()
    }, [])
    return (
        <Layout>
            <Plato {...plato} agregar />
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default PlatoScreen

