import { Component } from '@angular/core';
import { OrdersService } from './../../services/orders.service';

@Component({
	selector: 'app-current-orders',
	templateUrl: 'current-orders.page.html',
	styleUrls: ['current-orders.page.scss']
})
export class CurrentOrdersPage {
	constructor(private orders: OrdersService) {}

	public currentOrders$ = this.orders.currentOrders$;
}
