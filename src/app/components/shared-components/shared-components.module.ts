import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OrderCardComponent } from './order-card/order-card.component';

@NgModule({
	declarations: [OrderCardComponent],
	imports: [IonicModule, CommonModule],
	exports: [OrderCardComponent]
})
export class SharedComponentsModule {}
