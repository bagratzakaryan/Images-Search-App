import { Component } from '@angular/core';

// model, service
import { DataService } from '../services/data.service';
import { List, ImageModel } from '../models';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { editList } from '../redux/actions/lists.actions';

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
    lists$: Observable<List[]>;
    images$: Observable<ImageModel[]>;

    constructor(
        private dataService: DataService,
        private store: Store<{ lists: List[], images: ImageModel[] }>
    ) {
        this.lists$ = this.store.pipe(select('lists'))
        this.images$ = this.store.pipe(select('images'));
    }

    onDownloadImg(url: string, name: string): void {
        this.dataService.download(url).subscribe((blob: {size: number, type: string}) => {
            const a = document.createElement('a');
            const objectUrl = URL.createObjectURL(blob);
            a.href = objectUrl;
            a.download = `photo_${name}`;
            a.click();
            URL.revokeObjectURL(objectUrl);
        });
    }
    onNameChange(event: Event, list: List): void {
        const newList = Object.assign({}, list);
        newList.name = (event.target as HTMLElement).innerText;
        this.store.dispatch(editList(newList));
    }
    onDescriptionChange(event: Event, list: List): void {
        const newList = Object.assign({}, list);
        newList.description = (event.target as HTMLElement).innerText;
        this.store.dispatch(editList(newList));
    }
}
