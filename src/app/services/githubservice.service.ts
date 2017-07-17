import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubserviceService {
  private username: String;

  constructor(private _http: Http) {
    console.log('service is ready');
    this.username = 'sajid-dev';
  }

  getUser() {
    return this._http.get('https://api.github.com/users/' + this.username).map(res => res.json());
  }

  getRepos() {
    return this._http.get('https://api.github.com/users/' + this.username + '/repos').map(res => res.json());
  }

  findUser(username: string) {
    this.username = username;
  }
}
