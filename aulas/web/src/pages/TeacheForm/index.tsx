import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';
import Textarea from '../../components/textarea';
import Select from '../../components/select';
import api from '../../services/api';

import './style.css';
import warningIcon from '../../assets/images/icons/warning.svg';



function TeacherForm() {

    const history = useHistory();

    const [ name, setName ] = useState('');
    const [ avatar, setAvatar ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ bio, setBio ] = useState('');

    const [ subject, setSubject ] = useState('');
    const [ cost, setCost ] = useState('');

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        console.log({
            name, 
            avatar,
            whatsapp,
            bio, 
            subject,
            cost, 
            scheduleItems
        })
        
        api.post('classes', {
            name, 
            avatar,
            whatsapp,
            bio, 
            subject, 
            cost: Number(cost), 
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!')
            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!')
        })
    }


    const [scheduleItems, setScheduleItems] = useState([
        {week_day:0, from: "", to:"" },
    ])

    function addNewcheduleItem(){
        setScheduleItems([
            ...scheduleItems, 
            {week_day:0, from:"", to:""
            }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if( index === position ){
                return { ...scheduleItem, [field]: value};
            }

            return scheduleItem;
        });
        setScheduleItems(updatedScheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container">

            <PageHeader title="Que incrível que você quer dar aulas."
                        description="O primeiro passo é preencher este formulário de inscrição."
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados:</legend>

                        <Input  name="name" 
                                label="Nome Completo" 
                                value={name} 
                                onChange={(e) => {setName(e.target.value)}} 
                        />
                        <Input  name="avatar" 
                                label="Avatar"
                                value={avatar}
                                onChange={(e) => {setAvatar(e.target.value)}}
                        />
                        <Input  name="whatsapp" 
                                label="Whatsapp"
                                value={whatsapp}
                                onChange={(e) => {setWhatsapp(e.target.value)}}
                        />
                        <Textarea   name="bio" 
                                    label="Biografia"
                                    value={bio}
                                    onChange={(e) => {setBio(e.target.value)}}
                        />
                    
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula:</legend>

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
                        <Input  name="cost" 
                                label="Custo da sua hora por aula"
                                value={cost}
                                onChange={(e) => {setCost(e.target.value)}}
                        />
                    
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewcheduleItem}>
                                + Novo horário
                            </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return(
                                <div key={ scheduleItem.week_day }  className="schedule-item">
                                    <Select name="week_day" 
                                        label="Dia da semana" 
                                        value={scheduleItem.week_day}
                                        onChange={(e) => {setScheduleItemValue(index, "week_day", e.target.value)}}
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
                                    <Input  name="from" 
                                            label="Das"
                                            value={scheduleItem.from}
                                            onChange={(e) => {setScheduleItemValue(index, "from", e.target.value)}} 
                                            type="time"
                                    />
                                    <Input  name="to" 
                                            label="Até" 
                                            value={scheduleItem.to}
                                            onChange={(e) => {setScheduleItemValue(index, "to", e.target.value)}}
                                            type="time"
                                    />
                                </div>
                            );
                        })}
                        
                    </fieldset>

                    <footer>
                        <p>
                            <img src={ warningIcon } alt="Atenção"/>
                            Importante!<br/>
                            preencha todos os dados.
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
        
    )    
}

export default TeacherForm;