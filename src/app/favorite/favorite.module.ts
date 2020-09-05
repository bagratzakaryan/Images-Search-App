import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite.component';

// route config
const routes: Routes = [{ path: '', component: FavoriteComponent }];

@NgModule({
    declarations: [
        FavoriteComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class FavoriteModule { }
