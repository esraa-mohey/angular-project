import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { ProductsService } from 'src/app/Services/products.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  productId: string = ""
  productDetails!: Product
  @Input() product: any;



  constructor(private _CartService: CartService, private _AuthService: AuthService,private _ActivatedRoute: ActivatedRoute, private _ProductsService:ProductsService,private toastr: ToastrService) {
    _ActivatedRoute.paramMap.subscribe((params) => {

      this.productId = params.get('id') || ""

      _ProductsService.getProductDetails(this.productId).subscribe((res) => {
        console.log(res.data);


        this.productDetails = res.data


      })

    })

  }

}
