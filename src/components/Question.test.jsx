import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Question from './Question';

describe('<Question />', () => {
  it('renders Question div', () => {
    const data = {
      question: 'test',
      answers: [{ selected: 1, correct: 1, options: ['a', 'b'] }],
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
      answers: [{ selected: 1, correct: 1, options: ['a', 'b'] }],
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
    const toggle = wrapper.instance().toggle(0);
    beforeEach(() => {
      setStateMock.reset();
    });

    it('sets correct to be false if not all answers are correct', () => {
      toggle(0);
      expect(setStateMock.args[0][0].correct).to.equal(false);
    });

    it('sets correct to be true if all answers are correct', () => {
      toggle(1);
      expect(setStateMock.args[0][0].correct).to.equal(true);
    });
  });
});
