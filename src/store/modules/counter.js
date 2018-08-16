import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'container/INCREMENT';
const DECREMENT = 'container/DECREMENT';

export const increment_ = createAction(INCREMENT);
export const decrement_ = createAction(DECREMENT);

const initialState = {
    number: 0
};

export default handleActions({
    [INCREMENT]: ({number}) => {
        return { number: number + 1 };
    },
    // [INCREMENT]: (state, action) => {
    //     return { number: state.number + 1 };
    // },
    [DECREMENT]: ({number}) => ({number: number-1})
}, initialState);