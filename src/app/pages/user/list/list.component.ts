import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private userService: UserService) {

  }
  users: any;
  page=1;
  perPage=6

  ngOnInit(): void {
    this.userService.getUsersWithPagination(this.page,this.perPage).subscribe(data => {
      this.users = data
      console.log(this.users );
      

    })
  }
}
