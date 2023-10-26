import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/Interfaces/product";
import { ProductsService } from "src/app/Services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

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
