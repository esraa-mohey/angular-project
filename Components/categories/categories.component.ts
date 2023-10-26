import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { category } from 'src/app/Interfaces/category';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit {

  categories: category[] = []


  constructor(private _CategoriesService: CategoriesService) {

  }

  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe((res) => {
      console.log(res.data);
      this.categories = res.data
    })
  }
}
