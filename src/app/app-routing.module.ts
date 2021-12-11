import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstLookComponent } from './first-look/first-look.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: FirstLookComponent },
  { path: 'yes', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
