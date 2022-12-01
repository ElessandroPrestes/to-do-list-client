import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  constructor(private mainService: MainService) { }


  ngOnInit(): void {
    this.mainService.getUsers()
      .subscribe(
        (user) => {
          console.log(user);
        },
        (err) => console.error(err)
      );
  }

}
