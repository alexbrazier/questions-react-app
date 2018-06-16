import React from 'react';
import Question from './components/Question';
import Footer from './components/Footer';
import questions from './data/questions.json';
import './App.scss';

const question = Math.floor(Math.random() * questions.length);
const App = props => (
  <div className="App">
    <header>
      <h1 className="title">Questions</h1>
    </header>
    <section className="content">
      <Question {...questions[question]} />
    </section>
    <Footer />
  </div>
);

export default App;
