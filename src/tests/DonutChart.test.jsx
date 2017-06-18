import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { mount } from 'enzyme';
chai.use(chaiEnzyme());
import DonutChart from '../components/DonutChart';

const props = {
  slices: [10,20,3,2,5,60],
  risk: 10,
}

describe('tests for <DonutChart> ', () => {
  it('should render one figure', () => {
    const wrapper = shallow(<DonutChart {...props} />);
    expect(wrapper.find('figure').length).to.equal(1);
  });
})
