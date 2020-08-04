import React from 'react';
import './style.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItems() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/45788831?s=460&u=1226e7e1929b116cba979cba6994d10a06eb6e3d&v=4" alt="Dennis van den Berg"/>
                <div>
                    <strong>Dennis van den Berg</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores técnologias de Química avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>
            <footer>
                <p>
                    preço/hora<strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>                        
        </article>
    );
}

export default TeacherItems;