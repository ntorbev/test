import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {
  static topTen: string[];
  posts: string;

  constructor(private http: HttpClient) {
  }

  getPosts(userId: string) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).pipe(
      tap((posts: any) => {
        posts.forEach(post => this.posts += post.body);
        UserPostsService.topTen = this.getFrequency2(this.posts, 10);
      })
    );
  }

  getFrequency2(string, cutOff) {
    const cleanString = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    let words = cleanString.split(' ');
    const frequencies = {};
    let word: any;

    for (let i = 0; i < words.length; i++) {
      word = words[i];
      frequencies[word] = frequencies[word] || 0;
      frequencies[word]++;
    }

    words = Object.keys(frequencies);

    return words.sort(function (a, b) {
      return frequencies[b] - frequencies[a];
    }).slice(0, cutOff);
  }
}
