import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PostsService
      ]
    }).compileComponents();

    service = TestBed.get(PostsService);
  });
});
