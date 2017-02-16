import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-display',
  inputs: ['price'],
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})
export class PriceDisplayComponent implements OnInit {
	price: number;
  constructor() { }

  ngOnInit() {
  }

}
