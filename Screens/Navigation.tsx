import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CameraView } from '../Components/CameraView';
import { Settings } from '../Components/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export const Navigation = ():JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomTabs} />
    </Stack.Navigator>
  )
}

const BottomTabs = ():JSX.Element => {
    return(
    <Tab.Navigator>
        <Tab.Screen name="Camera" component={CameraView} />
        <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    )
}