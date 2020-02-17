import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from './../../../services/orders.service';

@Component({
	selector: 'app-order-card',
	templateUrl: './order-card.component.html',
	styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {
	constructor(private orders: OrdersService) {}

	@Input() order: any;

	ngOnInit() {}
}
