import React from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';


function TeacherItemGui() {
    return (
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars1.githubusercontent.com/u/68932016?s=460&u=42406349cc5f3240d4955e8ffa7e7078e8f991ee&v=4"
              alt="Guilherme Panassol"
            />
            <div>
              <strong>Guilherme Panassol</strong>
              <span>Química</span>
            </div>
          </header>
          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br></br>
            <br></br>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das
            pessoas através de experiências. Mais de 200.000 pessoas já passaram
            por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
    );
}

export default TeacherItemGui;