import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public usersService: UsersService) {
  }
}
