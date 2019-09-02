import {HttpClient} from '@angular/common/http';

export class Api {
  constructor(private http: HttpClient) {
  }

  /**
   * function to get the user detail from the api
   * @param username: username of the user
   */
  GetUserDetail(username) {
    return new Promise((resolve, reject) => {
      this.http.get('https://api.github.com/users/' + username).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }
}

