import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts/carts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartsService: CartsService) { }

  ngOnInit() {
  }

}
