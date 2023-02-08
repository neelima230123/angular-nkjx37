import { Component } from '@angular/core';
import { customersData } from '../customersData';


@Component({
  selector: 'app-offerComponent',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class offerComponent {
  customersData = customersData;
  
  
  }
}


