import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsListComponent } from './posts-list.component';
import { DispatcherModule, PostsModule } from '../../data/data.module';

@NgModule({
  declarations: [
    PostsListComponent,
  ],
  exports: [
    PostsListComponent,
  ],
  imports: [
    CommonModule,
    DispatcherModule,
    PostsModule,
  ],
})
export class PostsListModule {}
