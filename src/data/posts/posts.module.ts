import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DispatcherModule } from '../dispatcher/dispatcher.module';
import { PostsStore } from './posts.store';

@NgModule({
  imports: [
    CommonModule,
    DispatcherModule,
    HttpClientModule,
  ],
  providers: [
    PostsStore
  ],
})
export class PostsModule {}

export * from './posts.api';
export * from './posts.store';
