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

  /**
   * Get background colour of question box based on how correct
   * @param {number} correct Number of correct answers
   * @param {number} total Total number of answers
   */
  static backgroundColour(correct, total) {
    if (correct === total) {
      return 'linear-gradient(to bottom, rgba(71, 228, 193), rgba(71, 205, 221))';
    }
    const greenMin = [145, 59];
    const greenRange = [85, 151];
    const ratio = correct / total;
    const green = greenMin.map((g, i) => Math.floor(g + greenRange[i] * ratio));
    return `linear-gradient(to bottom, rgba(250, ${green[0]}, 97), rgba(247, ${green[1]}, 28))`;
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
    this.setState({ selected });
  }

  render() {
    const { selected } = this.state;
    const numberCorrect = this.props.answers.filter((a, i) => selected[i] === a.correct).length;
    const correct = numberCorrect === this.props.answers.length;
    const background = Question.backgroundColour(numberCorrect, this.props.answers.length);
    return (
      <div className={`Question${correct ? ' correct' : ''}`} style={{ background }}>
        <p className="question">{this.props.question}</p>
        {this.props.answers.map((answer, i) => (
          <Answer
            key={i}
            index={i}
            options={answer.options}
            selected={selected[i]}
            toggle={this.toggle}
          />
        ))}
        <p className="result">The answer is {correct ? 'correct' : 'incorrect'}</p>
      </div>
    );
  }
}
