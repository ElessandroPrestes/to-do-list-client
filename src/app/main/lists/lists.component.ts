import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../IList';
import { MainService } from '../main.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  list$!: Observable<List[]>;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.list$ = this.mainService.getLists();
  }

}
