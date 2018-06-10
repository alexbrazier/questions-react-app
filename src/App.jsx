import React from 'react';
import Question from './components/Question';
import Footer from './components/Footer';
import questions from './data/questions.json';
import './App.scss';

const App = props => (
  <div className="App">
    <header>
      <h1 className="title">Questions</h1>
    </header>
    <section className="content">
      <Question {...questions[0]} />
    </section>
    <Footer />
  </div>
);

export default App;
