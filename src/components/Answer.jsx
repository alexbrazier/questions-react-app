import React from 'react';
import PropTypes from 'prop-types';
import './Answer.scss';

const Answer = props => (
  <div className="Answer">
    <div className="highlighted" style={{ left: props.selected ? '50%' : 0 }} />
    {props.options.map((option, i) => (
      <button
        key={i}
        data-answer={props.index}
        data-option={i}
        className={`${props.selected === i ? 'selected' : ''}`}
        onClick={props.toggle}
      >
        {option}
      </button>
    ))}
  </div>
);

Answer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Answer;
