import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: any[] = []
  totalCartPrice: number = 0
  errorMessage: string = ""
  isLoading: boolean = false
  updateProductCountTimeOut: any;
  cartId: string = ""
  constructor(private _CartService: CartService) {

  }
  ngOnInit(): void {
    this.getUserCartProducts()
  }


  getUserCartProducts() {
    this.isLoading = true
    this._CartService.getUserCartProducts().subscribe({
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
    this._CartService.removeCartProduct(productId).subscribe({
      next: (res) => {
        console.log(res);
        this.cartProducts = res.data.products
        this.totalCartPrice = res.data.totalCartPrice
        this._CartService.numOfCartItems.next(res.numOfCartItems)
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  clearUserCart() {
    this._CartService.clearUserCart().subscribe({
      next: (res) => {
        console.log(res);
        if (res.message == 'success') {
          this.cartProducts = []
          this.totalCartPrice = 0
          this._CartService.numOfCartItems.next(0)
        }

      },
      error: (err) => {
        console.log(err);

      }
    })
  }


  updateProductCount(productId: string, count: number, index: number) {
    this.cartProducts[index].count = count
    this.totalCartPrice += this.cartProducts[index].price
    // console.log(this.cartProducts);
    clearTimeout(this.updateProductCountTimeOut)
    console.log("clearTimeout");
    
    this.updateProductCountTimeOut = setTimeout(() => {
      console.log("Request sent");
      
      this._CartService.updateProductCount(productId, count).subscribe({
        next: (res) => {
          console.log(res);
          this.cartProducts = res.data.products
          this.totalCartPrice = res.data.totalCartPrice
        },
        error: (err) => {
          console.log(err);


          this.getUserCartProducts()
        }
      })
    }, 500);

  }



}
