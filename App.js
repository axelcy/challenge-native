import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import PlatoScreen from './src/screens/PlatoScreen';
import Menu from './src/screens/Menu';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}
          options={() => ({
            title: "Login",
            headerStyle: {
              backgroundColor: 'lightblue'
            }
          })}
        />
        <Stack.Screen name='Home' component={Home}
          options={({navigation}) => ({
            title: "Home",
            headerStyle: {
              backgroundColor: 'lightcoral'
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.headerRight}>Ir a Login</Text>
              </TouchableOpacity>
            )
        })} />
        <Stack.Screen name='Plato' component={PlatoScreen}
          options={() => ({
            title: "Plato",
            headerStyle: {
              backgroundColor: 'lightgreen'
            }
          })}
        />
        <Stack.Screen name='Menu' component={Menu}
          options={() => ({
            title: "Menu",
            headerStyle: {
              backgroundColor: 'peru'
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
