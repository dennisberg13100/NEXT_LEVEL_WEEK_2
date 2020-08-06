import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItems, { Teacher }from '../../components/TeacherItems';
import Input from '../../components/input';
import Select from '../../components/select';
import api from '../../services/api';

import './style.css'; 

function TeacherList() {

    const [ teachers, setTeachers ] = useState([]);

    const [ subject, setSubject ] = useState('');
    const [ week_day, setWeek_day ] = useState('');
    const [ time, setTime ] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time
            }
        })
        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers} >
                    <Select name="subject" 
                            label="Matéria" 
                            value={subject}
                            onChange={(e) => {setSubject(e.target.value)}}
                            options={[
                                {value: "Artes", label:"Artes"},
                                {value: "Ciências", label:"Ciências"},
                                {value: "Biologia", label:"Biologia"},
                                {value: "Educação Física", label:"Educação Física"},
                                {value: "Matemática", label:"Matemática"},
                                {value: "Física", label:"Física"},
                                {value: "História", label:"História"},
                                {value: "Geografia", label:"Geografia"},
                                {value: "Religião", label:"Religião"},
                                {value: "Informática", label:"Informática"},
                                {value: "Portufês", label:"Portufês"},
                                {value: "Química", label:"Química"},
                                {value: "Inglês", label:"Inglês"},
                            ]}
                    />
                    <Select name="week_day" 
                            label="Dia da semana" 
                            value={week_day}
                            onChange={(e) => {setWeek_day(e.target.value)}}
                            options={[
                                {value: "0", label:"Domingo"},
                                {value: "1", label:"Segunda-feira"},
                                {value: "2", label:"Terça-feira"},
                                {value: "3", label:"Quarta-feira"},
                                {value: "4", label:"Quinta-feira"},
                                {value: "5", label:"Sexta-feira"},
                                {value: "6", label:"Sábado"},
                            ]}
                    />
                    <Input  type="time" 
                            name="time" 
                            value={time} 
                            onChange={(e) => {setTime(e.target.value)}} 
                            label="Horário" 
                    />
                    <button type='submit'>
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher:Teacher) => {
                    return <TeacherItems key={ teacher.id } teacher={teacher}/>
                })}
            </main>
        </div>
    )    
}

export default TeacherList;