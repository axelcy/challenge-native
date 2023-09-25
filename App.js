import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={Home}
          options={({navigation}) => ({
            title: "HomeScreen",
            headerStyle: {
              backgroundColor: 'lightcoral'
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.headerRight}>Ir a Login</Text>
              </TouchableOpacity>
            )
        })} />
        <Stack.Screen name='LoginScreen' component={Login}
          options={() => ({
            title: "LoginScreen",
            headerStyle: {
              backgroundColor: 'lightblue'
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  headerRight: {
    padding: 10,
  }
})
