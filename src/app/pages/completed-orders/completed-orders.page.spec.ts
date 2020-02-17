import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CompletedOrdersPage } from './completed-orders.page';

describe('CompletedOrdersPage', () => {
	let component: CompletedOrdersPage;
	let fixture: ComponentFixture<CompletedOrdersPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CompletedOrdersPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(CompletedOrdersPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
