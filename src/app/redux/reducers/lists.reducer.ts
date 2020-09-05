import { createReducer, on } from '@ngrx/store';
import { addList, editList } from '../actions/lists.actions';
import { List } from 'src/app/models';

export const initialState: List[] = getState();

export const listsReducer = createReducer(
    initialState,
    on(addList, (state: List[], action: List): List[] => {
        const newState = [...state, {
            ...action,
            id: !state.length ? 0 : state[state.length - 1].id + 1
        }];
        setState(newState);
        return newState;
    }),
    on(editList, (state: List[], action: List) => {
        const oldStateIndex = state.findIndex(el => el.id === action.id);
        const newState = [...state];
        newState[oldStateIndex] = action;
        setState(newState);
        return newState;
    }),
);

function getState(): List[] {
    return JSON.parse(localStorage.getItem('lists')) as List[] || [];
}

function setState(state: List[]): void {
    localStorage.setItem('lists', JSON.stringify(state));
}
