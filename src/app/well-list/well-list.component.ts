import {  AfterViewInit, Component, ElementRef, OnInit, QueryList,  ViewChild, ViewChildren } from '@angular/core';
import { AddWellComponent } from '../AddWell/add-well/add-well.component';
import { Well } from '../well.model';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css'],
})
export class WellListComponent implements OnInit {
  constructor() {
  }

  @ViewChildren('sourceRef',{ read: ElementRef }) Source: QueryList<ElementRef>;

  getWellData(form) {
    this.wells.push({
      Name: form.name,
      Type: form.type,
      Source: form.source,
    });
  }

  wells: Well[] = [
    {
      Name: 'Test1',
      Type: 'rls',
      Source: 1001001,
    },
    {
      Name: 'Test2',
      Type: 'esp',
      Source: 101010101,
    },
    {
      Name: 'Test3',
      Type: 'rls',
      Source: 100001,
    }
  ];
  ngOnInit(): void {}
  index1: number =0;
  sendSource(i){
    this.index1=i;
  }
}
