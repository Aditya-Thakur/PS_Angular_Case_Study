import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  dynamicArray: number[] = [...Array(15).keys()];

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', (e) => {
      this.dynamicArray.push(this.dynamicArray.length);
    });
  }

  alert(id: number) {
    window.alert('Button in box no. ' + (id+1) + ' clicked.')
  }

}
