import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss'],
})
export class DebugComponent implements OnInit {
  constructor() {}
  @Input() content: string;
  ngOnInit(): void {
    console.log(this.content);
  }
}
