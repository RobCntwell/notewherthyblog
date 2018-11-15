import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BlogPost } from '../blogpost';
//import {BLOGPOSTS} from '../mock-posts';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: BlogPost;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private profileService: ProfileService,
  ) { }

  ngOnInit(  ) {
    
    this.getProfile();
  }


  getProfile(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.profileService.getProfile(name)
      .subscribe(profile => this.profile = profile);
  }
}
