import { createReducer, on } from '@ngrx/store';
import { addImage } from '../actions/images.actions';
import { ImageModel } from 'src/app/models';

export const initialState: ImageModel[] = getState();

export const imagesReducer = createReducer(
    initialState,
    on(addImage, (state: ImageModel[], action: ImageModel): ImageModel[] => {
        const isExists = state.find(el => el.imageUrl === action.imageUrl);
        const newState = isExists ? state.filter(el => el.imageUrl !== action.imageUrl) : [...state, {
            ...action,
            id: !state.length ? 0 : state[state.length - 1].id + 1
        }];
        setState(newState);
        return newState;
    })
);

function getState(): ImageModel[] {
    return JSON.parse(localStorage.getItem('images')) as ImageModel[] || [];
}

function setState(state: ImageModel[]): void {
    localStorage.setItem('images', JSON.stringify(state));
}
