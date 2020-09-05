import { createAction, props } from '@ngrx/store';
import { ImageModel } from 'src/app/models';

export const loadGallery = createAction(
    '[Gallery] Load',
    props<{ value: string }>()
);

export const galleryLoaded = createAction(
    '[Gallery] Laoded',
    props<ImageModel>()
);
