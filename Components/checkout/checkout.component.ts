import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cartId: string = ""

  constructor(private _PaymentService: PaymentService, private _ActivatedRoute: ActivatedRoute) {

    _ActivatedRoute.params.subscribe((params) => {


      this.cartId = params['cartId']

    })
  }

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
  })

  checkout(shippingAddress: FormGroup) {
    console.log(shippingAddress.value);

    this._PaymentService.CreateCashOrder(this.cartId, shippingAddress.value).subscribe((res) => {
      console.log(res.session.url);

      location.href = res.session.url
    })

  }
}
