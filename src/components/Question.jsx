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
    this.state = {
      selected: props.answers.map(a => a.selected),
    };
  }

  toggle = (e) => {
    const { option, answer } = e.target.dataset;
    const selected = [...this.state.selected];
    selected[Number(answer)] = Number(option);
    const correct = this.props.answers.every((a, i) => selected[i] === a.correct);
    this.setState({ selected, correct });
  }

  render() {
    return (
      <div className={`Question${this.state.correct ? ' correct' : ''}`}>
        <p className="question">{this.props.question}</p>
        {this.props.answers.map((answer, i) => (
          <Answer
            key={i}
            index={i}
            options={answer.options}
            selected={this.state.selected[i]}
            toggle={this.toggle}
          />
        ))}
        <p className="result">The answer is {this.state.correct ? 'correct' : 'incorrect'}</p>
      </div>
    );
  }
}
