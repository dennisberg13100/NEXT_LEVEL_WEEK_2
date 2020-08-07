import React from 'react';
import { NavigationContainer }from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen} = createStackNavigator();

import Landing from '../pages/Landing';
import GiveClases from '../pages/GiveCLasses';
import StudyTabs from './StudyTabs';

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={ Landing } />
                <Screen name="GiveClasses" component={ GiveClases } />
                <Screen name="StudyTabs" component={ StudyTabs } />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;