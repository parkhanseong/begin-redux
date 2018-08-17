import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'container/INCREMENT';
const DECREMENT = 'container/DECREMENT';
const DOUBLE_INCRE = 'container/DOUBLE_INCRE';
const DOUBLE_DECRE = 'container/DOUBLE_DECRE';
const ZERO = 'container/ZERO';

export const increment_ = createAction(INCREMENT);
export const double_incre = createAction(DOUBLE_INCRE);
export const decrement_ = createAction(DECREMENT);
export const double_decre = createAction(DOUBLE_DECRE);
export const zero = createAction(ZERO);

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
    [DECREMENT]: ({number}) => ({number: number-1}),
    [DOUBLE_INCRE]: ( { number} ) => ( { number: number * 2 } ),
    [DOUBLE_DECRE]: ( { number} ) => ( { number: number / 2 } ),
    [ZERO]: ( { number} ) => ( { number: 0 } )
}, initialState);