import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { FormPageComponent } from './page/form-page/form-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formulario', component: FormPageComponent },
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
