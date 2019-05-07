import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DispatcherService, Post, PostsStore } from '../../data/data.module';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  public posts$: Observable<Post[]>;

  constructor(
    private dispatcher: DispatcherService,
    private postsStore: PostsStore
  ) {
    this.posts$ = this.postsStore.getPostsObservable().asObservable();
  }
}
