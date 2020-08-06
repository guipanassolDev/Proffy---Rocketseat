import React from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import imgProf from '../../assets/images/imgrochely.png';

import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
          <header>
            <img
              src={imgProf}
              alt="Rochely Mews"
            />
            <div>
              <strong>Rochely Mews</strong>
              <span>Educação Montessoriana</span>
            </div>
          </header>
          <p>
            Sou a Prof. Rochely, uma Guia de conhecimento que desde pequena descobriu na educação o seu encanto de vida!
            <br></br>
            <br></br>
            Minha paixão pela metodologia Montessoriana e demais conceitos construtivistas nasceram a 4 anos e desde então soube que queria aprender e aplicar em minhas vivências com os Educandos os ensinamentos propostos por Maria Montessori: liberdade, independência e responsabilidade.
            Caminho lado a lado nos estudos com “Meus Pequenos” para que criem o prazer pelo conhecimento e por cultura. 
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

export default TeacherItem;