import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutData: any = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: undefined,
    address: "",
    city: "",
    zip: undefined,
  };

  constructor(public cartService: CartService,
              private toastr: ToastrService,
              public router: Router) { }

  ngOnInit(): void {
  }

  save(formdata: NgForm){

    // we can call service to save checkout and cart data to store it in persistent memory like db
    // After saving, lets clear cart and checkout form & Redirect to all products page

    this.checkoutData = {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: undefined,
      address: "",
      city: "",
      zip: undefined,
    };

    this.toastr.success("Order Placed Successfully, Continue Shopping...");

    this.cartService.resetCart();

    this.router.navigateByUrl('/products');

  }

}
