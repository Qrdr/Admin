import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../../components/shared-components/shared-components.module';
import { CompletedOrdersPage } from './completed-orders.page';

@NgModule({
	imports: [
		SharedComponentsModule,
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: CompletedOrdersPage }])
	],
	declarations: [CompletedOrdersPage]
})
export class CompletedOrdersPageModule {}
