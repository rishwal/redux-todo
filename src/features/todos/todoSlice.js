import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import sub from "date-fns/sub";
import { startOfSecond } from "date-fns";

const initialState = [
    {
        id: nanoid(),
        todo: 'Learn Redux Toolkit',
        date: '2023-12-12',
        check: true,

    },
    {
        id: nanoid(),
        todo: 'Learn Data Structure',
        date: '2023-10-19',
        check: false,

    },
    {
        id: nanoid(),
        todo: 'Clean the house',
        date: '2023-10-20',
        check: false,

    },
    {
        id: nanoid(),
        todo: 'Learn how to swim',
        date: '2024-10-10',
        check: false,

    },
    {
        id: nanoid(),
        todo: 'Learn ML',
        date: '2025-12-10',
        check: false,

    },
    {
        id: nanoid(),
        todo: 'Buy a car',
        date: '2026-05-01',
        check: false,

    },
]


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {

            prepare(todo, date) {
                return {
                    payload: {
                        id: nanoid(),
                        todo,
                        date,
                        check: false,
                
                    }
                }
            },

            reducer(state, action) {
                state.unshift(action.payload)
            }
        },

        removeTodo: {

            reducer(state, action) {
                return state.filter(todo => todo.id !== action.payload);
            }

        },

        updateTodo: {
            reducer(state, action) {
                const { id, updatedTodo, updatedDate } = action.payload;
                const currentTodo = state.find(todo => todo.id == id);
                currentTodo.todo = updatedTodo;
                currentTodo.date = updatedDate
            }
        },

        updateCheck: {
            reducer(state, action) {
                const { id, check } = action.payload;
                const currentTodo = state.find(todo => todo.id === id);
                currentTodo.check = check;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo, updateCheck } = todoSlice.actions;

export default todoSlice.reducer;
