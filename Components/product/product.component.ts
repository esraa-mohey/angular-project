import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: any;

  constructor(private _CartService: CartService,private _wishlistService :WishlistService, private _AuthService: AuthService,
    private toastr: ToastrService) {

  }


  addProductToCart(productId: string) {
    this._CartService.addProductToCart(productId).subscribe({
      next: (res) => {
        // console.log(res.numOfCartItems);
        this._CartService.numOfCartItems.next(res.numOfCartItems)

        this.toastr.success('Product added to cart', 'Success');
      },
      error: (err) => {
        console.log(err.error.message);
        this.toastr.error('Product out of stock');

        if (err.error.message == 'Invalid Token. please login again') {
          this._AuthService.logOut()
        }

      }
    })
  }

  addFav(productId: string):void{
     this._wishlistService.addToWishlistCart(productId).subscribe({
      next: (res) => {
         console.log(res._wishlistService);
         this.toastr.success('Product added to wishlist', 'Success');
      },
      error: (err) => {
        console.log(err.error.message);

        if (err.error.message == 'Invalid Token. please login again') {
          this._AuthService.logOut()
        }

      }
    })
  }



}
