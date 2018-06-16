import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Question from './Question';

describe('<Question />', () => {
  it('renders Question div', () => {
    const data = {
      question: 'test',
      answers: [{ selected: 0, correct: 1, options: ['a', 'b'] }],
    };
    const wrapper = shallow(<Question {...data} />);
    expect(wrapper.find('.Question')).to.have.length(1);
    expect(wrapper.find('.Question.correct')).to.have.length(0);
  });

  it('renders Question with correct class if correct', () => {
    const data = {
      correct: true,
      question: 'test',
      answers: [{ selected: 1, correct: 1, options: ['a', 'b'] }],
    };
    const wrapper = shallow(<Question {...data} />);
    expect(wrapper.find('.Question')).to.have.length(1);
    expect(wrapper.find('.Question.correct')).to.have.length(1);
  });

  it('renders question', () => {
    const data = {
      question: 'test',
      answers: [{ selected: 1, correct: 1, options: ['a', 'b'] }],
    };
    const wrapper = shallow(<Question {...data} />);
    expect(wrapper.find('.question').first().text()).to.equal('test');
  });

  it('renders answers', () => {
    const data = {
      question: 'test',
      answers: [{ selected: 1, correct: 1, options: ['a', 'b'] }, { selected: 0, correct: 1, options: ['a', 'b'] }],
    };
    const wrapper = shallow(<Question {...data} />);
    expect(wrapper.find('Answer')).to.have.length(2);
    expect(wrapper.find('Answer').at(0).props().selected).to.equal(1);
    expect(wrapper.find('Answer').at(1).props().selected).to.equal(0);
  });

  it('renders incorrect if wrong answer', () => {
    const data = {
      question: 'test',
      answers: [{ selected: 0, correct: 1, options: ['a', 'b'] }],
    };
    const wrapper = shallow(<Question {...data} />);
    expect(wrapper.find('.result').first().text()).to.equal('The answer is incorrect');
  });

  it('renders correct if right answer', () => {
    const data = {
      correct: true,
      question: 'test',
      answers: [{ selected: 1, correct: 1, options: ['a', 'b'] }],
    };
    const wrapper = shallow(<Question {...data} />);
    expect(wrapper.find('.result').first().text()).to.equal('The answer is correct');
  });

  describe('toggle', () => {
    const data = {
      question: 'test',
      answers: [{ selected: 1, correct: 1, options: ['a', 'b'] }],
    };
    const wrapper = shallow(<Question {...data} />);
    const setStateMock = sinon.stub();
    wrapper.instance().setState = setStateMock;
    const { toggle } = wrapper.instance();
    beforeEach(() => {
      setStateMock.reset();
    });

    it('sets selected to selected answer if 0', () => {
      const fakeEvent = {
        target: {
          dataset: { option: 0, answer: 0 },
        },
      };
      toggle(fakeEvent);

      expect(setStateMock.args[0][0].selected[0]).to.equal(0);
    });

    it('sets selected to selected answer if 1', () => {
      const fakeEvent = {
        target: {
          dataset: { option: 0, answer: 1 },
        },
      };
      toggle(fakeEvent);
      expect(setStateMock.args[0][0].selected[0]).to.equal(1);
    });
  });

  describe('backgroundColour', () => {
    it('should return correct background colour when all correct', () => {
      const result = Question.backgroundColour(3, 3);
      expect(result).to.equal('linear-gradient(to bottom, rgba(71, 228, 193), rgba(71, 205, 221))');
    });

    it('should return correct background colour if all wrong', () => {
      const result = Question.backgroundColour(0, 3);
      expect(result).to.equal('linear-gradient(to bottom, rgba(250, 145, 97), rgba(247, 59, 28))');
    });

    it('should return correct background colour if 1/3 right', () => {
      const result = Question.backgroundColour(1, 3);
      expect(result).to.equal('linear-gradient(to bottom, rgba(250, 173, 97), rgba(247, 109, 28))');
    });

    it('should return correct background colour if 2/3 right', () => {
      const result = Question.backgroundColour(2, 3);
      expect(result).to.equal('linear-gradient(to bottom, rgba(250, 201, 97), rgba(247, 159, 28))');
    });

    it('should return correct background colour if 2/4 right', () => {
      const result = Question.backgroundColour(2, 4);
      expect(result).to.equal('linear-gradient(to bottom, rgba(250, 187, 97), rgba(247, 134, 28))');
    });
  });
});
