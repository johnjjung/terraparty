import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FileBuilderComponent } from './file-builder/file-builder.component';

const appRoutes: Routes = [
  { path: 'filebuilder', component: FileBuilderComponent},

  { path: 'homepage', component: HomepageComponent, data: {} },
  { path: '', component: HomepageComponent, data: {} },
  
  { path: '**', component: PagenotfoundComponent }
]

@NgModule({
  declarations: [AppComponent, HomepageComponent, PagenotfoundComponent, FileBuilderComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }