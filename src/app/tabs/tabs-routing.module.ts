import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'currentOrders',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('../pages/current-orders/current-orders.module').then(
								m => m.CurrentOrdersPageModule
							)
					}
				]
			},
			{
				path: 'completedOrders',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('../pages/completed-orders/completed-orders.module').then(
								m => m.CompletedOrdersPageModule
							)
					}
				]
			},
			{
				path: '',
				redirectTo: '/tabs/currentOrders',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/tabs/currentOrders',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageRoutingModule {}
