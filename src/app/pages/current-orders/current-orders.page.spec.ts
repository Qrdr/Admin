import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CurrentOrdersPage } from './current-orders.page';

describe('CurrentPage', () => {
	let component: CurrentOrdersPage;
	let fixture: ComponentFixture<CurrentOrdersPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CurrentOrdersPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(CurrentOrdersPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
