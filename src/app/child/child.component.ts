import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() value = 0;
  @Output() incrementValue = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increase(): void {
    this.value++;
    this.incrementValue.emit(this.value);
  }

}
