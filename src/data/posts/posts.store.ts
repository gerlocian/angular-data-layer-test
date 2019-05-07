import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DispatcherService } from '../dispatcher/dispatcher.service';
import { Action, ActionType } from '../dispatcher/actions.api';
import * as PostsApi from './posts.api';
import { PostsService } from './posts.service';

@Injectable()
export class PostsStore implements OnDestroy {
  private posts$: BehaviorSubject<PostsApi.Post[]> = new BehaviorSubject<PostsApi.Post[]>([]);
  private dispatcherSubscription: Subscription;

  constructor(private postsService: PostsService, private dispatcher: DispatcherService) {
    this.dispatcherSubscription = this.dispatcher.getDispatcher()
      .pipe(filter(({ type }: Action) => type === ActionType.RELOAD_POSTS))
      .subscribe((action: Action) => this.updatePostsData());
  }

  getPostsObservable(): BehaviorSubject<PostsApi.Post[]> {
    return this.posts$;
  }

  ngOnDestroy(): void {
    this.dispatcherSubscription.unsubscribe();
  }

  private updatePostsData(): void {
    this.postsService.getPosts().subscribe((posts: PostsApi.Post[]) => this.posts$.next(posts));
  }
}
