import * as types from './types';

export const addTodo = text => ({
    type: types.ADD_TODO,
    text
})