import { createAction, props } from '@ngrx/store';
import { List } from 'src/app/models';

export const addList = createAction(
    '[Lists] Add',
    props<List>()
);
export const editList = createAction(
    '[Lists] Edit',
    props<List>()
);
