import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  selectedFilter: string = 'low';
  view: string = 'grid'
  constructor(private api: ApiService) { }

  ngOnInit(): void{
    this.api.getAllProducts().subscribe(
      data => {
        this.products = data;
        this.products.push(...data);      
      }
    )
  }

  toggleView() {
    this.view = (this.view==='grid')?'list':'grid';
  }

  filterPrice(event: any) {
    if(event.target.value == 'low') {
      this.products = this.products.sort(this.compareFunction)
    } else {
      this.products = (this.products.sort(this.compareFunction)).reverse();
    }
  }

  compareFunction(p1: any, p2: any) {
      if(p1.price < p2.price){
              return -1;
      }else if(p1.price > p2.price){
              return 1;
      }else{
              return 0;
      }
  }

}
