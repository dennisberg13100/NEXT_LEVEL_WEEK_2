import React, { useState } from 'react';
import { View, ScrollView, Text} from 'react-native';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';




function TeacherList() {
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const [ teachers, setTeachers ] = useState([]);
    const [ favorites, setFavorites ] = useState<number[]>([]);
    const [ subject, setSubject ] = useState('');
    const [ week_day, setweek_day ] = useState('');
    const [ time, setTime ] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                });
                setFavorites(favoritedTeachersId);
            }
        });
    }

    function toggleFilter() {
        setIsFilterVisible(!isFilterVisible);
    }

    async function handleFilterSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        console.log(response.data);
        setIsFilterVisible(false);
        setTeachers(response.data);     
    }

    return (
    <View style={styles.container}>
        <PageHeader title="Proffys disponíveis" 
                    headerRight={(
                        <BorderlessButton onPress={toggleFilter}>
                            <Feather name="filter" size={20} color='#fff' />
                        </BorderlessButton>
                    )}>
            
            {isFilterVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput  style={styles.input}
                                placeholder="Qual a matéria?"
                                placeholderTextColor="#c1bcc1"
                                value={subject}
                                onChangeText={text => setSubject(text)}
                    />
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da Semana</Text>
                            <TextInput  style={styles.input}
                                        placeholder="Qual o dia?"
                                        placeholderTextColor="#c1bcc1"
                                        value={week_day}
                                        onChangeText={text => setweek_day(text)}
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput  style={styles.input}
                                        placeholder="Que horas?"
                                        placeholderTextColor="#c1bcc1"
                                        alue={time}
                                        onChangeText={text => setTime(text)}
                            />
                        </View>
                    </View>
                    <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
                        <Text style={styles.submitText}>Filtrar</Text>
                    </RectButton>
                </View>
            )}
            
        </PageHeader>
        <ScrollView style={styles.teacherList}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingBottom: 24
                    }}
                    >
            {teachers.map((teacher: Teacher) => {
                return (<TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />) }
            )}
        </ScrollView>
    </View>);
};

export default TeacherList;