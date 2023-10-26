import { CartService } from './../../Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent  implements OnInit{

  WishlistProducts: any[] = []
  product: Product[] = []
  cartProducts: any[] = []
  totalCartPrice: number = 0
  errorMessage: string = ""
  isLoading: boolean = false
  updateProductCountTimeOut: any;
  cartId: string = ""
  constructor(private _WishlistService: WishlistService ,

    ) {

  }

  ngOnInit(): void {
    this.getwishlist();
    }

    getwishlist(){
    this.isLoading = true
    this._WishlistService.getwishlist().subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading = false
        this.cartProducts = res.data.products
        this.totalCartPrice = res.data.totalCartPrice
        this.cartId = res.data._id
      },
      error: (err) => {
        console.log(err.error.message);
        this.isLoading = false

        if (err.error.message.includes('No cart exist for this user:')) {
          this.errorMessage = err.error.message
        }

      }
    })
  }
  removeProductFromCart(productId: string) {
    this._WishlistService.removewishlist(productId).subscribe({
      next: (res) => {
        console.log(res);
        this.cartProducts = res.data.products
        this.totalCartPrice = res.data.totalCartPrice
        this._WishlistService.numOfCartItems.next(res.numOfCartItems)
      },
      error: (err) => {
        console.log(err);

      }
    })
  }


  }

