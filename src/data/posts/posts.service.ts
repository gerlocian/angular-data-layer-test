import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as PostsApi from './posts.api';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsApi.Post[]> {
    return this.http.get<PostsApi.Post[]>('http://jsonplaceholder.typicode.com/posts');
  }

  getPostById(postId: number): Observable<PostsApi.Post> {
    return this.http.get<PostsApi.Post>(`http://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  getPostsByUserId(userId: number): Observable<PostsApi.Post[]> {
    return this.http.get<PostsApi.Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getComments(): Observable<PostsApi.Comment[]> {
    return this.http.get<PostsApi.Comment[]>(`http://jsonplaceholder.typicode.com/comments`);
  }

  getCommentsByPostId(postId: number): Observable<PostsApi.Comment[]> {
    return this.http.get<PostsApi.Comment[]>(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}

