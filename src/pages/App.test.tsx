import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';

describe(`<App />`, () => {
  const wrapper = shallow(<App />);
  it('1. 包含一个p标签', () => {
    expect(wrapper.find('p').length).toBe(1);
  });

  it('2. 一个header的class为App-header', () => {
    expect(wrapper.find('header').hasClass('App-header')).toBeTruthy();
  });

  it('3. header有3个子元素', () => {
    expect(wrapper.find('header').children().length).toBe(3);
  });
});

// 当希望确保UI不会意外更改时，则可以使用snapshot来进行对比，如果快照不匹配，则会报错
// describe(`测试<App />快照`, () => {
//   const tree = shallow(<App />);
//   it('1. 匹配快照', () => {
//     expect(toJson(tree)).toMatchSnapshot();
//   })
// })
