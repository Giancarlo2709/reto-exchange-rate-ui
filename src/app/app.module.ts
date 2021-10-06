import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { AuthGuardService } from './services/auth-guard.service';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { ExchangeFormComponent } from './components/exchange/exchange-form/exchange-form.component';
import { ExchangeUpdateComponent } from './components/exchange/exchange-update/exchange-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ExchangeComponent,
    ExchangeFormComponent,
    ExchangeUpdateComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule
  ],
  providers: [AuthGuardService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
