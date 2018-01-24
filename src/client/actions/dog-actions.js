/**
 * Created by mutouji on 2018/1/24.
 */
import { createAction } from 'redux-actions';

export const MAKE_BARK = 'MAKE_BARK';

// action : is an object. type: is message type. payload: is value to change.
// const action = {
//   type: 'ADD_TODO',
//   payload: 'Learn Redux'
// };

// Action Creator is a function for how to create a state
// export const makeBark = () => ({
//   type: MAKE_BARK,
//   payload: true,
// });
export const makeBark = createAction(MAKE_BARK, () => true);
