import { createReducer, on } from '@ngrx/store';
import { galleryLoaded } from '../actions/gallery.actions';
import { ImageModel } from 'src/app/models';

export const initialState: ImageModel[] = [];

export const galleryReducer = createReducer(
    initialState,
    on(galleryLoaded, (_: ImageModel[], action: any): ImageModel[] => {
        const newAction = { ...action };
        delete newAction.type;
        return Object.values(newAction) as ImageModel[];
    })
);
