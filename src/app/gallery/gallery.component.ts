import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

import { ImageModel, List } from '../models';
import { Store, select } from '@ngrx/store';
import { addList } from '../redux/actions/lists.actions';
import { addImage } from '../redux/actions/images.actions';
import { loadGallery } from '../redux/actions/gallery.actions';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {
    @ViewChild('search', {static: false}) search: ElementRef;

    gallery$: Observable<ImageModel[]>;
    lists$: Observable<List[]>;

    selectedImage: ImageModel;
    formData = new List(null, '', '');
    storedImages: ImageModel[];
    modalImgUrl = '';

    isFavoriteListHidden = true;
    isCreateListHidden = true;

    constructor(
        private store: Store<{ lists: List[], images: ImageModel[], gallery: ImageModel[] }>
    ) {
        this.lists$ = this.store.pipe(select('lists'));
        this.gallery$ = this.store.pipe(select('gallery'));
        this.store.pipe(select('images')).subscribe((images: ImageModel[]) => {
            this.storedImages = images;
        });
    }

    ngAfterViewInit() {
        fromEvent(this.search.nativeElement, 'keyup')
            .pipe(distinctUntilChanged())
            .pipe(debounceTime(1500))
            .subscribe((event: any): void => {
                this.store.dispatch(loadGallery({value: event.target.value}));
            });
    }

    getListImagesCount(listId: number): number {
        return this.storedImages.filter(el => el.listId === listId).length;
    }

    onOpenSaveToFavorite(image: ImageModel): void {
        this.selectedImage = {...image};
        this.isFavoriteListHidden = false;
    }
    onOpenCreatedList(): void {
        this.isCreateListHidden = false;
        this.isFavoriteListHidden = true;
    }
    onCreateList(): void {
        this.store.dispatch(addList(this.formData));
        this.formData = new List(0, '', '');
        this.isFavoriteListHidden = false;
        this.isCreateListHidden = true;
    }
    onSaveToFavorite(list: List): void {
        this.selectedImage.listId = list.id;
        this.store.dispatch(addImage(this.selectedImage));
    }
}
