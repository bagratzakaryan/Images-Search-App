import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { listsReducer } from './redux/reducers/lists.reducer';
import { imagesReducer } from './redux/reducers/images.reducer';
import { ImagesEffects } from './redux/effects/gallery.effects';
import { galleryReducer } from './redux/reducers/gallery.reducer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({
            lists: listsReducer,
            images: imagesReducer,
            gallery: galleryReducer
        }),
        EffectsModule.forRoot([ImagesEffects])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
