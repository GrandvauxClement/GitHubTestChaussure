import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import { ChaussureDetailComponent } from './components/chaussure-detail/chaussure-detail.component';
import { AddChaussureComponent } from './components/add-chaussure/add-chaussure.component';
import { UpdateChaussureComponent } from './components/update-chaussure/update-chaussure.component';


const routes: Routes = [
  {path: '', redirectTo: 'chaussure', pathMatch: 'full'},
  {path: 'chaussure', component: ChaussureComponent},
  {path: 'chaussure-detail/:id', component: ChaussureDetailComponent},
  {path: 'add-chaussure', component: AddChaussureComponent},
  {path: 'chaussure-update/:id', component: UpdateChaussureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
