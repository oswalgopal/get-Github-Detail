import { Component } from '@angular/core';
import {Api} from '../api/api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: any;
  GetDetail: boolean;
  UserDetail: any = {
    avatar_url: '',
    bio: '',
    blog: '',
    company: '',
    created_at: '',
    email: '',
    events_url: '',
    followers: '',
    followers_url: '',
    following: '',
    following_url: '',
    gists_url: '',
    gravatar_id: '',
    hireable: '',
    html_url: '',
    id: '',
    location: '',
    login: '',
    name: '',
    node_id: '',
    organizations_url: '',
    public_gists: '',
    public_repos: '',
    received_events_url: '',
    repos_url: '',
    site_admin: '',
    starred_url: '',
    subscriptions_url: '',
    type: '',
    updated_at: '',
    url: '',
  };
  constructor(private api: Api) {
    this.GetDetail = false;
  }

  /**
   * function to get the user detial from the api
   */
  GetUserDetail() {
      this.api.GetUserDetail(this.username).then(res => {
        console.log(res);
        this.UserDetail = res;
        this.GetDetail = true;
      }).catch(err => {
        console.log(err);
      });
  }
}
