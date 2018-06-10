import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import './Question.scss';

export default class Question extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      correct: PropTypes.number.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      selected: PropTypes.number.isRequired,
    })).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = props;
  }

  toggle = index => (selected) => {
    const answers = [...this.state.answers];
    answers[index].selected = selected;
    const correct = answers.every(a => a.selected === a.correct);
    this.setState({ answers, correct });
  }

  render() {
    return (
      <div className={`Question${this.state.correct ? ' correct' : ''}`}>
        <p className="question">{this.state.question}</p>
        {this.state.answers.map((answer, i) =>
          <Answer key={i} {...answer} toggle={this.toggle(i)} />)
        }
        <p className="result">The answer is {this.state.correct ? 'correct' : 'incorrect'}</p>
      </div>
    );
  }
}
