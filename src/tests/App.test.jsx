import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { App } from '../App';
import DonutChart from '../components/DonutChart';

const props = {
  risk: 10,
  slices: [10,20,3,2,5,60],
  onChange: sinon.spy(),
}

describe('tests for <App>', () => {
it('renders three <DonutChart /> components', () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find(DonutChart)).to.have.length(1);
  });

  it('simulates onChange events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <App onChange={onButtonClick} />
    );
    wrapper.find('input').simulate('change', { target: { value: props.risk }, preventDefault: () => { }});
    expect(onButtonClick.calledOnce).to.equal(true);
  });

})