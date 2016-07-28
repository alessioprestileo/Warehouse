import { Component, OnInit } from '@angular/core';
import { Product }        from '../models/product';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'most-expensive',
  template: `<div *ngIf="most_expensive">The most expensive componet is {{most_expensive.editables.name}}, and it costs {{most_expensive.editables.price}} dollars
  					</div>`
})

export class MostExpensiveComponent implements OnInit {
	private most_expensive: Product;

  constructor(
		private serverService: ServerService
 	) {

 	}
 ngOnInit() {
	 this.getMostExpensive()
	 	.then(res => this.most_expensive = res);
	}
	getMostExpensive() : Promise<Product> {
		return this.serverService.getProducts()
			.then(res => res.sort((a, b) => (b.editables.price - a.editables.price)))
			.then(sorted => sorted[0]);
	}
}
