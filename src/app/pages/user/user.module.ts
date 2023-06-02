import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {

        path: '',
        redirectTo: 'list',
        pathMatch: 'full'

      },
      {
        path: '**', redirectTo: 'list', pathMatch: 'full'
      }
    ]


  },

];


@NgModule({
  declarations: [
    UserComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserModule { }
