import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './user/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'login', 
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
