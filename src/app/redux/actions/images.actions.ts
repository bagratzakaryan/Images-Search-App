import { createAction, props } from '@ngrx/store';
import { ImageModel } from 'src/app/models';

export const addImage = createAction(
    '[Images] Add',
    props<ImageModel>()
);
