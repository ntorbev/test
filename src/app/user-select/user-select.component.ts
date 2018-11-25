import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith, switchMap, timeout } from 'rxjs/operators';
import { UserPostsService } from 'src/app/core/user-posts.service';
import { UsersService } from 'src/app/core/users.service';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss']
})
export class UserSelectComponent implements OnInit {
  userCtrl = new FormControl();
  users: any;
  filteredUsers: Observable<string[]>;

  constructor(private usersService: UsersService, private userPostservice: UserPostsService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(res => {
      this.users = res;
      this.usersService.users = res;
    });
    setTimeout(() => {
      this.filteredUsers = this.userCtrl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    }, 1000);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.users && this.users.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  userSelection(user: any) {
    this.usersService.userSelected = user;
  }
}
