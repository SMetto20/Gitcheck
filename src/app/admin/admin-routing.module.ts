import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { FormsComponent } from '../components/forms/forms.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'froms', component:FormsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
