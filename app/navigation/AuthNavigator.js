import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AccountScreen from '../screens/AccountScreen';
import TabNavigator from './TabNavigator';
import MoreInfo from '../screens/MoreInfo';


const AppStack = createStackNavigator();

const AuthNavigator = () => (                                                   
    <AppStack.Navigator>
        <AppStack.Screen name ="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name ="Login" component={LoginScreen} options={{headerShown:false}}/> 
        <AppStack.Screen name ="Register" component={RegisterScreen} options={{headerShown:false}}/>  
        <AppStack.Screen name ="Account" component={TabNavigator} options={{headerShown:false}}/>  
        <AppStack.Screen name ="MoreInfo" component={MoreInfo} options={{headerShown:false}}/>  
    </AppStack.Navigator>                                                                           
)

export default AuthNavigator;