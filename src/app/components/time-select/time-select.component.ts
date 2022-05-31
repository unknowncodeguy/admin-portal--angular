import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-select',
  templateUrl: './time-select.component.html',
  styleUrls: ['./time-select.component.css']
})
export class TimeSelectComponent implements OnInit {

  timeList = [
    '0:00', '1:00', '2:00', '3:00',
    '4:00', '5:00', '6:00', '7:00',
    '8:00', '9:00', '10:00', '11:00',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
