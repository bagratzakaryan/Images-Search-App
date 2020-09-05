import { Injectable } from '@angular/core';

// helper service
import { ImageModel } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    accessKey = 'sic1qX7VlNVVDDuJUYjcFUrTqul6EMU8v2_-QUyUe2s';

    constructor(private http: HttpClient) { }

    download(url: string): Observable<Blob> {
        return this.http.get(`${url}?client_id=${this.accessKey}`, { responseType: 'blob' });
    }

    getData(value: string) {
        return this.http.get<any>(`https://api.unsplash.com/search/photos/?query=${value}&client_id=${this.accessKey}`)
            .pipe(map((data: any) => {
                return data.results.map((v: any) => {
                    return new ImageModel(v.id, null, v.user.name, v.alt_description, v.user.links.html, v.urls.small);
                });
            }));
    }
}
