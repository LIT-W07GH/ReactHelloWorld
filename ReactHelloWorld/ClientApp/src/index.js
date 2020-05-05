/*
//import writeWithStars, { writeInReverse, add } from './my-module';

//writeWithStars('hello modules!');

//writeInReverse('hello world!');

//console.log(add(10, 50))
*/

import React from 'react';
import ReactDom from 'react-dom';
import MyComponent from './MyComponent';

ReactDom.render(<MyComponent />, document.getElementById('root'));
