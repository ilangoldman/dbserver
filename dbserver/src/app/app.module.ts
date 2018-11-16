import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './core/MaterialModule';
// import { CoreModule } from './core/CoreModules';
import { AuthService } from './_service/auth/auth.service';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'environments/environment';

// App Routes
import { AppRouting } from 'app/app.routing';

// Pipes
import { CurrencyFormatPipe } from './_pipe/currency-format.pipe';
import { RatingFormatPipe } from './_pipe/rating-format.pipe';
import { KeysPipe } from './_pipe/keys.pipe';

// Services
import { BusinessService } from './_service/business/business.service';

// Telas
import { AppComponent } from './app.component';

// Components - Elementos
import { SearchComponent } from './components/search/search.component';

// Paginas Padrao
import { MenuComponent } from './pages/menu/menu.component';

import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';



import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DatabaseComponent } from './database/database.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormatPipe,
    SearchComponent,
    RatingFormatPipe,
    LoginComponent,
    MenuComponent,
    KeysPipe,
    CadastroComponent,
    DatabaseComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRouting,
    AngularFireAuthModule,
    MaterialModule,
    CommonModule
  ],
  providers: [
    AuthService,
    BusinessService
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
