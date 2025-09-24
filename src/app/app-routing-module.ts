import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAccountComponent } from './list-account-component/list-account-component';
import { OpenAccountComponent } from './open-account-component/open-account-component';

const routes: Routes = [
  {path:'accounts',component:ListAccountComponent},
  {path:'',redirectTo:'accounts',pathMatch:'full'},
  {path:'open-account',component:OpenAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
