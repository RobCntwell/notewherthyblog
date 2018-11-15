import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

//object imports
import {BlogPost} from '../blogpost';


//service
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  blogposts: BlogPost[];
  

  constructor(
    private profileService: ProfileService,
    private location: Location,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getProfiles();
  }

  openProfile(profile: string) {

  }
  getProfiles(): void {
    this.profileService.getProfiles()
      .subscribe(blogposts => this.blogposts = blogposts);
  }
}
