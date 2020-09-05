import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery.component';
import { ModalComponent } from './modal/modal.component';

// route config
const routes: Routes = [{ path: '', component: GalleryComponent }];

@NgModule({
    declarations: [
        GalleryComponent,
        ModalComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule
    ],
    providers: [],
})
export class GalleryModule { }
