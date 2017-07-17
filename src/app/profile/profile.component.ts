import {Component, OnInit} from '@angular/core';
import {GithubserviceService} from '../services/githubservice.service';
import 'rxjs/add/operator/map';
@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = [];
  repos = [];
  username: string;

  constructor(private _githubservice: GithubserviceService) {
    this._githubservice.getUser().subscribe(user => {
      this.user = user;
      /*console.log(user);*/
    });
    this._githubservice.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  searchUser() {
    console.log('works');
    this._githubservice.findUser(this.username);
    this._githubservice.getUser().subscribe(user => {
      this.user = user;
    });
    this._githubservice.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
}
