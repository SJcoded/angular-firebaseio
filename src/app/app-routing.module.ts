import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstLookComponent } from './first-look/first-look.component';
import { HomeComponent } from './home/home.component';
import { SiblingComponent } from './sibling/sibling.component';

const routes: Routes = [
  { path: '', component: FirstLookComponent },
  { path: 'yes', component: HomeComponent },
  { path: 'no', component: SiblingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
