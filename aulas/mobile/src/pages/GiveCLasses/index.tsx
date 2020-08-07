import React from 'react';
import { View , ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import giveClassesBackground from '../../assets/images/give-classes-background.png';

import styles from './styles.ts';


function GiveClasses() {
    const { goBack } = useNavigation();

    function hanldeNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground    resizeMode="contain" 
                                source={giveClassesBackground}  
                                style={styles.content}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você deve se cadastrar em nossa plataforma web. 
                </Text>
            </ImageBackground>
            <RectButton onPress={hanldeNavigateBack} style={styles.button}>
                <Text style={styles.buttonText}>Tudo Bem?</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;