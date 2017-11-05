// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { MyCustomMaterialModule } from './material.module';

// Third Party
// import { ng2Parallax } from '../../node_modules/ang2-parallax/ng2parallax';

// Components
import { AppComponent } from './app.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { NavComponent } from './common/nav/nav.component';
import { SearchComponent } from './pages/search/search.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { PostComponent } from './pages/post/post.component';
import { ViewingsComponent } from './pages/viewings/viewings.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'post', component: PostComponent },
  { path: 'viewings', component: ViewingsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/search',  pathMatch: 'full' },
  { path: '**', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    NavComponent,
    SearchComponent,
    PostComponent,
    ListingsComponent,
    ViewingsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyCustomMaterialModule,
    // ng2Parallax,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
