import React from 'react';
import PropTypes from 'prop-types';
import './Answer.scss';

const Answer = ({ options, selected, toggle }) => (
  <div className="Answer">
    <div className="highlighted" style={{ left: selected ? '50%' : 0 }} />
    {options.map((option, i) => (
      <button
        key={i}
        className={`${selected === i ? 'selected' : ''}`}
        onClick={() => toggle(i)}
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
};

export default Answer;
