import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatcherModule } from './dispatcher/dispatcher.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  imports: [
    CommonModule,
    DispatcherModule,
    PostsModule,
  ],
})
export class DataModule {}

export * from './dispatcher/dispatcher.module';
export * from './posts/posts.module';
