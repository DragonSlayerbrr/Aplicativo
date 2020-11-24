import React, { Component } from 'react'
import { createAppContainer, createStackNavigator} from 'react-navigation';

import Login from './Login';
import Home from './Home';

const MainNav = createStackNavigator (
{
    Login:{
        screen: Home,
        navigationOptions:{
            header: null
        }
    },
    Home:{
        screen: Home,
        navigationOptions:{
            headerTitle:'Home'
        }
    }
})

export default createAppContainer(MainNav);