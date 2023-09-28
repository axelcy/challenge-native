import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Layout from '../components/Layout';
import Plato from '../components/Plato';
import useFetch from '../hooks/useFetch';

const Menu = () => {

    return (
        <Layout>
            <Text>Menu</Text>
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

export default Menu

