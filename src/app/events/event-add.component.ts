import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  submit():void{
    console.log("hello");
  }

  ngOnInit(): void {
    
  }
}
