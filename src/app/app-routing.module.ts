import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    pathMatch:'full',
    loadChildren:()=> import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'about',
    loadChildren:()=> import('./pages/about/about.module').then(m=> m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m=> m.ContactModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
