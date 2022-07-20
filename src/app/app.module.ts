import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageListWordsComponent } from './pages/page-list-words/page-list-words.component';
import { PageAddWordComponent } from './pages/page-add-word/page-add-word.component';
import { PageUpdateWordComponent } from './pages/page-update-word/page-update-word.component';
import { PageTableComponent } from './pages/page-table/page-table.component';
import { PageVideoComponent } from './pages/page-video/page-video.component';
import { AuthInterceptor } from './auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageSignInComponent,
    PageSignUpComponent,
    PageListWordsComponent,
    PageAddWordComponent,
    PageUpdateWordComponent,
    PageTableComponent,
    PageVideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
