import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class OrdersService {
	//Local array that is a copy of a the backend version
	orders: any[];
	//Behaviorsubjects that change when orders is changed
	currentOrders$ = new BehaviorSubject([]);
	completedOrders$ = new BehaviorSubject([]);

	//INSERT FIREBASE CODE HERE
	constructor(private http: HttpClient) {
		// this.pullFromBackend();
		// console.log('constructor called');
	}

	//Pulls new order data from the backend
	async pullFromBackend() {
		let result = await this.http.get('assets/test.json').toPromise();
		this.orders = result['orders'];
	}
	//Pushes modified order data to the backend
	pushToBackend() {
		console.log('TO BE IMPLEMENTED');
	}

	//Creates the currentOrders$ and completedOrders$ behaviorsubjects
	async initializeOrders() {
		await this.pullFromBackend();
		this.currentOrders$.next(
			this.orders.filter(order => order.completed == false)
		);
		this.completedOrders$.next(
			this.orders.filter(order => order.completed == true)
		);
	}

	//Sets an order's completed property to true
	completeOrder(order) {
		let orderId = order.orderId;
		let selectedOrder = this.orders.filter(order => order.orderId == orderId);
		selectedOrder[0].completed = true;
		//Updates currentOrders$ and completedOrders$ and pushes the changes to the backend
		this.currentOrders$.next(
			this.orders.filter(order => order.completed == false)
		);
		this.completedOrders$.next(
			this.orders.filter(order => order.completed == true)
		);
		this.pushToBackend();
	}
}
