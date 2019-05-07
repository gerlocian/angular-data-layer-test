import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsListModule } from './posts-list/posts-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostsListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
