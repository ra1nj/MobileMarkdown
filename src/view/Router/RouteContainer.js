import React from 'react';
import {NavigationContainer} from '@react-navigation/native/'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import LiveEditor from '../Screens/LiveEditor';


const Stack = createStackNavigator()

export default function RouteContainer (){
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    animationEnabled:true,
                }}
            >
                <Stack.Screen name={'Home'} component={Home}/>
                <Stack.Screen name={'LiveEditor'} component={LiveEditor}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
