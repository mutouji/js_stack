/* eslint-env browser */
/**
 * Created by mutouji on 2018/1/24.
 */
// import 'babel-polyfill';
//
// import React, { PropTypes } from 'react';
// import ReactDOM from 'react-dom';
// import Dog from '../shared/dog';
//
// const dogBark = new Dog('Browser Toby').bark();
//
// const App = props => (
//   <div>
//     The dog says: {props.message}
//   </div>
// );
//
// App.propTypes = {
//   message: PropTypes.string.isRequired,
// };
//
// ReactDOM.render(<App message={dogBark} />, document.querySelector('.app'));
// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import dogReducer from './reducers/dog-reducer';
import BarkMessage from './containers/bark-message';
import BarkButton from './containers/bark-button';
// import Dog from '../shared/dog';
//
// const dogBark = new Dog('Browser Toby').bark();
//
// const App = props => (
//   <div>
//     The dog says: {props.message}
//   </div>
// );
//
// App.propTypes = {
//   message: PropTypes.string.isRequired,
// };
//
// ReactDOM.render(<App message={dogBark} />, document.querySelector('.app'));

//------------------------------------------------------------------------
// Store对象包含所有数据

// Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置, 可参考https://github.com/acdlite/flux-standard-action
// An action MUST
//
// be a plain JavaScript object.
//   have a type property.
//   An action MAY
//
// have an error property.
//   have a payload property.
//   have a meta property.----------------------value
//---
//   An action MUST NOT include properties other than type, payload, error, and meta.
// const action = {
//   type: 'ADD_TODO',
//   payload: 'Learn Redux'
// };
// Action Creator is a function for how to create a state

// store.dispatch()是 View 发出 Action 的唯一方法

// Reducer is an function, a pure function ==> one state ---- one fixed out
// 1. don't mod param
// 2. no i/0
// 3. no Date.now(). Math.random()
// param: action, oldstate,
// return: new state
// store.dispatch方法会触发 Reducer 的自动执行
// 为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法

// Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数
// const store = createStore(reducer);
// store.subscribe(listener); --> 更新view

const store = createStore(combineReducers({
  dog: dogReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BarkMessage/>
      <BarkButton/>
    </div>
  </Provider>
  , document.querySelector('.app')
);
