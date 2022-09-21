import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {

  @Input()
  title: String = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
