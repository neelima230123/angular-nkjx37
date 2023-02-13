import { Component ,OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     const routeParams = this.route.snapshot.paramMap;
     const productIdFromRoute = Number(routeParams.get('productId'));
   this.product = products.find(product => product.id === productIdFromRoute);
  }


  
  
}


