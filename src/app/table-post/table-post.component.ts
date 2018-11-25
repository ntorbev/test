import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UserPostsService } from 'src/app/core/user-posts.service';
import { UsersService } from 'src/app/core/users.service';

@Component({
  selector: 'app-table-post',
  styleUrls: ['table-post.component.scss'],
  templateUrl: 'table-post.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TablePostComponent implements OnInit {
  dataSource: any;
  columnsToDisplay = ['title'];
  expandedElement: PeriodicElement;
  private test: {};

  constructor(private userPostsService: UserPostsService, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.userPostsService.getPosts(this.usersService.userSelected.id).subscribe(post => {
      this.dataSource = post;
      this.test = this.userPostsService.topTen;
      debugger;
    });
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

