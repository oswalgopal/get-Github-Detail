import { Component } from '@angular/core';
import {Api} from '../api/api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
username: any;
  constructor(private api: Api) {}

  /**
   * function to get the user detial from the api
   */
  GetUserDetail() {
      this.api.GetUserDetail(this.username).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
  }
}
