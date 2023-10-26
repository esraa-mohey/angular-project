import { Brand } from './../../Interfaces/product';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/Interfaces/product';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductsService } from 'src/app/Services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 searchTerm: string = ""

  products: Product[] = []
  



  constructor(private _ProductsService: ProductsService) {

  }

  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.products = res.data
    })


  
  }
}
