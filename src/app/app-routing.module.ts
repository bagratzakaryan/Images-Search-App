import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// route config
const routes: Routes = [{
        path: 'favorite',
        loadChildren: () => import('./favorite/favorite.module').then(m => m.FavoriteModule)
    }, {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
    }, {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
