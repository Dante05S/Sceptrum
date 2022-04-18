import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  {
    path: '',
    redirectTo: 'account',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./public/pages/home/home.module').then(m => m.HomeModule)

  },

  {
    path: 'login',
    loadChildren: () => import('./public/auth/pages/login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./public/auth/pages/register/register.module').then(m => m.RegisterModule)
  },

  {
    path: 'register-business',
    loadChildren: () => import('./public/auth/pages/register-business/register-business.module').then(m => m.RegisterBusinessModule)
  },

  {
    path: 'account',
    loadChildren: () => import('./protected/pages/account/account.module').then(m => m.AccountModule)
  },

  {
    path: 'order',
    loadChildren: () => import('./protected/pages/order/order.module').then(m => m.OrderModule)
  },
  {
    path:'**',
    redirectTo:'account'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
