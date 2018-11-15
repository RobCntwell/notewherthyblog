import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BlogPost } from './blogpost';
import { BLOGPOSTS} from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfiles(): Observable<BlogPost[]> {
    return of(BLOGPOSTS);
  }

  getProfile(name: string): Observable<BlogPost> {
    return of(BLOGPOSTS.find(blogpost => blogpost.name === name))
  }

  
}
