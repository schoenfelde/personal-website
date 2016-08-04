import {Component} from '@angular/core';
import {backgroundcomponent} from './BackGround.component';

@Component({
	selector: 'my-app',
	templateUrl: '/views/homepage.html',
	styleUrls: ['../css/homepage.css'],
	directives: [backgroundcomponent]
})

export class AppComponent {}