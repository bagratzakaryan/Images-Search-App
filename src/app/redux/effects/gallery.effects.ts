import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { DataService } from '../../services/data.service';
import { galleryLoaded, loadGallery } from '../actions/gallery.actions';

@Injectable()
export class ImagesEffects {
    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(loadGallery),
        mergeMap((action: { value: string }) => {
            return this.dataService.getData(action.value)
                .pipe(
                    map(images => galleryLoaded(images)),
                    catchError(() => EMPTY)
                );
        })
    ));

    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) { }
}
