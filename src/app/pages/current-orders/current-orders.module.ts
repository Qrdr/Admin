import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../../components/shared-components/shared-components.module';
import { CurrentOrdersPage } from './current-orders.page';

@NgModule({
	imports: [
		SharedComponentsModule,
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: CurrentOrdersPage }])
	],
	declarations: [CurrentOrdersPage]
})
export class CurrentOrdersPageModule {}
