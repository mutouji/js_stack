/**
 * Created by mutouji on 2018/1/24.
 */
import Immutable from 'immutable';
import { MAKE_BARK } from '../actions/dog-actions';

const initialState = Immutable.Map({
  hasBarked: false,
});

// Reducer is an function, a pure function ==> one state ---- one fixed out
// 1. don't mod param
// 2. no i/0
// 3. no Date.now(). Math.random()
// param: action, oldstate,
// return: new state
// store.dispatch方法会触发 Reducer 的自动执行
// 为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_BARK:
      // { hasBarked: action.payload };
      return state.set('hasBarked', action.payload);
    default:
      return state;
  }
};

export default dogReducer;
