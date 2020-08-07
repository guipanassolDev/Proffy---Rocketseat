import React from "react";

import PageHeader from "../../components/PageHeader";
import "./styles.css";
import TeacherItem from "../../components/TeacherItem";
import TeacherItemTwo from "../../components/TeacherItemTwo";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"></input>
          </div>

          <div className="input-block">
            <label htmlFor="word_day">Dia da Semana</label>
            <input type="text" id="work_day"></input>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"></input>
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItemTwo />
        <TeacherItem />
        <TeacherItemTwo />
      </main>
    </div>
  );
}

export default TeacherList;
