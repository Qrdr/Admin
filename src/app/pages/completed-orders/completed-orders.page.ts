import { Component } from '@angular/core';
import { OrdersService } from './../../services/orders.service';

@Component({
	selector: 'app-completed-orders',
	templateUrl: 'completed-orders.page.html',
	styleUrls: ['completed-orders.page.scss']
})
export class CompletedOrdersPage {
	constructor(private orders: OrdersService) {}

	public completedOrders$ = this.orders.completedOrders$;
}
