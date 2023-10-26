import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Interfaces/product';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent  implements OnInit {

  Brands: Brand[] = []


  constructor(private _BrandService: BrandService) {

  }

  ngOnInit(): void {
    this._BrandService.getAllBrand().subscribe((res) => {
      console.log(res.data);
      this.Brands = res.data
    })
  }

}
