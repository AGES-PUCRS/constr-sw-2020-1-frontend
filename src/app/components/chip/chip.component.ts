import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  constructor() { }
  @Input() label: string;
  @Input() deletable: boolean;
  @Input() chipSelected: boolean;

  ngOnInit(): void {
  }

}