import { AuthService } from 'src/app/Services/auth.service';
import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isUserLoggedIn: boolean = false
  numOfCartItems: number = 0
  constructor(private _AuthService: AuthService, private _CartService:CartService,private _WishlistService:WishlistService) {
    _AuthService.isUserLoggedIn.subscribe((res) => {
      console.log(res);
      this.isUserLoggedIn = res

    })

    _CartService.numOfCartItems.subscribe((res) => {
      console.log(res);
      this.numOfCartItems = res

    })
    _WishlistService.numOfCartItems.subscribe((res) => {
      console.log(res);
      this.numOfCartItems = res
  })

  }
  logOut(){
    this._AuthService.logOut()
  }

}

