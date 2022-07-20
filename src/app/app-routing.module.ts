import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageVideoComponent } from './pages/page-video/page-video.component';
import { PageTableComponent } from './pages/page-table/page-table.component';
import { PageListWordsComponent } from './pages/page-list-words/page-list-words.component';
import { PageAddWordComponent } from './pages/page-add-word/page-add-word.component';
import { PageUpdateWordComponent } from './pages/page-update-word/page-update-word.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';

const routes: Routes = [
  { path: '', component: PageTableComponent },
  { path: 'video/:id-word', component: PageVideoComponent},
  { path: 'word-list', component: PageListWordsComponent },
  { path: 'add-word', component: PageAddWordComponent },
  { path: 'update-word/:id-word', canActivate:[AuthGuard], component: PageUpdateWordComponent},
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'sign-in', component: PageSignInComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
