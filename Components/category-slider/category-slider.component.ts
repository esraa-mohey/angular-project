import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Brand } from 'src/app/Interfaces/product';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit {
  categories: Brand[] = []
  CategoryCustomOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7
      }
    },
    nav: true
  }

  constructor(private _CategoriesService: CategoriesService) {

  }

  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe((res) => {
      console.log(res.data);
      this.categories = res.data
    })
  }
}
