import {Component} from '@angular/core';
import {ProfileComponent} from './profile/profile.component';
import {GithubserviceService} from './services/githubservice.service';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubserviceService]
})
export class AppComponent {
  title = 'app works!';
}
