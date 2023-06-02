import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './element/header/header.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HeaderComponent,
    children : [
      {
        path: "home",
        component: HomeComponent
      },
      { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },

    ]
    
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
