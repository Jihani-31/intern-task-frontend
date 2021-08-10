import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path: 'country/create', component: CreateComponent},
  {path: 'country/update/:id', component: UpdateComponent},
  {path: 'countries', component: ListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    
  ],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
