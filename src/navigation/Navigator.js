import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from '../screen/stack/Screen1';
import Screen2 from '../screen/stack/Screen2';


const Stack=createStackNavigator();
const Navigator = () => {
  return (
   <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name='Sreenone' component={Screen1}/>
    <Stack.Screen name='Screentwo' component={Screen2}/>
   </Stack.Navigator>

   </NavigationContainer>
  )
}

export default Navigator