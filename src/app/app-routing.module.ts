import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { ExchangeFormComponent } from './components/exchange/exchange-form/exchange-form.component';
import { ExchangeUpdateComponent } from './components/exchange/exchange-update/exchange-update.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'exchange', component: ExchangeComponent, canActivate: [AuthGuardService] },
    { path: 'exchange/form', component: ExchangeFormComponent, canActivate: [AuthGuardService] },
    { path: 'exchange/update/:id', component: ExchangeUpdateComponent, canActivate: [AuthGuardService] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }