import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CameraView } from '../Components/CameraView';
import { Settings } from '../Components/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QrCode } from 'lucide-react-native';

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
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen 
          name="Camera" 
          component={CameraView} 
          options={{
            tabBarLabel: 'Scan',
          //   tabBarIcon: ({ color, size }) => (
          //     <QrCode />
          //   ),
           }}/>
        <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    )
}