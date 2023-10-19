import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import Layout from '../components/Layout';
import Plato from '../components/Plato';
import useFetch from '../hooks/useFetch';
import UserContext from '../context/UserContext';
import MenuContext from '../context/MenuContext';

const Menu = () => {
    const { user } = useContext(UserContext)
    const { menu } = useContext(MenuContext)

    useEffect(() => {
        // if (!user) navigation.navigate('Login')
    })
    return (
        <Layout>
            <Text>Menu</Text>
            {/* <Text>{JSON.stringify(menu)}</Text> */}
            <ScrollView style={{ flex: 1 }}>
                <FlatList
                    nestedScrollEnabled={true}
                    contentContainerStyle={styles.listaPlatos}
                    data={menu}
                    renderItem={({ item }) => <Plato {...item} />}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
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
    listaPlatos: {
        flex: 1,
        alignItems: 'center',
        gap: 20,
        width: '100%',
        height: '100%',
    },
    textInput: {
        height: 40, 
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1, 
        width: '100%', 
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})

export default Menu

