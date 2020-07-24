import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() text: string;
  @Output() textChange = new EventEmitter<string>();
   internalText: string = 'Angular';
selected = 'C';
  constructor() {
  }

  ngOnInit(): void {
  }

  textChanged(event: KeyboardEvent): any {
    const value = (event.target as any).value;
    this.textChange.emit(value);
  }
}
