import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Questao1Component } from './components/questao1/questao1.component';
import { Questao2Component } from './components/questao2/questao2.component';
import { Questao3Component } from './components/questao3/questao3.component';
import { LinkComponent } from './components/link/link.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {
    path: 'questao1', 
    component: Questao1Component
  },
  {
    path: 'questao2',
    component: Questao2Component
  },
  {
    path: 'questao3',
    component: Questao3Component
  },
  {
    path: 'link',
    component: LinkComponent
  },
  {
    path: '',
    redirectTo: 'questao1',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Questao1Component,
    Questao2Component,
    Questao3Component,
    LinkComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
